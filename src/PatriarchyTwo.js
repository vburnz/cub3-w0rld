import React, { Component } from 'react'
import feminismNetwork from './network'
import './Patriarchy.css';




class Foundation extends Component { 
    constructor(props){ 
        super(props);
        // this.state = { 
        //     selected: props.selected
        // }
        
    }
    // foundationSelectHandler(selected){
    //     this.setState({selected})
    // }
    render(){ 
        console.log('props', this.props); 
        return (
            <div className="foundation">
                <h2>FOUNDATION</h2>
                <div className={`foundation-stuff`}>
                <div onClick={()=> this.props.foundationSelectHandler(1)} className={this.props.selected === 1 ? 'selected-p' : ''}>grammar, phallus, pacifier?</div>
                <div onClick={()=> this.props.foundationSelectHandler(2)} className={this.props.selected === 2 ? 'selected-p' : ''}>egg vs sperm in the style of sexual dimorphism</div>
                <div onClick={()=> this.props.foundationSelectHandler(3)} className={this.props.selected === 3 ? 'selected-p' : ''}>white supremacy and blood-thirsty empires</div>
                <div onClick={()=> this.props.foundationSelectHandler(4)} className={this.props.selected === 4 ? 'selected-p' : ''}>marginalization of women, by law or by flaw</div>
                </div>
            </div>
        )
    
            
        
    }
}

export default Foundation; 

