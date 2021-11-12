import './styles/app.scss';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Home from './screens/Home'
import Store from './screens/Store'
import Cart from './screens/Cart'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Container from './components/Container'
import ProductPage from './screens/ProductPage'
import Register from './screens/Register';
import Login from './screens/Login';
import Profile from './screens/Profile';
import Information from './screens/Information';
import Shipping from './screens/Shipping';
import Payment from './screens/Payment';
// import { Container } from '@material-ui/core';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path='/checkout' exact component={Information}/>
        <Route path='/shipping' exact component={Shipping}/>
        <Route path='/payment' exact component={Payment}/>

        <Route>
          <Navigation/>
          <Container>
            <Route path='/' exact component={Home}/>
            <Route path='/products' component={Store}/>
            <Route path='/cart' component={Cart}/>
            <Route path='/product/:id' component={ProductPage}/>
            <Route path='/user/register' component={Register}/>
            <Route path='/user/login' component={Login}/>
            <Route path='/user/profile' component={Profile}/>
            <Footer/>
          </Container>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
