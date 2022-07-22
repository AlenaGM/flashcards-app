import { useState, createContext } from 'react';

export const SelectContext = createContext();

function SelectContextProvider (props) {

    const [term, setTerm] = useState('');

    const onUpdateSearch = (e) => {
        setTerm(e.target.value);
    }

    return (
    <SelectContext.Provider value={{term, setTerm, onUpdateSearch}}>
        {props.children}
    </SelectContext.Provider>
    );
}

export default SelectContextProvider;