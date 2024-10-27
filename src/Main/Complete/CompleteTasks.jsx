import CompleteTask from "./CompleteTask";
import PropTypes from "prop-types";

const CompleteTasks = ({ completeTasks, handleReset }) => {
    console.log(completeTasks)
    return (
        <div className="border rounded-xl p-6 bg-[#61ea614f]">
            <h2 className="text-2xl md:3xl font-bold mb-4 text-center">Complete Task</h2>
            <h2 className="test-xl font-bold mb-4">Total Tasks: {completeTasks.length}</h2>
            {
                completeTasks.map(task => <CompleteTask 
                    key={task.id}
                     task={task}
                     ></CompleteTask>)
            }
            <div className="text-right">
            {
                completeTasks.length>0?(<button onClick={handleReset} className="btn px-8">Reset</button>) : ""
            }
            </div>
        </div>
    );
};

CompleteTasks.propTypes = {
    completeTasks: PropTypes.array.isRequired,
    handleReset: PropTypes.func.isRequired
}

export default CompleteTasks;