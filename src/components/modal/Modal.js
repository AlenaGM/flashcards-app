import { useContext } from 'react';
import { SelectContext } from '../../context/selectContext';

import './modal.scss';

const Modal = (props) => {

    const {modalActive, setModalActive} = useContext(SelectContext);

    const onConfirm = () => {
        setModalActive(false);
    }

    return (
        <div className={modalActive? "modal active" : "modal"} onClick={()=>setModalActive(false)}>
            <div className={modalActive? "modal__content active" : "modal__content"}  onClick={e => e.stopPropagation()}>
            <div className="div">Удалить слово?</div>
                <div className="div">
                    <button className='button button__size-small' onClick={onConfirm}>Да</button>
                    <button className='button button__size-small' onClick={()=>setModalActive(false)}>Нет</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;