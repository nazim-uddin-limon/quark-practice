import {Link} from 'react-router-dom'
import classes from './header.module.css'
const Header = () =>{
    return(
        <header>
            <div className={classes.header}>
                <div>
                    <h2>LOGO</h2>
                </div>
                <div>
                    <ul className={classes.menu}>
                        <li> <Link to='/'>Home</Link> </li>
                        <li> <Link to='/attendance'>Attendance</Link> </li>
                        <li> <Link to='/service'>Service</Link> </li>
                        <li> <Link to='/blog'>Blog </Link> </li>
                        <li> <Link to='/contact'>Contact</Link> </li>
                        <li> <Link to='/profile'>Profile</Link> </li>
                    </ul>
                </div>
                <div className={classes.button}>
                    <button className='btn btn-primary'>Login</button>
                    <button>Sign Up</button>
                </div>
            </div>
        </header>
    )
}

export default Header 