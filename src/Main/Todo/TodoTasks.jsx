
import { BiDoughnutChart } from "react-icons/bi";
import TodoTask from "./todoTask";
import PropTypes from "prop-types";



const Todo = ({ handleCompleteTask, todoTasks }) => {


    return (
        <div className="border rounded-xl p-6 bg-[#00dfff47]">
            <h2 className="text-2xl md:3xl font-bold mb-4 text-center">ToDo Task</h2>
            <h2 className="test-xl font-bold mb-4">Total Tasks: {todoTasks.length}</h2>

            {
                todoTasks.map(task => <TodoTask
                    key={task.id}
                    task={task}
                    handleCompleteTask={handleCompleteTask}
                ></TodoTask>)
            }

            {/* <button onClick={showAddTask} className="btn">Add More Task</button>
            <div id="add-task" className=" flex flex-col gap-2 border p-4 rounded-xl hidden">
                <div className="space-y-2 ">
                <input type="text" placeholder="Type task title" className="input input-bordered w-full" />
                <textarea className="textarea textarea-bordered w-full resize-none" placeholder="Bio"></textarea>
                <button className="btn bg-green-400 px-10">Add</button>
                </div>
                
            </div> */}
        </div>
    );
};

Todo.propTypes = {
    handleCompleteTask: PropTypes.func.isRequired,
    todoTasks: PropTypes.array.isRequired
}

export default Todo;