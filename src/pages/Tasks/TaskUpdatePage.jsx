import {useState, useEffect} from 'react';

import {useParams} from 'react-router-dom';

import Container from "../../components/UI/Container";

import TaskUpdate from '../../components/TasksUI/TaskUpdate';

import Tasks from '../../API/TasksAPI';



const TaskUpdatePage = () => {
    const {id} = useParams();
    const [task, setTask] = useState(false);

    useEffect(()=>{
        Tasks.getTask(id, setTask);
    },[id])
    return (
        <Container width='40%' margin='60px auto 0'>
            {task
                ?<TaskUpdate task={task}/>
                :null
            }
        </Container>
    )
}

export default TaskUpdatePage;