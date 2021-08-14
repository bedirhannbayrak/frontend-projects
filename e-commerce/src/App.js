import './App.css';
import Navbar from './components/Navbar'
import {Route,BrowserRouter as Router, Switch} from 'react-router-dom'
import Error404 from './pages/Error404'
import ProductDetail from './pages/ProductDetail'
import Basket from './pages/Basket'
import Products from './pages/Products'
import {Flex} from '@chakra-ui/react'
import Categories from './pages/Categories'
import Favorites from './pages/Favorites'

function App() {
  return (
      <Router>
        <Flex flexDir={"column"}>
          <Navbar/>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Products} />
              <Route path="/basket" component={Basket} />
              <Route path="/favorites" component={Favorites} />
              <Route path="/categories" component={Categories} />
              <Route path="/product/:product_id" component={ProductDetail} />
              <Route path="*" component={Error404} />
            </Switch>
          </div>
        </Flex>
      </Router>
  );
}

export default App;
