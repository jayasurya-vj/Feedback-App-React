import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) =>{
   const [feedback,setFeedback] = useState([])
   const [isloading, setLoading] = useState(true);

   useEffect(()=>{
    fetchFeedback();
   },[]) //runs once on page load
   
   const fetchFeedback = async () => {
    const response = await fetch(`/feedback?_sort=id&_order=desc`);
    const data = await response.json();
    setFeedback(data);
    setLoading(false);
   }

const [feedbackEdit,setFeedbackEdit] = useState({
    item:{},
    edit:false
});

const deleteItem = async (id) => {
    if (window.confirm("Are you sure you want to delete the feedback?")) {
      await fetch(`/feedback/${id}`,{method: 'DELETE'})
        setFeedback(feedback.filter(item => item.id !== id));
    }
  };

  const addFeedback = async (newFeedback) => {
    const response = await fetch("/feedback",{
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(newFeedback)
    })
    const data = await response.json();
    setFeedback([data, ...feedback]);
  };

  const editFeedback=(item) =>{
    setFeedbackEdit({
        item,
        edit:true
    })
  }

  const updateFeedback=async (id,updItem) =>{
    const response = await fetch(`/feedback/${id}`,{
      method: "PUT",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(updItem)
    })

    const data = await response.json();

    setFeedback(feedback.map(item=>{
        if(item.id===id){
            setFeedbackEdit({
                item:{},
                edit:false
            })
           return {...item,...data} //values in item will be replaced by values of updItem
        }else{
            return item;
        }
    }))
  }

    return <FeedbackContext.Provider value={
        {feedback,feedbackEdit,isloading,deleteItem,addFeedback,editFeedback,updateFeedback}}> 
    {/* value is an object */}
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;