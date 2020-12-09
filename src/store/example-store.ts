import {action, makeAutoObservable, makeObservable, observable} from 'mobx';
import {createContext} from 'react';
import {Example} from "../types/example";


export class ExampleStore {
    // constructor() {
    //     makeObservable(this, {
    //         currentExample: observable,
    //         updateExample: action
    //     })
    // }

    @observable currentExample: Example = {};
    @action updateExample = () => {
        this.currentExample = {
            id: Math.random(),
            name: Math.random().toString(2)
        }
    }
}

const context = createContext(new ExampleStore());

export {context as ExampleStoreContext};
