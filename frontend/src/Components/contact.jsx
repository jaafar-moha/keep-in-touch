import React, {useState} from 'react'
import axios from 'axios'
import Header from './Header/Header';

function Contact() {

    const[user, setUser] = useState({
        name:'',
        email:'',
        phone:'',
        message:''
    })

    const handleChange = e =>{
        setUser({...user,[e.target.id]: e.target.value})
    }
    
    const submit = e => {
        e.preventDefault();
        axios.post("http://localhost:3000/api/Addcontact" , user)
        alert("All is good");
        
    }
   

   const form = () =>(
       
        <form onSubmit={submit}>
            <div className="from-group">
                <label htmlFor="first_name" className="text-muted">Name</label>
                <input onChange={handleChange}  type="text" className="form-control" id="name" />
               
            </div>
            
            <div className="from-group">
                <label htmlFor="email" className="text-muted">Email</label>
                <input onChange={handleChange} type="email" className="form-control" id="email" />
               
            </div>
            <div className="from-group">
                <label htmlFor="phone" className="text-muted">Phone</label>
                <input onChange={handleChange} type="text" className="form-control" id="phone" />
               
            </div>
            <div className="from-group">
                <label htmlFor="message" className="text-muted w-100 p-3">Message</label>
                <input onChange={handleChange}  type="text" className="form-control" id="message" />
               
            </div>
            
            <button className="btn btn-lg btn-block btn-outline-success">Send</button>
         
        </form>
   )
   return (
    <div>
         <div>  <Header /></div>
       <div title="Contact Us">
           <div className="row">
               <div className="col-md-6 mx-auto">

                 { form() }
               </div>
            </div>
           

       </div>
    </div>
)
}

export default Contact