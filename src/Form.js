import React, {useState} from 'react';
import { Button, Input } from '@mui/material';
import canvas from './assets/canvas.jpg';
import {useNavigate} from 'react-router-dom';

function Form(props) {

    const navigate = useNavigate();
    const [student, setStudent] = useState({
        name: '',
        father: '',
        DOB: '',
        score: '',
    })
    const handleChange = (field, e) => {
        setStudent({
            ...student,
            [field]: e.target.value
        })
        console.log(student);
    }

    const uploadStudent = () => {
        if( student.name !== '' && student.father !== '' && 
            student.DOB !== '' && student.score != '' ) {
            props.addStudent(student);
            setStudent({
                name: '',
                father: '',
                DOB: '',
                score: '',
            })
        }
    }
    return (
        <div className=' h-screen w-screen rounded-xl md:w-1/4 mx-auto md:border-2'>
            <div className=' w-full rounded-t-xl h-[20%] '>
                <img className='h-full w-full object-fill rounded-t-xl' src={canvas} alt='office' />
            </div>
            <div className='flex flex-col'>
                <label className=' text-sm font-semibold m-4'>Student Name</label>
                <Input
                    value={student.name}
                    onChange={(e)=>handleChange('name', e)} 
                    className=' w-3/4 mx-auto'></Input>
                <label className=' text-sm font-semibold m-4'>Student father name</label>
                <Input
                    value={student.father}
                    onChange={(e)=>handleChange('father', e)} 
                    className= ' w-3/4 mx-auto'></Input>
                <label className=' text-sm font-semibold m-4'>Date of birth</label>
                <Input 
                    value={student.DOB}
                    onChange={(e)=>handleChange('DOB', e)}
                    className= ' w-3/4 mx-auto'></Input>
                <label className=' text-sm font-semibold m-4'>Overall Grade (in %)</label>
                <Input 
                    value={student.score}
                    onChange={(e)=>handleChange('score', e)}
                    className= ' w-3/4 mx-auto'></Input>
                <p className=' text-red-500 text-sm mx-4'>All fields are mandatory, avoid vacant field</p>
                <div className=' w-3/4 mx-auto mt-8 flex justify-center'>
                    <Button onClick={uploadStudent} variant="contained" className=' w-full'>submit</Button>
                </div>
                <div className=' w-3/4 mx-auto mt-8 flex justify-center'>
                    <Button
                        onClick={()=>navigate('/table')} variant='outlined'>Display Table</Button>
                </div>
            </div>
            
        </div>
    )
}

export default Form