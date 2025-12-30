import {useEffect, useState} from "react";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/hello")
      .then((res) => res.text())
      .then((data) => setMsg(data));
  }, []);

  return (
    <div>
      <h1>Front End</h1>
      <p>{msg}</p>
    </div>
  );
}

export default App;
