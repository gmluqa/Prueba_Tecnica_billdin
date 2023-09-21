import "./Task.scss";

function Task(props) {
  return (
    <div className="taskBorder">
      <div>Título: {props.title}</div>
      <div>Notas: {props.notes}</div>
      <div>Estado: {props.status}</div>
      <div>Subtareas: {props.subtasks}</div>
      <div className="addSubtaskBorder">
        <input type="text" />
        <div className="addSubtask">+</div>
      </div>
    </div>
  );
}

export default Task;
