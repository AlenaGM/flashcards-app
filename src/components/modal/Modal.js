import { useContext } from 'react';
import { SelectContext } from '../../context/selectContext';

import './modal.scss';

const Modal = (props) => {

    const {modalActive, setModalActive} = useContext(SelectContext);
    const { setTerm } = useContext(SelectContext);

    const handleConfirm = () => {
        setModalActive(false);
        setTerm('');
    }

    return (
        <div className={modalActive? "modal active" : "modal"} onClick={()=>setModalActive(false)}>
            <div className={modalActive? "modal__content active" : "modal__content"}  onClick={e => e.stopPropagation()}>
            <div className="div">Удалить слово?</div>
                <div className="div">
                    <button className='button button__size-small' onClick={handleConfirm}>Да</button>
                    <button className='button button__size-small' onClick={()=>setModalActive(false)}>Нет</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;