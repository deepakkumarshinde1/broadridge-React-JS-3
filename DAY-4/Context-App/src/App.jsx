import Users from "./components/User/Users";
import style from "./App.module.css";
function App() {
  let cssStyle = { backgroundColor: "red", color: "white" };
  return (
    <div>
      <div className={style["text-success"]}>App Text</div>
      <div className={"text-success"}>GLobal CSS</div>
      <div style={cssStyle}>Inline Style Prop css</div>
      <Users />
    </div>
  );
}

export default App;
