import React from 'react'
// import fetch from 'react-fetch'
//import axios from 'axios'
import "./List.css"

function List(props) {
    const [showGuest, setShowGuest]=React.useState(true)
    
    
    

async function clearGuest(id){
    setShowGuest(false)
    

    //POSTs phone number (id) to backend using /delete
    //const res = await fetch("https://vast-depths-43868.herokuapp.com/delete",
    const res = await fetch("https://localhost:7004/delete",
    {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({id})
        })
        .then(response=>response.json())
        .then(res=> console.log(res))    
}
async function sendSMS(phoneNum){
    console.log('done')
    

    //POSTs phone number (id) to backend using /text
    //const res = await fetch("https://vast-depths-43868.herokuapp.com/text",
    const res = await fetch("https://localhost:7004/text",
        {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({phoneNum})
        })
        .then(response=>response.json())
        .then(res=> console.log(res))    
}



function setStrikeThrough(doc){
    doc.style.setProperty('text-decoration', 'line-through');
}
function removeStrikeThrough(doc){
    doc.style.removeProperty('text-decoration');
}
 

  return (
    <>
    <div key = {props.id} className="guestBlock" style={{ display: showGuest ? "block" : "none" }}>
        <div id={props.id} className='guestInfo'>
            <p><strong>Full Name:</strong> {props.name}</p>        
            <p><strong># of People: </strong>{props.numPeople}</p>        
            <p><strong>Phone Number:</strong> {props.phoneNum}</p> 
        </div>       
        <button type='button' 
            className='button'
            onClick={()=>{clearGuest(props.id)}}
            onMouseEnter={()=>{setStrikeThrough(document.getElementById(props.id))}}
            onMouseLeave={()=>{removeStrikeThrough(document.getElementById(props.id))}} 
            style={{ display: props.click ? "block" : "none" }}
            >
            Clear Guest
        </button>
        <button type='button' 
            className='button'
            onClick={()=>{sendSMS(props.phoneNum)}}
            style={{ display: props.click ? "block" : "none" }}
            >
            Table Ready
        </button>
  
    </div>
    <div style={{ display: showGuest ? "none" : "block" }}>
        <p>Guest Cleared</p>
    </div>
    </>
  )

}
export default List