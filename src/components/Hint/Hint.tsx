import { ReactNode, useEffect, useState } from 'react';
import CloseButton from '../CloseButton/CloseButton';

import styles from './Hint.module.css';
import { RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { set } from '../../store/hint.slice';

type HintProps = {
	close?: () => void;
	children: ReactNode;
}

function Hint({ children }: HintProps) {

	const hint = useSelector((state: RootState) => state.hint);
	const dispatch = useDispatch();

	const [hintIsOpen, setHintIsOpen] = useState(hint);

	useEffect(() => {
		setHintIsOpen(hint);
	}, [ hint ]);

	const closeHint = () => {
		dispatch(set(false));
	};

	if (hintIsOpen) {
		return (
			<div className={styles.hint}>
				{children}
				<CloseButton onClick={closeHint}/>
			</div>
		);
	}
}

export default Hint;