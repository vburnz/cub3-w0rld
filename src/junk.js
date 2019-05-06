getCount(){
    const lengthArr = []; 
    const text = bellJarText; 
    const textDict = {}; 
    const selectTextDict = {}; 

    let startChar = 0;
    // let endChar = 0;
    let currWord = ''; 

    for (let char = 0; char < text.length; char++){
      if (text[char] !== ' ' && text[char] !== '\n' && text[char] !== `"` && text[char]!== '!' && text[char] !== '.'  && text[char] !== `'` && text[char]!== ',' && text[char]!=='?'){
        currWord+=text[char].toLowerCase(); 
      }
      else if (currWord.length > 0){
        if (textDict[currWord]){
          textDict[currWord].push(startChar); 
          
        }
        else{ 
          textDict[currWord] = [startChar]; 
        }
        startChar = char+1; 
        currWord = ''; 
      
      }
      else {
        startChar++; 
      }
    }
    console.log(textDict);
    for (let key in textDict){
      if (textDict[key].length > 50){
        selectTextDict[key] = textDict[key]
      }
    }
    console.log(lengthArr.sort((a,b) => b-a)); 
    this.setState({textDict, selectTextDict}); 
  }


  <Hover onHover={<div> Show this on hover </div>}>
  <div> Show on no hover </div>
</Hover>