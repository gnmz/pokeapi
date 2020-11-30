import React, { Component } from 'react'
import './../App.css';

class Loader extends Component{
    render(){
        return(
            <div className='loader'>
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
        );
    }
}

export default Loader;