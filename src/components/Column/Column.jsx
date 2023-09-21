import "./Columns.scss";

function Column(props) {
  return (
    <div className="columnBorder" id={props.state}>
      {props.children}
    </div>
  );
}

export default Column;
