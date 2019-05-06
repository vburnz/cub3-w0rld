import React from 'react'
import {InteractiveForceGraph, ForceGraphNode, ForceGraphLink} from 'react-vis-force';
import {graph} from './patriarchy-links';

const NodeGraph = ({onSelectNode}) => {
   
    return (
    <InteractiveForceGraph simulationOptions={{ height: 500, width: 500}}
    labelAttr="label"
    onSelectNode={(event, node) => {console.log('nodee', event, node); onSelectNode(node)}}
    
  >
        {graph.nodes.map(node => (
            <ForceGraphNode node={{ id: node.id, label: node.id}} />
        ))}
        {
            graph.links.map(link => ( 
                <ForceGraphLink link={{ source: link.source, target: link.target }} />
            ))
        }
    </InteractiveForceGraph>
)}

export default NodeGraph; 

