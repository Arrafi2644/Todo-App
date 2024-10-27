import PropTypes from "prop-types";

const TodoTask = ({task, handleCompleteTask}) => {
    // console.log(task)
    const {title, description} = task;
    return (
        <div className="border p-6 rounded-xl mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
            
            <div>
            <h2 className="font-bold text-gray-800">Task: {title}</h2>
            <p className="font-medium text-gray-700 mt-2">{description}</p>
            </div>
            <div>
                <button onClick={()=>handleCompleteTask(task)} className="btn">Complete</button>
            </div>
        </div>
    );
};

TodoTask.propTypes = {
    task: PropTypes.object.isRequired,
    handleCompleteTask: PropTypes.func.isRequired
}

export default TodoTask;