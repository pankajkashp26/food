import User from "./user";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div className="about">
      <div class="about-contact">
        <h1>This is the contact page </h1>
        <h1>It's a trial about page for testing</h1>
        <h1>Email and no and other contact info</h1>
      </div>
      <User name={"Mohti (function)"}/>
      <UserClass name={"Mohit badmosh (classes)"} location={"ghaziabad"}/>
    </div>
  );
};

export default About;
