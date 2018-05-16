import React, { Component } from 'react';

class countDown extends Component{
    constructor(){
        super(...arguments);
        this.state = {
            count: this.props.startCount
        }
    }

    componentDidMount() {
        this.interValueHandle = setInterval( () => {
            if(this.state.count>0){
                this.setState({
                    count: this.state.count - 1
                })
            }else{
                window.clearInterval(this.interValueHandle);
            }
        }, 1000)
    }

    componentWillUnmount() {
        if(this.interValueHandle){
            window.clearInterval(this.interValueHandle);
        }
    }

    render() {
        return this.props.children(this.state.count);
    }
} 
console.log(React);
// countDown.propTypes = {
//     children: React.propTypes.func.isRequired,
//     startCount: React.propTypes.number.isRequired
// }

export default countDown;