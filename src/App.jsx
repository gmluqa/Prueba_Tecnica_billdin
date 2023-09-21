import AddTask from "./components/AddTask/AddTask";
import Column from "./components/Column/Column";
import "./App.css";

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
    </>
  );
}

export default App;
