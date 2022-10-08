import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from './store/auth';
import { useEffect } from 'react';
function App() {
  const isAuth = useSelector(state=>state.auth.isAuth);
  const expiredIn = useSelector(state=>state.auth.expiredIn);
  const logoutTimer = useSelector(state=>state.auth.logoutTimer);
  const dispatch = useDispatch();

  useEffect(
    () => {
      if (isAuth) {
        console.log(expiredIn); 
        const identity =  setTimeout(
          () => {
            dispatch(authActions.logout());
          },
          expiredIn
        );
       dispatch(authActions.setTimer(identity));
        // return(()=>{
        //   clearTimeout(identity);
        // })
      }
      
    },
    // respond to changes in isLoggedIn
    [dispatch,isAuth,expiredIn]
  );
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        {!isAuth && 
          <Route path='/auth'>
            <AuthPage />
          </Route>
        }
       
        <Route path='/profile'>
        {isAuth && <UserProfile />}
        {!isAuth && <Redirect to="/auth"/>}
        </Route>
        
        <Route path='*'>
          <Redirect to="/"/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
