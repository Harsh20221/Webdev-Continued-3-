import Details from "./Details";
 ///?While using a prop , Make sure you remember that the name of the prop that you defined like prop.numberDetails in the Details file inside {} will be the parameter name like this = " where you wanna use this prop like we use it in this place 
function Card(props){
    return(
     <div className="card">
        <div className="top">
          <h2 className='name'>{props.name}</h2>
          <img
            src={props.img}
            alt="avatar_img" className="circle-img"
          />
        </div>
        <div className="bottom">
            <Details numberDetails={props.number} emailDetails={props.email} /> 
        </div>
      </div>

    );
}
export default Card