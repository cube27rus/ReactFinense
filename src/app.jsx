import React from 'react';
import ReactDOM from 'react-dom';

import Component from './Components/Component';
import Block from './Components/Block';
import './styles.sass';

function App(){

    return (
        <div>
            <h1>Bond Finanse</h1>
            <Block title="Gazprom"/>
            <Block title="Lukoil"/>
            
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById("root"));