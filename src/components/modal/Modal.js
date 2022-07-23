import { useContext } from 'react';
import { SelectContext } from '../../context/selectContext';


import './modal.scss';

const Modal = () => {

    const {modalActive, setModalActive} = useContext(SelectContext);

    return (
        <div className={modalActive? "modal active" : "modal"} onClick={()=>setModalActive(false)}>
            <div className={modalActive? "modal__content active" : "modal__content"}  onClick={e => e.stopPropagation()}>
            <div className="div">Удалить слово?</div>
                <div className="div">
                    <button className='button button__size-small'>Да</button>
                    <button className='button button__size-small' onClick = {()=>setModalActive(false)}>Нет</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;