import React from 'react';

import Logo from './Logo';
import Form from './Form';

class Block extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.handleClick=this.handleClick.bind(this);
    }

    renderStatic(){
        return(
            <div className="Static" onClick={this.handleClick}>
                <Logo cName="Gazprom"/>
            </div>
        );
    }
    renderDynamic(){
        return (
            <div className="Dynamic">
                <Form/>
            </div>
        );
    }
    handleClick() {
        
        this.setState({ open: ! this.state.open });
    }

    render()
    {
        return (
            <div className="mainBlock" >
                {this.renderStatic()}
                <div className="lol">{this.state.open?this.renderDynamic():""}</div>
            </div>
        )
    };

}

export default Block;