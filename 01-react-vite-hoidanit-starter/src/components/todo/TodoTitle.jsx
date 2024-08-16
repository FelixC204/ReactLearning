const TodoTitle = (props) =>{
    const {title} = props;
    return (
        <div className="todo-title">
            {title}
        </div>
    );
}

export default TodoTitle;