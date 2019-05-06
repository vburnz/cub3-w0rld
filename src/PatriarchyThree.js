import React, { Component } from 'react'
import feminismNetwork from './network'
import {graph} from './patriarchy-links'
import './Patriarchy.css';




class PatriarchyThree extends Component { 
    constructor(props){ 
        super(props);
    }
    render(){ 
        return(
            <div>
                {/* {show one node at a time, and then ask to go in different directions based on different things} */}
                {/* {show build network of understanding based on how many times nodes are visited each} */}
                <h3>FEMINSIM NETWORK</h3>
                <div className="node-container">
                {graph.nodes.map(node => ( 
                    <div className="node" styles={{textAlign: 'center'}}>
                        <h2 >{node.id}</h2>
                        {/* <h2>{node.question}</h2> */}
                        {/* <p>{node.pointers}</p>
                        {node.subnodes ? (
                            node.subnodes.map(subnode => ( 
                                <div className="subnode">
                                    <p>{subnode.text}</p>
                                </div>
                            ))
                        ) : null} */}
                    </div>
                ))}
                </div>
            </div>
        )
            
        
    }
}

export default PatriarchyThree; 

