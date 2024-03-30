import styles from './ErrorAlert.module.css';

type ErrorAlertProps = {
  text: string;
  isOpen: boolean;
}

function ErrorAlert({ text, isOpen }: ErrorAlertProps) {
	if (isOpen) {
		return <span className={styles.error}>
			{text}
		</span>;
	}
}

export default ErrorAlert;