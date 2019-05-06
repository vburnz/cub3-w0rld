import React, {Component} from 'react'; 

class CubeButtons extends Component { 
    constructor(props){ 
        super(props); 
        this.state = {
            front: 'selected', 
            right: '', 
            left: '', 
            top: '', 
            bottom: '', 
            back: ''
        }
        this.initialState = { 
            front: '', 
            right: '', 
            left: '', 
            top: '', 
            bottom: '', 
            back: ''
        }
    }
    handleSelect(face){
        const initialState = this.initialState; 
        this.setState(Object.assign({}, initialState)); 
        this.setState({[face]: 'selected'})
        
        this.props.arrowHandler(face); 
    }
    render(){ 
        console.log('state', this.state)
        return ( 
            <div className={`${this.props.cubeHidden}`}>
                <button className={this.state.front} onClick={() => this.handleSelect('front')}>front</button>
                <button className={this.state.right} onClick={() => this.handleSelect('right')}>right</button>
                <button className={this.state.back} onClick={() => this.handleSelect('back')}>back</button>
                <button className={this.state.left} onClick={() => this.handleSelect('left')}>left</button>
                <button className={this.state.top} onClick={() => this.handleSelect('top')}>top</button>
                <button className={this.state.bottom} onClick={() => this.handleSelect('bottom')}>bottom</button>
            </div>
        )
    }
}

export default CubeButtons; 