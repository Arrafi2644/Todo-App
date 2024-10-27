import PropTypes from "prop-types";

const CompleteTask = ({task}) => {
    // console.log(task)
    const {title} = task;
    
    return (
        <div className="border p-6 rounded-xl mb-6">
            <h2>Task: {title}</h2>
            
        </div>
    );
};

CompleteTask.propTypes = {
    task: PropTypes.object.isRequired
}


export default CompleteTask;