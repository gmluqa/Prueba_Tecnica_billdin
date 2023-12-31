import { useDispatch, useSelector } from "react-redux";
import { placeTasks } from "../../store/slices/tasksSlice";
import { useState, useEffect } from "react";
import "./Task.scss";

function Task(props) {
  const dispatch = useDispatch();
  const [subtask, setSubtask] = useState("");
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);

  let tasks = useSelector(state => state.tasks);

  useEffect(() => {
    tasks = JSON.parse(localStorage.getItem("taskCreated"));
    // call to render
  }, [tasks]);

  const onChange = e => {
    setSubtask(e.target.value);
  };

  const createSubtask = id => {
    // id - 1 is the index of the task in the array because we + 1 it on creation
    const taskCreated = JSON.parse(localStorage.getItem("taskCreated"));
    taskCreated[id - 1].subtasks.push(subtask);
    dispatch(placeTasks(taskCreated));
    localStorage.setItem("taskCreated", JSON.stringify(taskCreated));
    setCurrentTaskIndex(id - 1);
  };

  const switchTaskToEnCurso = id => {
    const arrayIndex = id - 1;
    const taskCreated = JSON.parse(localStorage.getItem("taskCreated"));
    taskCreated[arrayIndex].status = "enCurso";
    // localStorage.setItem("taskCreated", JSON.stringify(taskCreated));
    // dispatch(placeTasks(taskCreated)); commented for now, TOOD: Fix
  };

  return (
    <div className="taskBorder">
      <div className="flexContainer">
        <div>Título: {props.title}</div>
        <input type="text" />
        <div>✅</div>
      </div>
      <div className="flexContainer">
        <div>Notas: {props.notes}</div>
        <input type="text" />
        <div>✅</div>
      </div>

      {/* TODO Fix react dev tools warning here */}
      <div>Subtareas:</div>
      <div className="addSubtaskBorder">
        <input type="text" onChange={onChange} />
        <div className="addSubtask" onClick={() => createSubtask(props.id)}>
          +
        </div>
      </div>
      <div>
        {props.subtasks.map((subtask, key) => (
          <li key={key}>
            {subtask}
            <input
              type="checkbox"
              onClick={() => switchTaskToEnCurso(props.id)}
            />
          </li>
        ))}
      </div>
      {/* {Subtasks handler} */}
      <label htmlFor="status">Estado:</label>
      <select name="status" id="status" defaultValue={props.status}>
        <option value="porHacer">Por hacer</option>
        <option value="enProgreso">En progreso</option>
        <option value="finalizada">Finalizada</option>
      </select>
    </div>
  );
}

export default Task;
