import { ReactNode} from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
}

const modalDiv = document.getElementById('modal') as HTMLElement;

function Modal({ children, isOpen }: ModalProps) {

	return createPortal(
		<dialog className={styles.modal} open={isOpen}>
			{children}
		</dialog>,
		modalDiv
	);
  
}

export default Modal;