import React from "react";

const Main = () => {
  return (
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiIDZZ2zobYDZVnOsSp8v5FENYIo7QKNyIdLYyL5xLAoGJVNvTmtIRkt6vW_FKDmOnt98&usqp=CAU"></img>
      <center>
        <label for="name">Email Id: &emsp;</label>
        <input id="name" type="box" placeholder="Email ID"></input>
        <br></br>
        <br></br>
        <label for="na">Password: &emsp;</label>
        <input id="na" type="Password" placeholder="Password"></input>
        <br></br>
        <br></br>
        <button>Submit</button>
      </center>
    </div>
  );
};

export default Main;
