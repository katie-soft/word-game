import { HTMLAttributes, ReactNode } from 'react';
import styles from './AccentTitle.module.css';

export interface PageTitleProps extends HTMLAttributes<HTMLHeadingElement> {
	children: ReactNode;
}

function AccentTitle({ children }: PageTitleProps) {
	return (
		<h2 className={styles['accent-title']}>{children}</h2>
	);
}

export default AccentTitle;