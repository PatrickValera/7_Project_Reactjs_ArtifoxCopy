import './styles/app.scss';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Home from './screens/Home'
import Store from './screens/Store'
import Cart from './screens/Cart'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Container from './components/Container'
import ProductPage from './screens/ProductPage'
// import { Container } from '@material-ui/core';
function App() {
  return (
    <>
    <Router>
      <Navigation/>
      <Container>
        <Route path='/' exact component={Home}/>
        <Route path='/store' exact component={Store}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/store/:id' component={ProductPage}/>
        <Footer/>
      </Container>
    </Router>
    </>
  );
}

export default App;
