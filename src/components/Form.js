import "./Form.css";
import React,{useState} from "react";
import toast from "react-hot-toast"
import {addDoc, collection } from "firebase/firestore"
import {db} from "../firebase"

const Form = () => {
  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [message , setMessage] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);
   
  const submitHandler =async(e)=>{
    e.preventDefault();
    setDisableBtn(true);
    try{
      await addDoc(collection(db,"contacts"),{
        name,
        email,
        message,
      });
      setName("");
      setEmail("");
      setMessage("");
      toast.success("Message Sent");
      setDisableBtn(false);
    }catch(error){
      toast.error("Error");
      console.log(error);
      setDisableBtn(false);
    }
    
    

  }
  return (
    <div className="form">
      <form onSubmit = {submitHandler}>
        <label> Your Name</label>
        <input type="text" value={name} onChange={(e)=> setName(e.target.value)} name ="name" placeholder="Enter your name" required></input>
        <label> Email</label>
        <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}  name ="email" placeholder="Enter your email" required></input>
        <label> Message</label>
        <textarea rows="6" value={message} onChange={(e)=> setMessage(e.target.value)}  name ="message" placeholder="Type your message here" required />
        <button className= "btn" disabled={disableBtn}
            id={disableBtn ? "disableBtn" : ""}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
