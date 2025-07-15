function Details (props){ //!!!IN REACT COMPONENTY NAMES SHOULD ALWAYS START WITH CAPITAL LETTERS 
    return (
        <div>
             <p className="info">{props.numberDetails}</p>
          <p className="info">{props.emailDetails}</p>
        </div>
    )
}
export default Details