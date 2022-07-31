import { createPortal } from 'react-dom';
import classnames from 'classnames';

import useConfirm from '../../hooks/useConfirm';
import './confirmDialog.scss';


const ConfirmDialog = () => {

    const { onConfirm, onCancel, confirmState } = useConfirm();

    const portalElement = document.getElementById('portal');

    const portalOverlayClasses = classnames('portal__overlay', {active: confirmState.show });
    const confirmDialogClasses = classnames('portal__confirmDialog', {active: confirmState.show });

    const component =
        <div className = {portalOverlayClasses} onClick={onCancel}>
            <div className={confirmDialogClasses} onClick={e => e.stopPropagation()}>
                <p>{confirmState?.text && confirmState.text}</p>
                <div className="portal__confirmDialog_footer">
                    <button className='button button__size-small' onClick={onConfirm}>Delete</button>
                    <button className='button button__size-small' onClick={onCancel}>Cancel</button>
                </div>
            </div>
        </div>
    ;

    return createPortal(component, portalElement);
};

export default ConfirmDialog;

