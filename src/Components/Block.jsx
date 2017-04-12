import React from 'react';

import Logo from './logo';
import Form from './Form';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class Block extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            PE: 0,
            PS: 0
        };
        this.handleClick=this.handleClick.bind(this);
       
        this.countResult=this.countResult.bind(this);
    }

    countResult(PE,PS){
        
        this.setState({
            PE,
            PS
        });
    }

    renderStatic(){
        return(
            <div className="Static" onClick={this.handleClick}>
                <Logo cName={this.props.title}/>
                <div className="sumInTop">
                    <div className="multiplier"><span className="mult">P/E: </span>{this.state.PE}
                        <div className="hidden prompt">Период лет за который окупятся инвестиции</div>
                    </div>
                    <div className="multiplier"><span className="mult">P/S: </span> {this.state.PS}
                        <div className="hidden prompt">Это своего рода потенциальный Р/Е</div>
                    </div>
                </div>
                    
            </div>
        );
    }

    renderDynamic(){
        return (
            <div className="Dynamic">
                <Form countingResult={this.countResult}/>
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