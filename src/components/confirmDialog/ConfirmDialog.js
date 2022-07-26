import { createPortal } from 'react-dom';
import useConfirm from '../../hooks/useConfirm';



import './confirmDialog.scss';

const ConfirmDialog = () => {

    const { onConfirm, onCancel, confirmState } = useConfirm();



        const portalElement = document.getElementById('portal');
        const component =
            <div className={confirmState.show ? 'portal-overlay active' : 'portal-overlay'} onClick={onCancel}>
                <div className={confirmState.show ? 'confirm-dialog active' : 'confirm-dialog'} onClick={e => e.stopPropagation()}>
                    <p>{confirmState?.text && confirmState.text}</p>
                    <div className="confirm-dialog__footer">
                        <button className='button button__size-small' onClick={onConfirm}>Да</button>
                        <button className='button button__size-small' onClick={onCancel}>Нет</button>
                    </div>
                </div>
            </div>
        ;

        return createPortal(component, portalElement);

};

export default ConfirmDialog;

