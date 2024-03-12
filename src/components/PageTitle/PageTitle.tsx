import { HTMLAttributes, ReactNode } from 'react';
import styles from './PageTitle.module.css';

export interface PageTitleProps extends HTMLAttributes<HTMLHeadingElement> {
	children: ReactNode;
}

function PageTitle({ children }: PageTitleProps) {
	return (
		<h1 className={styles.title}>{children}</h1>
	);
}

export default PageTitle;