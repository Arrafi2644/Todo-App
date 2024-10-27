import CompleteTask from "./CompleteTask";


const Complete = () => {
    return (
        <div className="border rounded-xl p-6">
            <h2 className="text-2xl md:3xl font-bold mb-4 text-center">Complete Task</h2>
            <h2 className="test-xl font-bold mb-4">Total Tasks: 0</h2>
            <CompleteTask></CompleteTask>
        </div>
    );
};

export default Complete;