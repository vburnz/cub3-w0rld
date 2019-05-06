import React from 'react'

const QuantumComputing = () => ( 
    <div className="quantum">
        <img></img>
        <p>if you;re used to writing tensor products of A x B and you have to write something where B is between A and C in lexicographic order</p>
        <p>start from 1st principles abd reason out how to write it down</p>
        <p>but don't try to BLINDLY apply formula from AxB to I(B) x CNOT(AC) => doens't work well!</p>
        <p>the point --> IS --> you never have to actually apply gates on non-adjacvent qubits if you have SWAP gates, but it might take a lot longer if you have to keep swapping all your quibits b4 you apply a gate to them</p>
    </div>
)

export default QuantumComputing; 