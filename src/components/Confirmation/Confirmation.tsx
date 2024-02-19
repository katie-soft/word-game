import styles from './Confirmation.module.css';

type ConfirmationProps = {
	onConfirm: () => void;
	onReject: () => void;
	text: string;
}

function Confirmation({ text, onConfirm, onReject }: ConfirmationProps) {

	return (
		<div className={styles.confirmation}>
			{text}
			<div className={styles.buttons}>
				<button className={styles.confirm} onClick={onConfirm}></button>
				<button className={styles.reject} onClick={onReject}></button>
			</div>
		</div>
	);
}

export default Confirmation;