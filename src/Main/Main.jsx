import Complete from "./Complete/Complete";
import Todo from "./Todo/Todo";


const Main = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Todo></Todo>
            <Complete></Complete>
        </div>
    );
};

export default Main;