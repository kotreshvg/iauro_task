import react, {useState, useEffect} from 'react';
import {TableRow, TableCell} from '@windmill/react-ui'

function Datagrid(props) {

    return (
        <TableRow>
            <TableCell>{props.element.name}</TableCell>
            <TableCell>{props.element.father}</TableCell>
            <TableCell>{props.element.DOB}</TableCell>
            <TableCell>{props.element.score}</TableCell>
            <TableCell>
                <span className=' cursor-pointer' onClick={()=>props.update(props.element.id)}>Edit</span>/
                <span className=' cursor-pointer' onClick={()=>props.delete(props.element.id)}>Delete</span>
            </TableCell>
        </TableRow>
    )
}

export default Datagrid