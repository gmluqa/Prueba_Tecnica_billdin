import { useState } from "react";
import "./Task.scss";

function Task(props) {
  const [subtask, setSubtask] = useState("");

  const onChange = e => {
    setSubtask(e.target.value);
  };

  const onClick = () => {};

  return (
    <div className="taskBorder">
      <div>Título: {props.title}</div>
      <div>Notas: {props.notes}</div>
      <div>Estado: {props.status}</div>
      {/* TODO Fix react dev tools warning here */}
      <div>
        Subtareas:
        {props.subtasks.map((element, key) => (
          <div className="subTasksChecklist">
            <li key={key}>{element}</li>
            <input type="checkbox" />
          </div>
        ))}
      </div>
      <div className="addSubtaskBorder">
        <input type="text" onChange={onChange} />
        <div className="addSubtask" onClick={onClick}>
          +
        </div>
      </div>
    </div>
  );
}

export default Task;
