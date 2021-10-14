import store from './Store'
import {Provider} from 'react-redux'
import './App.css';
import ProductList from './ProductList'
import NavBar from './NavBar'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Cart from './Cart'
import ProductDetails from './ProductDetails'


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
            <NavBar/>
            <Switch>
              <Route exact path='/'>
                <ProductList></ProductList>
              </Route>
              <Route exact path='/cart'>
                <Cart/>
              </Route>
              <Route exact path='/products/:id'>
                <ProductDetails/>
              </Route>
            </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

