import '../style/Style.css';
import image from '../assets/images/logo.png';
import {Link} from 'react-router-dom';


const Header = ()=>{
    return (
        <header className="header-v1">
  <div className="navbar navbar-default" id="ibid-main-head">
    <nav className="navbar bottom-navbar-default" id="modeltheme-main-head">
      <div className="container">
        <div className="row row-0">
          <div id="navbar" className="navbar-collapse collapse col-md-10">
            <div className="bot_nav_cat_inner">
              <div className="bot_nav_cat">
                <button className="bot_cat_button">
                  <span className="cat_ico_block">Home</span>
                </button>
              </div>
            </div>
            <div className="bot_nav_wrap">
              <ul className="menu nav navbar-nav pull-left nav-effect nav-menu">
                <li
                  id="menu-item-5308"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5308"
                >
                  <a href="">Dashboard</a>
                </li>
                <li
                  id="menu-item-5308"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5308"
                >
                  <a href="/product">Shop</a>
                </li>
                <li
                  id="menu-item-5308"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5308"
                >
                  <a href="/transaction">Auctions Transactions</a>
                </li>
                <li
                  id="menu-item-5308"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5308"
                >
                  <a href="">Create an Auction</a>
                </li>
                
                <li
                  id="menu-item-4992"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4992"
                >
                  <a href="/about">About</a>
                </li>
                <li
                  id="menu-item-4630"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4630"
                >
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 my-account-navbar">
            <ul>
              <li id="nav-menu-login" className="ibid-logoin">
                <a href="/">Sign In </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</header>

    );
}

export default Header;