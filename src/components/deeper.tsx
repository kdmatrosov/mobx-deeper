import React, {useContext} from 'react'
import {observer} from "mobx-react";
import {ExampleStoreContext} from "../store/example-store";

export const Deeper = observer(() => {
    const { updateExample} = useContext(ExampleStoreContext);
    return <button onClick={updateExample}>Click</button>
});
