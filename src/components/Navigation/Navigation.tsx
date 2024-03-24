import NavButton from '../NavButton/NavButton';
import styles from './Navigation.module.css';

type NavigationProps = {
	toggleHint: () => void;
	goBack?: () => void;
}

function Navigation({ toggleHint, goBack }: NavigationProps) {

	return <div className={styles['nav-wrapper']}>
		<NavButton variant={'home'}></NavButton>
		{goBack && <NavButton variant={'back'} onClick={goBack}></NavButton>}
		<NavButton variant={'hint'} onClick={toggleHint}></NavButton>
	</div>;  
}

export default Navigation;