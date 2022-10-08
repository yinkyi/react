import classes from './Header.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { authActions } from '../store/auth';
const Header = () => {
  const dispatch = useDispatch();
  const logoutHandler= ()=>{
    dispatch(authActions.logout());
  }
  const isAuth = useSelector(state=>state.auth.isAuth);
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
      {isAuth &&
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
}
      </nav>
    </header>
  );
};

export default Header;
