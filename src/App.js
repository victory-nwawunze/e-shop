/** @format */

import "./App.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SearchIcon from "@material-ui/icons/Search";
function App() {
  return (
    <div className="App">
      <div className="header__logo"></div>
      <StorefrontIcon className="header__logoImage" fontSize="large" />
      <h2 className="header__logoTitle">eShop</h2>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="nav__item">
          <span className="nav__itemLineOne">Hello Guest</span>
          <span className="nav__itemLineTwo">Sign In</span>
        </div>
        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>
        <div className="nav__item">
          <ShoppingBasketIcon />
          <span className="nav__itemLineTwo">0</span>
        </div>
      </div>
    </div>
  );
}

export default App;
