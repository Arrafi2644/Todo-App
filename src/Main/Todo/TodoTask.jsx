

const TodoTask = ({task}) => {
    console.log(task)
    const {title, description} = task;
    return (
        <div className="border p-6 rounded-xl mb-6 flex items-center justify-between">
            
            <div>
            <h2>Task: {title}</h2>
            <p>{description}</p>
            </div>
            <div>
                <button className="btn">Complete</button>
            </div>
        </div>
    );
};

export default TodoTask;