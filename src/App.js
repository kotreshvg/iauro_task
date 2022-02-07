import logo from './logo.svg';
import './App.css';
import Form from './Form';
import React, {useState, useEffect} from 'react';
import Datagrid from './Datagrid';
import {TableContainer, Table, TableHeader, TableRow, TableFooter, TableBody, TableCell, Modal, ModalBody, ModalFooter} from '@windmill/react-ui'
import { Button, Input } from '@mui/material';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom'

function App() {
  const [studentList, setStudentList] = useState([
    {name: 'kotresh v g', father: 'jayappa', DOB: '24/11', score: '94'},
    {name: 'kotresh', father: 'jayappa', DOB: '24/11', score: '94'}
  ]);
  // const [display, setDisplay] = useState('grid');
  const [editStudent, setEditStudent] = useState(null);

  const rows = studentList.map((ele, index) => {
    ele.id = index;
    return ele;
  });

  const addStudent = async (data) => {
    if(data) {
      setStudentList([...studentList, data]);
    }
    console.log(studentList);
  }

  const updateStudent = (index) => {
    console.log(index);
    setEditStudent(studentList[index]);
  }

  const handleMutate = (key, e) =>  {
    setEditStudent({
      ...editStudent,
      [key]: e.target.value,
    })
  }

  const save = () => {
    let listCopy = studentList;
    listCopy.splice(editStudent.id, 1, {
      name: editStudent.name,
      father: editStudent.father,
      DOB: editStudent.DOB,
      score: editStudent.score,
    });
    setStudentList([...listCopy]);
    setEditStudent(null);
    console.log('saving',editStudent.id, listCopy);
  }

  const deleteStuednt = (index) => {
    let listCopy = studentList.filter((ele, id) => {
      if (id != index) {
        return ele;
      }
    });
    console.log(listCopy);
    setStudentList(listCopy);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/form' element={<Form addStudent={addStudent} />} />
        <Route path='/table' element={
          <>
          {editStudent && 
            <Modal isOpen={true} onClose={()=>setEditStudent(null)}>
              <ModalBody>
              <div className=' mt-4 mx-4'>Name
                  <Input
                    onChange={(e) => {handleMutate('name',e)}}
                     className='mx-4' value={editStudent.name}></Input>
              </div>
              <div className=' mt-4 mx-4'>father
                  <Input 
                    onChange={(e) => {handleMutate('father',e)}}
                    className='mx-4' value={editStudent.father}></Input>
              </div>
              <div className=' mt-4 mx-4'>DOB 
                  <Input 
                    onChange={(e) => {handleMutate('DOB',e)}}
                    className='mx-4' value={editStudent.DOB}></Input>
              </div>
              <div className=' mt-4 mx-4'>Score 
                  <Input 
                    onChange={(e) => {handleMutate('score',e)}}
                    className='mx-4' value={editStudent.score}></Input>
              </div>
              </ModalBody>
              <ModalFooter>
                <Button onClick={save} variant='outlined'>Save</Button>
              </ModalFooter>
            </Modal>
          }
          <TableContainer className=' w-[100%]'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Father</TableCell>
                  <TableCell>DOB</TableCell>
                  <TableCell>Score</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
              {
                rows.map(ele => {
                  return (
                    <Datagrid element={ele} update={updateStudent} delete={deleteStuednt} key={ele.id} />
                  )
                })
              }
              </TableBody>
            </Table>
            <TableFooter>
              <Button 
               variant='outlined'><Link to='/form'>Go to Form</Link></Button>
            </TableFooter>
          </TableContainer>
          </>
        } />
      </Routes>
    </BrowserRouter>
  )

  // if(display === 'Form') {
  //   return (
  //     <Form addStudent={addStudent}/>
  //   );
  // } else {
  //   return (
  //     <>
  //     {editStudent && 
  //       <Modal isOpen={true} onClose={()=>setEditStudent(null)}>
  //         <ModalBody>
  //         <div className=' mt-4 mx-4'>Name
  //             <Input
  //               onChange={(e) => {handleMutate('name',e)}}
  //                className='mx-4' value={editStudent.name}></Input>
  //         </div>
  //         <div className=' mt-4 mx-4'>father
  //             <Input 
  //               onChange={(e) => {handleMutate('father',e)}}
  //               className='mx-4' value={editStudent.father}></Input>
  //         </div>
  //         <div className=' mt-4 mx-4'>DOB 
  //             <Input 
  //               onChange={(e) => {handleMutate('DOB',e)}}
  //               className='mx-4' value={editStudent.DOB}></Input>
  //         </div>
  //         <div className=' mt-4 mx-4'>Score 
  //             <Input 
  //               onChange={(e) => {handleMutate('score',e)}}
  //               className='mx-4' value={editStudent.score}></Input>
  //         </div>
  //         </ModalBody>
  //         <ModalFooter>
  //           <Button onClick={save} variant='outlined'>Save</Button>
  //         </ModalFooter>
  //       </Modal>
  //     }
  //     <TableContainer>
  //       <Table>
  //         <TableHeader>
  //           <TableRow>
  //             <TableCell>Name</TableCell>
  //             <TableCell>Father</TableCell>
  //             <TableCell>DOB</TableCell>
  //             <TableCell>Score</TableCell>
  //             <TableCell>Action</TableCell>
  //           </TableRow>
  //         </TableHeader>
  //         <TableBody>
  //         {
  //           rows.map(ele => {
  //             return (
  //               <Datagrid element={ele} update={updateStudent} delete={deleteStuednt} key={ele.id} />
  //             )
  //           })
  //         }
  //         </TableBody>
  //       </Table>
  //       <TableFooter>
  //         <Button onClick={()=>setDisplay('Form')} variant='outlined'>Go to From</Button>
  //       </TableFooter>
  //     </TableContainer>
  //     </>
  //   )

  // }
  
}

export default App;
