import Intro from "./components/Intro";

function App() {
  let text = "Deepakkumar";
  let run = () => {
    return "Hi";
  };
  return (
    <>
      {/* <h1>{text}</h1> */}
      <Intro name={text} run={run} ABC={"hi"} userName={"hi"} abc_zyx={"hi"} />
      <hr />
      <Intro name={"Rahul"} run={run} />
      <hr />
      <Intro name={"Sumeet"} run={run} />
    </>
  );
}

export default App;

// JSX => Javascript XML
// <> </> => JSX Fragment
// JSX => 1 Parent
// Each tag must be close

// class attribute => className
// for => htmlFor
// dynamic javascript code => {} => JSX expression
