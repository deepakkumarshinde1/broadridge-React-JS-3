import { useUserContext } from "../context/user.context.jsx";

function UserInput() {
  let { input, setInput, handelKeyDown } = useUserContext();
  console.log("UserInput");
  return (
    <div>
      <input
        value={input}
        type="text"
        placeholder="Enter User Name and hit enter to save"
        onChange={(event) => {
          setInput(event.target.value);
        }}
        onKeyDown={handelKeyDown}
      />
    </div>
  );
}

export default UserInput;
