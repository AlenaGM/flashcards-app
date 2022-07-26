import { useState, createContext } from 'react';

export const SelectContext = createContext();

function SelectContextProvider (props) {

    const [modalActive, setModalActive] = useState(false);

    return (
    <SelectContext.Provider value={{ modalActive,setModalActive}}>
        {props.children}
    </SelectContext.Provider>
    );
}

export default SelectContextProvider;