///!!!!!THIS IS VERY IMPORTANT TO WRITE className="note" because we wanna apply the specific styling that we did on the particular elemets in our css file to our note so we need to include this here 
///WE ARE Using className here because we are applying the style from the css file , if we were to use  style then it would have been inline style like this -- style={{ background: '#fff',borderRadius: '7px',boxShadow: '0 2px 5px #ccc',padding: '10px',width: '240px', IN SHORT INLINE STYLE IS USED TO APPLY STYLES AT THE JSX FILE ITSELF WHILE CLASSNAME LINKS IT TO THE CSS FILE CREATED EARLIER 
function Note(){
    return <div className="note"> 
        <h1>This is the Note Title</h1>
        <p>This is the Note Preview </p>
    </div>
}
export default Note