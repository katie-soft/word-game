import { ReactNode} from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

type ModalProps = {
  children: ReactNode;
  open: boolean;
}

const modalDiv = document.getElementById('modal') as HTMLElement;

function Modal({ children, open }: ModalProps) {

	return createPortal(
		<dialog className={styles.modal} open={open}>{children}</dialog>,
		modalDiv
	);
  
}

export default Modal;