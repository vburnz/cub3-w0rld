import React, { Component } from 'react'

class EverythingIsThePatriarchy extends Component { 
    constructor(props){ 
        super(props); 
    }
    render(){ 
        return (
            <div className="everything">
                <span><p>search it and see</p><input type="text"/><p><button>search it</button></p></span>
            </div>
        )

    }
}

export default EverythingIsThePatriarchy; 