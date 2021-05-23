
import { useState } from 'react';
import Cart from './Components/Cart/Cart';

import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  
  const [cartIsShown, setCartisShown ] = useState(false);


  const showCartHandler=()=>{
    setCartisShown(true);
  }
  const hideCartHandler=()=>{
    setCartisShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown &&<Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
    );
}

export default App;
