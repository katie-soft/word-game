import { ReactNode } from 'react';

import styles from './Layout.module.css';

type LayoutProps = {
	children: ReactNode;
}

function Layout({ children }: LayoutProps) {

	return (
		<section className={styles.layout}>
			{children}
		</section>
	);
}

export default Layout;