import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css'
import Image from 'C:/Users/Abdullah/Desktop/ReactApp/app-pages/src/Images/VU360_Solutions-removebg-preview.png';

function MainNavigation() {


return <header className={classes.header}>
    <div className={classes.logo}>
    Portal
    <span />
    <img src={Image} height={40} width={40} alt="VU360 SOLUTIONS" />
    </div>
    <nav>
        <ul>
            <li>
                <Link to='/'>Profile</Link>
            </li>
            <li>
                <Link to='/appointments'>Appointments</Link>
            </li>
            
        </ul>
    </nav>
</header>
}
export default MainNavigation;