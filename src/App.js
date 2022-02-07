import logo from './logo.svg';
import './App.css';
import Form from './Form';
import React, {useState, useEffect} from 'react';

function App() {
  const [studentList, setStudentList] = useState([]);
  const [display, setDisplay] = useState('Form');

  const addStudent = async (data) => {
    if(data) {
      setStudentList([...studentList, data]);
    }
    console.log(studentList);
  }

  if(display === 'Form') {
    return (
      <Form addStudent={addStudent}/>
    );
  }
  
}

export default App;
