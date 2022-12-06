import {useState} from "react";
import {useContext,useEffect} from "react";
import FeedbackContext from "../context/FeedbackContext";


function RatingSelect({setRating}) {
    const [selected, setSelected] = useState(10);
    const handleChange = (e)=>{
        setSelected(+e.currentTarget.value.trim());
        setRating(+e.currentTarget.value.trim());
    }

    const {feedbackEdit} = useContext(FeedbackContext);
    useEffect(()=>{
        if(feedbackEdit.edit ===true ){
            setSelected(feedbackEdit.item.rating);
        }
      },[feedbackEdit])

   
  return (
        <ul className="rating">
        {[1,2,3,4,5,6,7,8,9,10].map(val => (
            <li key={val}>
                <input key={val} 
                type="radio"
                id={`num ${val}`} 
                value={val}
                name="rating"
            checked={selected==val}
            onChange={handleChange} />
            <label htmlFor={`num ${val}`}>{val}</label> 
            </li>
        ))}
        </ul>
  )
}

export default RatingSelect