import { useState } from "react";
import TodoList from "./TodoList";
import TodoNew from "./TodoNew";
import TodoTitle from "./TodoTitle";
import './todo.css';

const TodoContainer = () => {
    const data = {
        Title: "Todo List"
    }

    const [todoList, setTodoList] = useState([
        // { id: 1, title: 'Task 1' },
        // { id: 2, title: 'Task 2' },
        // { id: 3, title: 'Task 3' },
        // { id: 4, title: 'Task 4' },
        // { id: 5, title: 'Task 5' },
    ]);

    const ActionAddNew = (title) => {
        const newTodo = {
            id: todoList.length + 1,
            title: title
        }
        setTodoList([...todoList, newTodo]);
    }
    return (
        <div className="todo-container">
            <TodoTitle
                title={data.Title}
            />
            <TodoNew
                ActionAddNew={ActionAddNew}
            />
            <TodoList
                todoList={todoList}
            />
        </div>
    );
}

export default TodoContainer;