

import CompleteTasks from "./Complete/CompleteTasks";
import TodoTasks from "./Todo/TodoTasks";
import PropTypes from "prop-types";


const Main = ({ handleCompleteTask, completeTasks }) => {

    // console.log(completeTasks);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TodoTasks handleCompleteTask={handleCompleteTask}></TodoTasks>
            <CompleteTasks
                completeTasks={completeTasks}
            ></CompleteTasks>
        </div>
    );
};

Main.propTypes = {
    handleCompleteTask: PropTypes.func.isRequired,
    completeTasks: PropTypes.array.isRequired
}

export default Main;