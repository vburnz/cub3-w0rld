import React, { Component } from 'react'
import feminismNetwork from './network'
import './Patriarchy.css';
import Hover from './Hover'
import {BellJarContainer, BellJarExplainer} from './BellJarContainer';
import {DisciplineAndPunishContainer, DisciplineAndPunishExplainer} from './DisciplineAndPunishContainer'
import {TheSexWhichIsNotOneContainer, TheSexWhichIsNotOneExplainer} from './TheSexWhichIsNotOneContainer'; 


//create timeout for cube =======)


class PatriarchyOne extends Component { 
    constructor(props){ 
        super(props);
        this.state = { 
            bellJar: ''
        }
        this.bellJarHandler = this.bellJarHandler.bind(this); 
    }
    bellJarHandler(book){ 
        if (this.state.book === book){
            this.setState({book:''})
        } else { 
            this.setState({book})
        }
    }
    render(){ 
        return (
            <div>
                <h1>WHAT IS THE PATRIARCHY</h1>
                <div className="two-col">

                    <div className="col">
                        <p>at its core, the patriarchy is a description of systemized power relations</p>
                        <p>:</p>
                        {/* these are flavors/colors --> to correspond with various nodes */}
                        {/* would be cool to higlight and highlight */}
                        <div class="tooltip">
                            <p onClick={() => this.bellJarHandler('bellJar')}><span className='subject'>oppressor/opressed</span></p>
                            <span className="tooltiptext"><p>click me to hear sylvia plath's take</p></span>
                        </div>
                        <p></p>

                        <div class="tooltip">
                            <p onClick={() => this.bellJarHandler('discipline')}><span className='subject'>dominant/submissive</span></p>
                            <span className="tooltiptext"><p>click ME to hear mike foulcault's take</p></span>
                        </div>
                        <p></p>
                        <div class="tooltip">
                            <p onClick={() => this.bellJarHandler('sexNotOne')}><span className='subject'>subject/object</span></p>
                            {/* hover handlet to change the vv below display */}
                            <span className="tooltiptext"><p>click ME to hear luce irrigary's take</p></span>
                        </div>
                        <p></p>
                        
                                <p>rooted in and based upon the socially constructed "gender binary", a sub-division of individual (ihnerently spectral) homo sapiens into the "race of men" (made in His image 8===D), and the lesser-than biologically inferior "others"//"counterparts" </p>
                            <div class="tooltip">
                                <p id="grad1">Hover over me</p>
                                <span class="tooltiptext">
                                    
                                    <p>(ugh, i am nobody's "counterpart" jfc how gross)</p>
                                </span>
                            </div>
                      
                        
                        

                    </div>

                    <div className="col bellJar">
                        {this.state.book === 'bellJar' ? (<BellJarContainer />) : null}
                        {this.state.book === 'discipline' ? <DisciplineAndPunishContainer /> : null}
                        {this.state.book === 'sexNotOne' ? <TheSexWhichIsNotOneContainer /> : null}
                    </div>

                    <div className="col">
                    {this.state.book === 'bellJar' ? (<BellJarExplainer />) : null}
                        {/* {this.state.book === 'discipline' ? <DisciplineAndPunishExplainer/> : null}
                        {this.state.book === 'sexNotOne' ? <TheSexWhichIsNotOneExplainer /> : null} */}
                    </div>
                </div>
            </div>
        )
            
        
    }
}

export default PatriarchyOne; 

