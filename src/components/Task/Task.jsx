import { useState } from "react";
import "./Task.scss";

function Task(props) {
  const [subtask, setSubtask] = useState("");

  const onChange = e => {
    setSubtask(e.target.value);
  };

  const createSubtask = id => {
    console.log("here is the id " + id);
    // console.log("here is the id " + id);
    // console.log(JSON.parse(localStorage.getItem("taskCreated"))[id]);
  };

  return (
    <div className="taskBorder">
      <div>Título: {props.title}</div>
      <div>Notas: {props.notes}</div>
      {/* TODO Fix react dev tools warning here */}
      <div>Subtareas:</div>
      <div className="addSubtaskBorder">
        <input type="text" onChange={onChange} />
        <div className="addSubtask" onClick={() => createSubtask(props.id)}>
          +
        </div>
      </div>
      {props?.subtasks?.map((element, key) => (
        <div className="subTasksChecklist">
          <li key={key}>{element}</li>
          <input type="checkbox" />
        </div>
      ))}
      <label htmlFor="status">Estado:</label>
      <select name="status" id="status">
        <option value="porHacer">Por hacer</option>
        <option value="enProgreso">En progreso</option>
        <option value="finalizado">Finalizado</option>
      </select>
    </div>
  );
}

export default Task;
