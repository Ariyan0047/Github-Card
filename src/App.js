import Nav from "./components/Nav";
import Cards from "./components/Cards";
import Form from "./components/Form";
import React, { useState } from "react";

function App() {
  const [data, setData] = useState([
    {
      id: Math.random(),
      name: "john doe",
      avatar_url: "https://picsum.photos/seed/picsum/200/200",
      company: "facebook",
    },
    {
      id: Math.random(),
      name: "frank hardy",
      avatar_url: "https://picsum.photos/seed/picsum/200/200",
      company: "facebook",
    },
  ]);

  const userProfile = (profile) => {
    setData([...data, profile]);
  };

  return (
    <div className="App">
      <Nav />
      <Form dataHandler={userProfile} />
      <Cards profiles={data} />
    </div>
  );
}

export default App;
