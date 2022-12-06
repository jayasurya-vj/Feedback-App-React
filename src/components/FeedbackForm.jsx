import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import {useContext,useEffect} from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(10);

  const {addFeedback,feedbackEdit,updateFeedback} = useContext(FeedbackContext);

  useEffect(()=>{
    if(feedbackEdit.edit ===true ){
        setBtnDisabled(false);
        setText(feedbackEdit.item.text);
        setRating(feedbackEdit.item.rating);
    }
  },[feedbackEdit])

  const handleTextChange=(e) => {
    if(text===""){
        setBtnDisabled(true);
        setMessage('');
    }else if(text!=="" && text.trim().length<10){
        setBtnDisabled(true);
        setMessage('Text must be atleast 10 characters');
    }else{
        setBtnDisabled(false);
        setMessage('');
    }
    setText(e.target.value);
 }  
 const handleSubmit=(e)=>{
    e.preventDefault();
    if(text.trim().length > 10){
        const newFeedback={text,rating};
        if(feedbackEdit.edit ===true){
            updateFeedback(feedbackEdit.item.id,newFeedback)
        }else{
            addFeedback(newFeedback);
        }
        setText('');
    }
 }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect setRating={(rating)=>setRating(rating)}/>
            <div className="input-group">
                <input type="text" onChange={handleTextChange} value={text} placeholder="write a review"/>
                <Button type="submit" version="secondary" isDisabled={btnDisabled}>Submit</Button>
            </div>
            {message && <div className="message">{message}</div>}
        </form>    
    </Card>
  )
}

export default FeedbackForm