import React, {useContext, useEffect} from 'react';
import './App.css';
import {observer} from "mobx-react";
import {ExampleStoreContext} from "./store/example-store";
import {Deep} from "./components/deep";

function App() {
    const {currentExample, updateExample} = useContext(ExampleStoreContext);
    useEffect(() => {
        updateExample();
    }, [updateExample]);

    return (
        <div className="App">
            <div>{currentExample.id}</div>
            <div>{currentExample.name}</div>
            <Deep/>
        </div>
    );
}

export default observer(App);
