import React from 'react';
import ReactDOM from 'react-dom';

import Component from './Component';
import Block from './Block';
import './styles.sass';

function App(){

    return (
        <div>
            <h1>React</h1>
            <Block/>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById("root"));