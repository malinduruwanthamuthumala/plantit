import React from "react";


class CounterApp3 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counter:0,
        };

      this.onIncrease = this.onIncrease.bind(this);
      this.onDecrease = this.onDecrease.bind(this);
    }
    onIncrease(){
        debugger;
        this.setState((state, props) => ({
            
            counter:this.state.counter + 1,
          })
        )
    }

    onDecrease = () => {
        this.setState((state, props) => ({
            counter:this.state.counter - 1,
          })
        )
    }

    render(){
        return(
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.onIncrease}>Increase</button>
                <button onClick={this.onDecrease}>Decreese</button>
            </div>
        );
    }
}

export default CounterApp3;