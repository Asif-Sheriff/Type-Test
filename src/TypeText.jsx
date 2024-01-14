import { useEffect, useMemo, useState } from "react";

export function TypeText({currIndex}) {

    const Text = [
        'the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'i',
        'it', 'for', 'not', 'on', 'with', 'he', 'as', 'you', 'do', 'at',
        'this', 'but', 'his', 'by', 'from', 'they', 'we', 'say', 'her', 'she',
        'or', 'an', 'will', 'my', 'one', 'all', 'would', 'there', 'their', 'what',
        'so', 'up', 'out', 'if', 'about', 'who', 'get', 'which', 'go', 'me',
        'when', 'make', 'can', 'like', 'time', 'no', 'just', 'him', 'know', 'take',
        'people', 'into', 'year', 'your', 'good', 'some', 'could', 'them', 'see', 'other',
        'than', 'then', 'now', 'look', 'only', 'come', 'its', 'over', 'think', 'also',
        'back', 'after', 'use', 'two', 'how', 'our', 'work', 'first', 'well', 'way',
        'even', 'new', 'want', 'because', 'any', 'these', 'give', 'day', 'most', 'us'
    ];

    // const [stringOfText, setStringOfText] = useState([])


    var stringOfText = [];

    function renderText(stringOfText){
      const renderedText = [];
      for (let i = 0; i < 30; i++) {
        const index = Math.floor(Math.random() * Text.length);
        renderedText.push(<div key={i}>{(()=>{
          const letters = [];
          for(let i = 0; i < Text[index].length; i++){
            letters.push(<letter>{Text[index][i]}</letter>)
            stringOfText.push(Text[index][i])
            
          }
          letters.push(<letter>*</letter>)
          return letters;
        })()}</div>);
      }
      console.log(stringOfText);
      return renderedText;
    }
    
    const renderedText = useMemo(()=>{
      return renderText(stringOfText);      
    },[]);

    return (
      <div className="test-text">
          {renderedText}
        </div>
      );
}