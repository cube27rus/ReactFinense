import React from 'react';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state={
            balans:'0',
            money:'0',
            itog:''

        };

         this.updateBalans=this.updateBalans.bind(this);
         this.updateMoney=this.updateMoney.bind(this);
         this.Itog=this.Itog.bind(this);
    }

    updateBalans(evt) {
        console.log(this.state.balans);
        this.setState({
            balans: evt.target.value,
        });
    }

    updateMoney(evt) {
        console.log(this.state.money);
        this.setState({
            money: evt.target.value,
        });
    }
    Itog(evt) {
        let balans = this.state.balans;
        let money = this.state.money;
        let itog = balans/money;

        this.setState({
            itog,
        });
        console.log(this.state.itog);
    }

   
    render(){
        return(
            <form className="form" >
                <input type="text" value={this.state.balans} onChange={this.updateBalans} className="formBlock" placeholder="Балланс"/>
                <input type="text"  value={this.state.money} onChange={this.updateMoney} className="formBlock" placeholder="Денежные средства"/>
                <span>{this.state.itog}</span>
                <span  onClick={this.itog}>Рассчитать</span>
            </form>
        );
    }
}


export default Form;