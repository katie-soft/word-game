import { useDispatch, useSelector } from 'react-redux';
import { set } from '../../store/hint.slice';
import { RootState } from '../../store/store';
import NavButton from '../NavButton/NavButton';
import styles from './Navigation.module.css';

type NavigationProps = {
	goBack?: () => void;
}

function Navigation({ goBack }: NavigationProps) {

	const dispatch = useDispatch();

	const isHintOpen = useSelector((state: RootState) => state.hint);

	const toggleHint = () => {
		if (isHintOpen) {
			dispatch(set(false));
		} else {
			dispatch(set(true));
		}
	};
	
	return <div className={styles['nav-wrapper']}>
		<NavButton variant={'home'}></NavButton>
		{goBack && <NavButton variant={'back'} onClick={goBack}></NavButton>}
		<NavButton variant={'hint'} onClick={() => toggleHint()}></NavButton>
	</div>;  
}

export default Navigation;
