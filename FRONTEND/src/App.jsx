import {useEffect, useState} from "react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch(`${API_BASE_URL}/about`, {
      credentials: "include",
    })
      .then((res) => res.text())
      .then((data) => setMsg(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Front End by jay</h1>
      <p>{msg}</p>
    </div>
  );
}

export default App;
