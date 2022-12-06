import {NavLink,useParams, Navigate, useNavigate,Routes, Route} from 'react-router-dom'; //path params
import Card from "./shared/Card";
import '../index.css';

function PostPractice() {
    const status =200;
    const params= useParams();
    const nav=useNavigate();
    const onClick=()=>{
        console.log("redirecting");
        nav('/about')
    }

    if(status == 404){
       return <Navigate to="/notfound" />
    }else{

  return (   
    <>
     <Card>
        <NavLink activeClassName="active"   to='/'  >Home</NavLink>
        <NavLink  activeClassName="active"    to='/about'  >About</NavLink>
        <NavLink  activeClassName="active"   to='/post/1/arun'>PostPractice</NavLink>
    </Card>
    <div>PostPractice id:{params.id}</div>
    <div>name: {params.name}</div>
    <button onClick={onClick}>click</button>
     {/* nested param */}
    <Routes>
        <Route path="/show" element={<h1>Hello World!</h1>} /> 

    </Routes>
    </>
  )
    }
}

export default PostPractice