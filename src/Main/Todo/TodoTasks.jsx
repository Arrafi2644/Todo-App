import { useEffect } from "react";
import { useState } from "react";
import TodoTask from "./todoTask";
import PropTypes from "prop-types";



const Todo = ({handleCompleteTask}) => {
    const [todoTasks, setTodoTasks] = useState([]);

   useEffect(()=>{
    fetch('todo.json')
    .then(res => res.json())
    .then(data => setTodoTasks(data))
   }, [])


    return (
        <div className="border rounded-xl p-6">
            <h2 className="text-2xl md:3xl font-bold mb-4 text-center">ToDo Task</h2>
            <h2 className="test-xl font-bold mb-4">Total Tasks: {todoTasks.length}</h2>
            
            {
                todoTasks.map(task => <TodoTask 
                    key={task.id}
                     task={task}
                     handleCompleteTask= {handleCompleteTask}
                     ></TodoTask>)
            }
        </div>
    );
};

Todo.propTypes = {
    handleCompleteTask: PropTypes.func.isRequired
}

export default Todo;