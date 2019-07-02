import React , {Component} from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <div id="footer">
                Copyright &copy; black_pink_white | <a href="http://validator.w3.org/check?uri=referer">HTML5</a> | <a href="http://jigsaw.w3.org/css-validator/check/referer">CSS</a> | from <a href="http://www.html5webtemplates.co.uk">free HTML5 templates</a>
            </div>   
        );
    }
}
 
export default Footer;