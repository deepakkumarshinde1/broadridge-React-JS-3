import { Component } from "react";
import { UserContext, useUserContext } from "../context/user.context";

class UserList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ul className="ul">
          <UserContext.Consumer>
            {(value) =>
              value.userList.map((name, index) => {
                return <li key={index}>{name}</li>;
              })
            }
          </UserContext.Consumer>
        </ul>
      </div>
    );
  }
}

export default UserList;
