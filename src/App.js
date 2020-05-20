import React, {useState} from 'react';
import './App.css';
import Form from "./componet/Form";
import Card from './componet/Card';



function App() {
  const [member, setMember] = useState([])
  const addMember = member2 => {
    const newMember = {
      id: Date.now(),
      name: member2.name,
      email: member2.email,
      role: member2.role
    };
    setMember([...member, newMember]);
  };


  return (
    <div className="App">
      <Form addMember = {addMember}/>
      <Card member = {member}/>
    </div>
  );
}

export default App;
