//ERADICATE SELF-DOUBT 

const feminismNetwork = [
    {
       
        id: 1, 
        text: 'what is femininity/gender', 
        question: 'where does it exist outside of us?',
        pointers: [2]
        //edges --> to be associated with links in the force graph 

    }, 
    { 
        id: 2, 
        text: 'an emergent social property', 
        pointers: [3]

    }, 
    {
        id: 3, 
        text: `from (a multitude of) individual('s) experiences`,
        pointers: [4]
    }, 
    {
        id: 4, 
        text: `from individual => individual's => a complexity of it's own`,
        pointers: [5]
    }, 
    {
        id: 5, 
        text: 'made of (infinity) moments, influences, experiences, glimpses, connections, associations => overtime', 
        visualization: 'over_time'
    }, 
    { 
        id: 6, 
        text:'changes to access in health, wealth, and education', 
    },
    {
        id: 7, 
        text: 'necessity (and colonialist/capitalist tools and accessories required to do so "appropriately" and "acceptably"'
    }, 
    {
        id: 8, 
        subnodes : [
            {
                text: 'sexuality, nevada, sex workers'
            }, 
            { 
                text: 'catholics vs whores'
            }, 
            {
                text: 'slutshaming'
            }, 
            {
                text: 'attention to the Wrong Thing'
            }, 
            { 
                text: 'denying basic biological equality of ~desire~'
            }, 
            {
                text: 'feminist philosophy'
            }
        ]
    }
    
]

export default feminismNetwork; 