import AddTask from "./components/AddTask/AddTask";
import Column from "./components/Column/Column";
import "./App.css";
import Task from "./components/Task/Task";

function App() {
  return (
    <>
      <div className="addTaskHandler">
        <AddTask />
      </div>
      <div className="columnHandler">
        <Column state="porHacer"></Column>
        <Column state="enCurso"></Column>
        <Column state="finalizada"></Column>
      </div>
      <Task
        title="example task"
        notes="example notes"
        status="porHacer"
        subtasks={["example", "example2"]}
      ></Task>
    </>
  );
}

export default App;
