import { useDispatch, useSelector } from "react-redux";
import { placeTasks } from "../../store/slices/tasksSlice";
import { useState } from "react";
import "./Task.scss";

function Task(props) {
  let tasks = useSelector(state => state.tasks);

  // let subtasksArr = [];

  // useEffect(() => {
  //   array.forEach(element => {

  //   });
  //   .push()
  // }, [tasks]);

  const dispatch = useDispatch();
  const [subtask, setSubtask] = useState("");

  const onChange = e => {
    setSubtask(e.target.value);
  };

  const createSubtask = id => {
    // id - 1 is the index of the task in the array because we + 1 it on creation
    console.log(JSON.parse(localStorage.getItem("taskCreated"))[id - 1]);
    const taskCreated = JSON.parse(localStorage.getItem("taskCreated"));
    taskCreated[id - 1].subtasks.push(subtask);
    dispatch(placeTasks(taskCreated));
    localStorage.setItem("taskCreated", JSON.stringify(taskCreated));
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
      {/* this should pull from reduxstate */}
      {props?.subtasks?.map((element, key) => (
        <div className="subTasksChecklist">
          <li key={key}>{element}</li>
          <input type="checkbox" />
        </div>
      ))}
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
