
import './App.css';
import axios from "axios";
import { useState } from 'react'
import {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from './components/UserList';
import Loading from './components/Loading';


function App() {
  
  const [listOfUser, setlistOfUser]=useState(null)
  
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
     .then((users) => setlistOfUser(users.data))
     .catch((err) => console.log("error:",err))

  }, []);
  
  
  
  
  return (
    <div className="App">
      <header className="App-header">
        
     {
      listOfUser ?<UserList listOfUser={listOfUser}/> :<Loading/>

     }



      </header>
    </div>
  );
}

export default App;
