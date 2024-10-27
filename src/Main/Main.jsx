

import CompleteTasks from "./Complete/CompleteTasks";
import TodoTasks from "./Todo/TodoTasks";
import PropTypes from "prop-types";


const Main = ({ handleCompleteTask, todoTasks, completeTasks, handleReset }) => {

    // console.log(completeTasks);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TodoTasks
            todoTasks={todoTasks}
             handleCompleteTask={handleCompleteTask}
            //  handleReset={handleReset}
            ></TodoTasks>
            <CompleteTasks
                completeTasks={completeTasks}
                handleReset={handleReset}
            ></CompleteTasks>
        </div>
    );
};

Main.propTypes = {
    handleCompleteTask: PropTypes.func.isRequired,
    completeTasks: PropTypes.array.isRequired,
    todoTasks: PropTypes.array.isRequired,
    handleReset: PropTypes.func.isRequired
}

export default Main;