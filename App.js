import React, { useEffect,useState } from "react";
import Card from "react-bootstrap/Card";
import Grid from "./components/grid";
import "./App.css";
import moment from 'moment';
//import card from './components/'

const App = () => {
  // ADD JAVASCRIPT CODE HERE
  const [data, setdata] = useState([])
  
  const cardinfo=[]
  
  
  // useEffect hook that runs when App is "mounted"
  useEffect(() => {
    // Get JSON data here
    fetch('https://api.jsonbin.io/b/5ef2805e97cb753b4d1687e8')
    .then(response=> response.json())
    .then(recievedata => 
      setdata([...recievedata].sort((a, b) => moment(a.date +"T" + a.time).diff(moment(b.date +"T" + b.time))))
    );
    //const[item]= data.
  }, []);

// HTML RENDERING DONE IN THE RETURN STATEMENT
  return (
    <div>
      <header className='Title'>On-Four</header>
          <div className='container'>
                  {data.map(user=> (
                    <div key={user.date} className='card'>
                        <img              
                            src={user.image}
                            alt={user.name}
                            className="people-image"
                          />
            <div className='header' alt='' >
              <span>{user.genre}</span>
            </div>
                
          <div className='name' alt=''>
            <p>{user.artist_name}-{user.concert_name}</p></div> 
              
          <div clasName='footer'>{moment(user.date).format('dddd')} | {moment(user.date).format('LL')} | {moment(user.time,"HH:mm:ss" ).format("h:mm A")}</div>
            </div>
            
          ))}
          
              
          </div>    
          </div>
    
  );
};

export default App;
