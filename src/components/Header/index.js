import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (            
            <div id="header">
                <div id="logo">
                    <div id="logo_text">
                        <h1><a href="index.html">black<span class="logo_colour">_pink</span><span class="logo_colour2">_white</span></a></h1>
                        <h2>Simple. Contemporary. Website Template.</h2>
                    </div>
                </div>
                <div id="menubar">
                    <ul id="menu">
                        <li class="selected"><a href="index.html">Home</a></li>
                        <li><a href="examples.html">Examples</a></li>
                        <li><a href="page.html">A Page</a></li>
                        <li><a href="another_page.html">Another Page</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}
        
export default Header;
