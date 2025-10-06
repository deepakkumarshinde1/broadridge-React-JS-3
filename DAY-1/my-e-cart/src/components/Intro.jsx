function Intro(props) {
  // props are readonly
  //   props.name = "sai";
  return (
    <>
      <h1>Hi, Team</h1>
      <h1>
        Hello
        <u>
          <mark>{props.name}</mark>
        </u>
        {2 + 2} {props.run()}
      </h1>
      <input type="text" />
      {/* <img src="" alt="" /> */}
    </>
  );
}

export default Intro;
