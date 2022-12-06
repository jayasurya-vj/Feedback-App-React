
import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "./shared/Card";
import PropTypes  from "prop-types";
import {useContext} from "react";
import FeedbackContext from "../context/FeedbackContext";

export default function FeedbackItem({item}) {

  const {deleteItem,editFeedback} = useContext(FeedbackContext);

  return (
    <Card reverse={true}>
        <div className="num-display">{ item.rating }</div>
        <button onClick={()=>deleteItem(item.id)} className="close">
          <FaTimes color="purple"/>
        </button>
        <button onClick={()=>editFeedback(item)} className="edit">
          <FaEdit color="purple"/>
        </button>
        <div className="text-display">{ item.text }</div>
    </Card>
  )
}


FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired
}