import React, {Component} from 'react'
import logo from '../logo.svg';

class CHeader extends Component{
render(){
    return(
        <div>
            <img src={logo} className="headerLogo" alt="logo"/>
            <h2>Witaj w przykładowym serwisie</h2>
        </div>
    );
}

}

export default CHeader