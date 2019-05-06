import React from 'react'
import Eye from './Eye'

const CubeAndEye = ({currFace, eyeClickHandler, cubeHidden, newFace}) => (
    <div className="scene">
    <Eye eyeClickHandler={eyeClickHandler} cubeHidden={cubeHidden}/> 
    {/* <button onClick={newFace} className={`not-${cubeHidden}`}>new FACE </button> */}
      <div className={`cube show-${currFace} ${cubeHidden}` }>
        
        <div className="cube__face cube__face--front"><p>front</p>
        
          <div className="dot"></div>
        </div>
        <div className="cube__face cube__face--back">back</div>
        <div className="cube__face cube__face--right">right</div>
        <div className="cube__face cube__face--left">left</div>
        <div className="cube__face cube__face--top">top
        <div className="dot"></div>
        </div>
        <div className="cube__face cube__face--bottom">bottom</div>
      </div>
    </div>
)

export default CubeAndEye; 