import React, {useState} from "react";
import Task from "./task";
export default function Tasklist(){
    const [tasks,useTasks]=useState([
        {
        id: 1,
        title: 'Review week 9 material',
        date: 'June 4th at 1 pm',
        },
        {
        id: 2,
        title : 'Do quiz 9',
        date: 'June 4th at 6 pm',  
        },
        {
        id: 3,
        title : 'Work on assignment 2',
        date: 'June 5th at 8 am',
        }, 
        ]);
        const deletePressed=(delId)=>{
            console.log("click",delId);
        }
        return tasks.map((item)=>{return <Task key={item.id} task={item} deleteHandler={deletePressed}/>;})
    
}