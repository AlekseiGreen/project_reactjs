import React, {useState} from 'react';
import Popup from 'reactjs-popup'
import logo from './img/app-logo.svg';
import user from './img/user-menu.svg';


class Header extends React.Component {
    render() {
        return(
            <div className="Header">
                <img src={logo} alt='logo' />
                <Popup trigger=
                    {<input type="image"  src={user} alt="Кнопка «input»"></input>}
                    position="bottom center">
                    <div className='trigger'>
                        <p><a href=''>Profile</a></p>
                        <p><a href=''>Log out</a></p>
                    </div>
                </Popup>
            </div>
        )
    }
}

export default Header;
