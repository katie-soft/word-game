import NavButton from '../NavButton/NavButton';
import styles from './Navigation.module.css';

type NavigationProps = {
	openHint: () => void;
	goBack?: () => void;
}

function Navigation({ openHint, goBack }: NavigationProps) {

	return <div className={styles['nav-wrapper']}>
		<NavButton variant={'home'}></NavButton>
		{goBack && <NavButton variant={'back'} onClick={goBack}></NavButton>}
		<NavButton variant={'hint'} onClick={openHint}></NavButton>
	</div>;  
}

export default Navigation;