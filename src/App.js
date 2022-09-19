import './App.css';
import React from "react";
import List from "./List";
import Navbar from "./Navbar";

function App() {
  setTimeout(function(){
    window.location.reload(1);
 }, 10000);


  const[list,setList] = React.useState([{}])
  const [clicked,setClicked]=React.useState(false)

  var API_URL = "https://vast-depths-43868.herokuapp.com"
  //var API_URL = "http://localhost:7004" 

    
    /* async function recieveData(){
      console.log('clicked')
      setClicked(true)
        const response = await fetch('https://intelligent-mandarine-33989.herokuapp.com/getData')
        const data = await response.json()
        //console.log(this.state)
        
        setList(data)
        //console.log(data)
    } */

    React.useEffect(() => {
      // declare the data fetching function
      const fetchData = async () => {
        
        setClicked(true)

          const response = await fetch(API_URL+'/getData')
          const data = await response.json()
          //console.log(this.state)
          
          setList(data)
          //console.log(data)
      }
    
      // call the function
      fetchData()
        // make sure to catch any error
        .catch(console.error);
    }, [])

    //webhooks for updating restaurant server?
    //create  multiple List componenets with data as props
    // num of componenets made based on length of list
      // figure out how to do this? function?
    //format 
    

  return (
    <div className="App">
      <Navbar/>
       
      {/* <button type="button"  onClick={recieveData}>CLICK</button> */}
      <div  className='listGroup'>
      {list.map((data)=>(
        <List
          name={data.fullName}
          numPeople={data.numPeople}
          phoneNum={data.phoneNum}
          key={data.phoneNum}
          id={data.phoneNum}
          click={clicked}
          setClick={setClicked}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
