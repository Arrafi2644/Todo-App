import { useEffect } from "react";
import { useState } from "react";
import background from '../src/assets/todo-bg.jpg'
import Main from './Main/Main'

export default function App() {

  const [todoTasks, setTodoTasks] = useState([]);
  const [resetTodo, setResetTodo] = useState([])

  const [completeTasks, setCompleteTasks] = useState([]);

  useEffect(()=>{
   fetch('todo.json')
   .then(res => res.json())
   .then(data => {
    setTodoTasks(data)
    setResetTodo(data)
  }
  )}, [])

  const handleCompleteTask = (task)=>{
      //  console.log(task)
       const newCompleteTask = [...completeTasks, task];
       setCompleteTasks(newCompleteTask);

       const lastCompleteTask = todoTasks.find(lastCompleteTask => lastCompleteTask.id === task.id)
       if(lastCompleteTask){
      const  remainingTodoTasks = todoTasks.filter(task => task.id !== lastCompleteTask.id);
      setTodoTasks(remainingTodoTasks)

       }
  }

  const handleReset = () => {
    setTodoTasks(resetTodo);
    setCompleteTasks([]);
    
   }
// console.log(completeTasks);


  return (
    <div className="max-w-6xl mx-auto p-6 font-bold bg-no-repeat bg-center bg-cover" style={{
      backgroundImage: `url(${background})`
    }}>
      <h1 className='text-3xl md:text-4xl text-gray-800 text-center my-12 md:my-16'>ToDo APP</h1>

   
       <Main 
       handleCompleteTask={handleCompleteTask}
       completeTasks={completeTasks}
       todoTasks={todoTasks}
       handleReset={handleReset}
       ></Main>


    </div>
  )
}