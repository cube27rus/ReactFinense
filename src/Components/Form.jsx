import React from 'react';
    
import Button from './Button';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state={
            PE:''

        };

        this.updateBalans=this.updateBalans.bind(this);
        this.updateMoney=this.updateMoney.bind(this);
        this.result=this.result.bind(this);

    }

    updateBalans(evt) {
        //console.log(this.state.balans);
        this.setState({
            balans: evt.target.value,
        });
    }

    updateMoney(evt) {
        //console.log(this.state.money);
        this.setState({
            money: evt.target.value,
        });
    }

    result(e){

        let sharePrice = document.getElementById('sharePrice').value.replace(/ /g, '');
        let shareNumder = document.getElementById('shareNumder').value.replace(/ /g, '');
        let profit = document.getElementById('profit').value.replace(/ /g, '');
        let proceeds = document.getElementById('proceeds').value.replace(/ /g, '');

        let PE= (parseInt(sharePrice)* parseInt(shareNumder)/parseInt(profit)).toFixed(2);
        let PS= (parseInt(sharePrice)* parseInt(shareNumder)/parseInt(proceeds)).toFixed(2);


        this.props.countingResult(PE,PS);
        this.setState({
            PE: PE
        });
    }

   
    render(){
        return(
            <form className="form" onSubmit={(e)=> e.preventDefault() }>
                <div className="textForms">
                    <div className="inputs"><span className="titleInput">Цена акции</span> <input type="text" id="sharePrice"  onChange={this.updateBalans} className="formBlock" placeholder="Введите здесь"/></div>
                    <div className="inputs"><span className="titleInput">Количество акций </span><input type="text" id="shareNumder"  onChange={this.updateBalans} className="formBlock" placeholder="Введите здесь"/></div>
                    <div className="inputs"><span className="titleInput">Чистая прибыль </span><input type="text" id="profit"   onChange={this.updateMoney} className="formBlock" placeholder="Введите здесь"/></div>
                    <div className="inputs"><span className="titleInput">Валовая выручка</span> <input type="text" id="proceeds"   onChange={this.updateMoney} className="formBlock" placeholder="Введите здесь"/></div>
                </div>
                <Button className="buttonResult" value="Рассчитать" onClick={this.result} />

                <div className="result">{this.state.PE} </div>

            </form>
        );
    }
}


export default Form;