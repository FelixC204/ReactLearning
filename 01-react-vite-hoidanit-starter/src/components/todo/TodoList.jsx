import logoReact from '../../assets/react.svg';
const TodoList = (props) => {
    const {todoList} = props;
    return (
        <div className='TodoList'>
            {todoList.map((item,index)=>{
                return (
                   <div className='todo-item' key={item.id}>
                        <div>{item.title}</div>
                        <button>Xoá</button>
                   </div>     
                )
            })}
            {todoList.length === 0 && 
                <img src={logoReact} alt="" className='logo' />
            }
        </div>
    )
}

export default TodoList;