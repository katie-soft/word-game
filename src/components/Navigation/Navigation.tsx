import NavButton from '../NavButton/NavButton';
import styles from './Navigation.module.css';

function Navigation() {

	return <div className={styles.wrapper}>
		<NavButton variant={'home'}></NavButton>
		<NavButton variant={'results'}></NavButton>
		<NavButton variant={'hint'}></NavButton>
	</div>;  
}

export default Navigation;