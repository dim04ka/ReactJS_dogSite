import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
        <div className="header">
          <div className="container">
              <h2>Сайт о собаках</h2>
              <div className="header__menu">
                <ul className="header__ul">
                  <li className="header__li"><Link to="/" className="header__active" >Главная</Link></li>
                  <li className="header__li"><Link to="/shop">Магазин</Link></li>
                  {/* <li className="header__li"><Link to="/dog"><a href="#">Собаки</a></Link></li>
                  <li className="header__li"><Link to="/hand"><a href="#">В добрые руки</a></Link></li>
                  <li className="header__li"><Link to="/post"><a href="#">Статьи</a></Link></li>
                  <li className="header__li"><Link to="/addPost"><a href="#">Подать объявление</a></Link></li> */}
                </ul>
              </div>
          </div>
        </div>
    );
  }
}
