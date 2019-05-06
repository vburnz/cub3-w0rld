import React, { Component } from 'react'
import * as d3 from 'd3'
import shortid from 'shortid'
// import {patriarchylinks} from './patriarchy-links'
// import {nodes} from './patriarchy-network'

const WIDTH = 500; 
const HEIGHT = 500; 

class Graph extends React.Component{ 
    constructor(props) { 
        super(props); 
        this.state = { 
            nodes: [], 
            links: [], 
            value: shortid()
        }
    }

    handleChange = event => { 
        this.setState({value: event.target.value})
    }
    handleAddNode = event => { 
        event.preventDefault(); 

        const newNodes = [...this.state.nodes, {id: this.state.value}]

        this.setState({ nodes: newNodes, value: shortid()})
    }
    componentDidMount(){
        this.initialise(this.state.nodes); 
        this.draw(this.state.nodes); 
    }
    componentDidUpdate(){
        this.draw(this.state.nodes)
    }
    
    initialise = nodes => { 
        const container = d3 
            .select(this.svg)
            .attr('width', WIDTH)
            .attr('height', HEIGHT)
            .append("g")
            .attr("class", "container")
            .attr("transform", "translate(" + WIDTH/2 + ", " + HEIGHT/2 + ")"); 
        
        container.append("g").attr("class", "nodes")
        this.simulation = d3 
            .forceSimulation(nodes)
            .alphaDecay(0.2)
            .force("charge", d3.forceManyBody())
            .force("collide", d3.forceCollide().strength(1))
            .on("tick", this.ticked)
    }

    draw = nodes => { 
        this.nodeSelection = d3
            .select(".nodes")
            .selectAll(".node")
            .data(nodes)
        
        this.nodeSelection = this.nodeSelection 
            .enter()
            .append("circle")
            .attr("class", "node")
            .attr("data-id", d => d.id)
            .style("fill", "red")
            .attr("r", 5)
            .merge(this.nodeSelection)
        
        this.simulation.nodes(nodes); 
        this.simulation.alpha(1).restart(); 

    }

    ticked = () => { 
        this.nodeSelection.attr("cx", d => d.x).attr("cy", d => d.y)
    }

    render(){ 
        return ( 
            <div className="c-graph-container">
                <form className="c-node-creator">
                    <div>
                        <input 
                            type="text"
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button onClick={this.handleAddNode}>Add</button>
                </form>
                <svg ref={svg => (this.svg = svg)} className=".c-graph" />
            </div>
        )
    }
}

export default Graph; 










// import { legendColor } from 'd3-svg-legend';

// const color = d3.scale.category20()
// const Node = (props) => ( 
//     <circle 
//         r={5}
//         cx={props.x}
//         cy={props.y}
//         style={{
//             "fill": color(props.group), 
//             "stroke":"#fff", 
//             "strokeWidth": "1.5px"
//         }}/>
// ); 

// const Link = (props) => ( 
//     <line 
//         x1={props.datum.source.x}
//         y1={props.datum.source.y}
//         x2={props.datum.target.x}
//         y2={props.datum.target.y}
//         style={{
//             "stroke":"#999", 
//             "strokeOpacity": ".6", 
//             "strokeWidth": Math.sqrt(props.datum.value)
//         }} />
// )

// class Graph extends Component { 

// }