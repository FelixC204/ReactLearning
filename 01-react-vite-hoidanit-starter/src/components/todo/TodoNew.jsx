import { useState } from "react";

const TodoNew = (props) => {
    const {ActionAddNew} = props;
    const [ValueInput, setValueInput] = useState("");

    const handleChange = (e) =>{
        setValueInput(e.target.value);
    }

    const handleClick = (Value) => {
        ActionAddNew(Value)
        setValueInput("")
    }

    
    return (
        <div className='TodoNew'>
          <input type="text" name="add" className="inputAdd" placeholder='Enter your task' 
            onChange={(event)=>handleChange(event)}
            value={ValueInput}
          />
          <button onClick={()=>handleClick(ValueInput)} style={{cursor:"pointer"}}  disabled={ValueInput === ""} className="addBtn">Add</button>
        </div>
    )
}

export default TodoNew;