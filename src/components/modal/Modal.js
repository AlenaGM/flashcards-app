import { useContext } from 'react';
import { SelectContext } from '../../context/selectContext';

import './modal.scss';

const Modal = () => {

    const {modalActive, setModalActive} = useContext(SelectContext);
    const { setTerm } = useContext(SelectContext);
    const { deleteOK, setDeleteOK } = useContext(SelectContext);

    const handleConfirm = () => {
        setDeleteOK(true);
        setModalActive(false);
        setTerm('');
    }

    const handleRefuse = () => {
        setDeleteOK(false);
        setModalActive(false);
        setTerm('');
    }

    console.log (deleteOK);

    return (
        <div className={modalActive? "modal active" : "modal"} onClick={()=>{setModalActive(false);setDeleteOK(false);}}>
            <div className={modalActive? "modal__content active" : "modal__content"}  onClick={e => e.stopPropagation()}>
            <div className="div">Удалить слово?</div>
                <div className="div">
                    <button className='button button__size-small' onClick={handleConfirm}>Да</button>
                    <button className='button button__size-small' onClick={handleRefuse}>Нет</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;