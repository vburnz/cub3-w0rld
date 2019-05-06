import React from 'react';
import logo from './logo.svg';
import './App.css';
import bellJarText from './belljar';
import Patriarchy from './Patriarchy';
import Foundation from './PatriarchyTwo'; 
import PatriarchyThree from './PatriarchyThree'; 
import CubeAndEye from './CubeAndEye'
import BarChart from './BarChart'; 
import NodeGraph from './NodeGraph'
import CubeButtons from './CubeButtons'
import MeasuringSubtext from './MeasuringSubtext'; 
import IDontWantIt from './IDontWantIt';
import QuantumComputing from './QuantumComputing'
import EverythingIsThePatriarchy from './EverythingIsThePatriarchy';
import Graph from './ForceGraph'; 

class Cube extends React.Component{ 
  constructor(){
    super(); 
    this.state ={ 
      currFace: 'front', 
      text:'', 
      textDict:{},
      selectTextDict:{}, 
      cubeHidden: 'cube-hidden', 
      node: null, 
      selected: 0
    }
    this.arrowHandler = this.arrowHandler.bind(this); 
    this.eyeClickHandler = this.eyeClickHandler.bind(this); 
    this.onSelectNode = this.onSelectNode.bind(this); 
    this.newFace = this.newFace.bind(this); 
    this.foundationSelectHandler = this.foundationSelectHandler.bind(this); 
  }

  // cubeTimeout(){ 

  // }

  foundationSelectHandler(selected){
    console.log(',',this.state.selected, selected); 
    if (this.state.selected == selected){
      console.log('truuuu')
      this.setState({selected: 0})
    } else { 
      this.setState({selected})
    }
    
  }

  newFace(){
    const oldFace = this.state.currFace; 
    const faces = ['front', 'back', 'left', 'right', 'top', 'bottom']; 
    let randIdx = Math.floor(Math.random()*faces.length); 
    while (faces[randIdx] === oldFace){ 
      randIdx = Math.floor(Math.random()*faces.length); 
    }
    
    this.setState({currFace: faces[randIdx]})
    
  }

  

  arrowHandler(currFace){  
    this.setState({currFace});
    // setTimeout(()=>{
    //   this.setState({cubeHidden: 'cube-hidden'})
    // }, 120000)
  }

  eyeClickHandler(){
    if (this.state.cubeHidden === ''){
      this.setState({cubeHidden: 'cube-hidden'})
    } 
    else { 
      this.setState({cubeHidden: ''})
        setTimeout(()=>{
          this.setState({cubeHidden: 'cube-hidden'})
          }, 120000)
    }

  }
  onSelectNode(node){
    this.setState({node})
  }

  
  
  render() {
    return (
      <div className="App">
      {/* <button onClick={this.getCount}>BellJarTextGetCount</button> */}

      <CubeButtons cubeHidden={this.state.cubeHidden} arrowHandler={this.arrowHandler}/>
      <div className="CAE">
      <CubeAndEye currFace={this.state.currFace} eyeClickHandler={this.eyeClickHandler} cubeHidden={this.state.cubeHidden} newFace={this.newFace}/>
      </div>
      {this.state.node ? <p>{this.state.node.id}</p> : null}
     
      <div>
      {this.state.currFace === 'front' ? (<Patriarchy />) : null}
      {this.state.currFace === 'bottom' ? (<Foundation selected={this.state.selected} foundationSelectHandler={this.foundationSelectHandler}/>) : null}
      {this.state.currFace === 'bottom' ? (<PatriarchyThree />) : null}
      {this.state.currFace === 'left' ? (<MeasuringSubtext />) : null}
      {this.state.currFace === 'back' ? (<div style={{display: 'flex', justifyContent: 'center'}}><IDontWantIt /> <NodeGraph onSelectNode={this.onSelectNode} /></div>) : null}
      {this.state.currFace === 'right' ? (<QuantumComputing />) : null}
      {this.state.currFace === 'top' ? (<EverythingIsThePatriarchy /> ) : null}
      </div>
      
    </div>
    ) 
  }
}

export default Cube;
