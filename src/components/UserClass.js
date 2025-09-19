import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.state={
        userInfo:"dummy",
        location:"dummws"
    }
  }
  async componentDidMount() {
    const data = await fetch(" https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    console.log(json);
    this.setState({
      userInfo: json,
      location: json.location,
    });
  }
  render() {
    // const { name, location } = this.props;
    // const { count } = this.state;
    const{name,location}=this.state.userInfo;
    return (
      <div className="user-info">
        {/* <h1>coutn={count}</h1> */}
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
        <h3>Contact: 123@gmail.com</h3>
      </div>
    );
  }
}
export default UserClass;

//  <button
//           onClick={() => {
//             this.setState({
//               count: count + 1,
//             });
//           }}
//         >
//           Count{" "}
//         </button>
