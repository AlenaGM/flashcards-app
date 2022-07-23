import { useState, createContext } from 'react';

export const SelectContext = createContext();

function SelectContextProvider (props) {

    const [term, setTerm] = useState('');
    const [modalActive, setModalActive] = useState(false);

    const onUpdateSearch = (e) => {
        setTerm(e.target.value);
    }

    //const setActive = () => {
    //    setModalActive(true);
    //}

    return (
    <SelectContext.Provider value={{term, modalActive, setTerm, onUpdateSearch, setModalActive}}>
        {props.children}
    </SelectContext.Provider>
    );
}

export default SelectContextProvider;