import { useState } from "react";
import { TypeText } from "./TypeText";
import { TypingBox } from "./TypingBox";

export function MainTestArea() {
  const [currLetter, setCurrLetter] = useState('');
  const [currIndex, setCurrIndex] = useState(0);

  function onChange(event) {
    
    event.preventDefault();
    if(event.key === "Backspace" && currIndex >= 0){
      
      setCurrIndex(currIndex - 1);
      console.log(currIndex);
    }
    else{
      
      setCurrLetter(event.target.value);
      setCurrIndex(currIndex + 1);
      console.log(currIndex);
    }
      
  }

  return (
    <div className="main-test-area">
      <TypeText currIndex={currIndex} />
      <TypingBox onType={onChange} />
    </div>
  );
}
