import Header from "./components/Header";
import Meals from "./components/Meals";
import Carts from "./components/Carts.jsx";
import {CartContextProvider} from "./store/CartContext.jsx";
import {UserProgressContextProvider} from "./store/UserProgressContext.jsx";
import CheckOut from "./components/CheckOut.jsx";
function App() {
  return (
    <UserProgressContextProvider>
    <CartContextProvider>
    <Header></Header>
    <Meals></Meals>
    <Carts></Carts>
    <CheckOut></CheckOut>
    </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
