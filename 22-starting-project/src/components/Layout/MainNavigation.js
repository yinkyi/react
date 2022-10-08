import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import classes from './MainNavigation.module.css';
import auth, { authActions } from '../../store/auth';
import { useHistory } from 'react-router-dom';
const MainNavigation = () => {  
  const isAuth = useSelector(state=>state.auth.isAuth);
  const history = useHistory();
  const dispatch = useDispatch();

  const logoutHandler=()=>{
    dispatch(authActions.logout());
    history.replace('/auth');
  }
  
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isAuth &&
            <li>
              <Link to='/auth'>Login</Link>
            </li>
          }
          {isAuth && 
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
          }
          {isAuth && 
            <li>
            <button onClick={logoutHandler}>Logout</button>
            </li>
          }
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
