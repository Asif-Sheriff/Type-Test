export function TypingBox({onType}){

    
    return(
        <div className="type-box">
            <input type="text" onChange={onType} onKeyDown={onType}/>
        </div>
    )
}