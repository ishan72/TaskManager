import React, { useContext, useState } from 'react';
import { Ellipsis } from '../../assets/index';
import { GlobalContext } from '../../Context/GlobalState';
import { v4 as uuid } from 'uuid';
import { TaskIncomplete } from './taskIncomplete';
import { TaskComplete } from './taskComplete';

export const TodayTask = () => {
    const [content, setContent] = useState('');
    const { tasks, addTask } = useContext(GlobalContext);
    const onSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            id: uuid(),
            content,
            completion: false
        }
        addTask(newTask);
        setContent('');
    }
    const onChange = (e) => {
        setContent(e.target.value);
    }
    return (
        <div className="today-task-divs">
            <div className='today-task-header'>
                <h3>Today's Tasks</h3>
                <img src={Ellipsis} alt="" width='6px' height='24px' />
            </div>
            <div className='today-task-complete'>
                {tasks.length > 0 ? (tasks.map(task => {
                    if (task.completion === true) {
                        return (
                            <TaskComplete key={task.id} task={task}/>
                        )
                    }
                    return null;
                })) : <p>No task today</p>}
            </div>
            <div className='today-task-list'>
                {tasks.length > 0 ? (tasks.map(task => {
                    if (task.completion === false) {
                        return (
                            <TaskIncomplete key={task.id} task={task} />
                        )
                    }
                    return null;
                })) : (<p>No task today</p>)}
            </div>
            <div className="today-task-add">
                <form onSubmit={onSubmit}>
                    <input type="text" value={content} onChange={onChange} placeholder="+ Add a new task" />
                </form>
            </div>
        </div>
    )
}