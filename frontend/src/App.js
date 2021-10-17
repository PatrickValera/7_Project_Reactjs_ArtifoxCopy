import './styles/app.scss';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Home from './screens/Home'
import Store from './screens/Store'
import Cart from './screens/Cart'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Container from './components/Container'
import ProductPage from './screens/ProductPage'
import Register from './screens/Register';
import Login from './screens/Login';
// import { Container } from '@material-ui/core';

function App() {
  return (
    <>
    <Router>
      <Navigation/>
      <Container>
        <Route path='/' exact component={Home}/>
        <Route path='/products' component={Store}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/product/:id' component={ProductPage}/>
        <Route path='/user/register' component={Register}/>
        <Route path='/user/login' component={Login}/>
        <Footer/>
      </Container>
    </Router>
    </>
  );
}

export default App;
