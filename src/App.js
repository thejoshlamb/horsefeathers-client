import React, { useState, useEffect } from "react"
import socketIOClient from "socket.io-client"
const urlRoot = process.env.NODE_ENV === "production" ? "https://horsefeathers.herokuapp.com" : "http://127.0.0.1:4200"

function App() {
  const [response, setResponse] = useState("")

  useEffect(() => {
    const socket = socketIOClient(urlRoot)
    socket.on("FromAPI", data => {
      setResponse(data);
    });

    return () => socket.disconnect()
  }, [])

  return (
    <p>
      It's <time dateTime={response}>{response}</time>
    </p>
  );
}

export default App;