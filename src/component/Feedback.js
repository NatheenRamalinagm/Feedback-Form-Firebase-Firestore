import React, { useState } from 'react'
import {  db } from './firebase';
import {toast} from 'react-toastify'

function Feedback() {
    const [name,setName] = useState('');
    const [mobile,setMobile] = useState('');
    const[email,setEmail] = useState('');
    const[message,setMessage] = useState('');



    const handleSubmit = (e)=>{
        e.preventDefault();     

        db.collection('feedback')
            .add({
                name : name,
                mobile : mobile,
                email : email,
                message : message
            })
            alert("Form submitted Succesfully");       
        
           
            setName('');
            setMobile('');
            setEmail('');
            setMessage('');
    }





  return (
    <div className='col-md-6 offset-3 mt-1'>
        <div className='card'>
            <div className='card-body'>
                <h1 className='text-center'>Feedback Form</h1>
                <form action="">
                    <label htmlFor="">Name</label>
                    <input type="text"  value={name} onChange={(e)=>{setName(e.target.value)}} className='form-control' />
                    <label htmlFor="">Mobile</label>
                    <input type="number" value={mobile} onChange={(e)=>{setMobile(e.target.value)}} className='form-control' />
                    <label htmlFor="">E-Mail</label>
                    <input type="email"  value={email} onChange={(e)=>{setEmail(e.target.value)}} className='form-control' />
                    <label htmlFor="">Message</label>
                    <textarea name="message"  value={message} onChange={(e)=>{setMessage(e.target.value)}} id="" cols="30" rows="10" className='form-control'/>
                    <button onClick={(e)=>{handleSubmit(e)}} className='btn btn-outline-success mt-3'>Submit</button>
                    
                </form>

            </div>

        </div>

    </div>
  )
}

export default Feedback