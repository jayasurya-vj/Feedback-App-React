// import {AnimatePresence, motion} from "framer-motion";
import FeedbackItem from "./FeedbackItem";
// import PropTypes  from "prop-types";
import {useContext} from "react";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "./shared/Spinner";

function FeedbackList() {

  const {feedback,isloading} = useContext(FeedbackContext);
    
    if(!isloading && (!feedback || feedback.length===0)){
        return (<p>No feedback yet!</p>)
    }
  return isloading? (<Spinner />) : (
    <div className="feedback-list">
      {/* <AnimatePresence> */}
        {feedback.map(item => (          
            // <motion.div
            // key={item.id}
            // initial={{opacity:0}}
            // animate={{opacity:1}}
            // exit={{opacity:0}}
            // >
            <FeedbackItem key={item.id} item={item}/>
            // </motion.div>
        ))}
        {/* </AnimatePresence> */}
    </div>
  )
}


// FeedbackList.propTypes = {
//   feedback: PropTypes.array
// }
export default FeedbackList;


