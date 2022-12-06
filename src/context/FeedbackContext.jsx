import { createContext, useState } from "react";
import { v4 as uuidV4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) =>{
   const [feedback,setFeedback] = useState([
    {
        id: 1,
        rating: 10,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
      },
      {
        id: 2,
        rating: 9,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
      },
      {
        id: 3,
        rating: 8,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
      }
])

const [feedbackEdit,setFeedbackEdit] = useState({
    item:{},
    edit:false
});

const deleteItem = (id) => {
    if (window.confirm("Are you sure you want to delete the feedback?")) {
        setFeedback(feedback.filter(item => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidV4();
    setFeedback([newFeedback, ...feedback]);
  };

  const editFeedback=(item) =>{
    setFeedbackEdit({
        item,
        edit:true
    })
  }

  const updateFeedback=(id,updItem) =>{
    setFeedback(feedback.map(item=>{
        if(item.id===id){
            setFeedbackEdit({
                item:{},
                edit:false
            })
           return {...item,...updItem} //values in item will be replaced by values of updItem
        }else{
            return item;
        }
    }))
  }

    return <FeedbackContext.Provider value={
        {feedback,feedbackEdit,deleteItem,addFeedback,editFeedback,updateFeedback}}> 
    {/* value is an object */}
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;