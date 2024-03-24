import { ReactNode } from 'react';

import cn from 'classnames';
import styles from './PageContentWrapper.module.css';

type PageContentWrapperProps = {
	hasTopOffset?: boolean;
	children: ReactNode;
}

function Wrapper({ children, hasTopOffset=false}: PageContentWrapperProps) {

	return (
		<section className={cn(styles.wrapper, 
			{[styles['offset_top_large']]: hasTopOffset
			})}>
			{children}
		</section>
	);
}

export default Wrapper;
