import React, { useState, useEffect } from "react"
import socketIOClient from "socket.io-client"
const urlRoot = process.env.NODE_ENV === "production" ? "https://horsefeathers-server.herokuapp.com" : "http://127.0.0.1:4200"

console.log("my urlroot is ", urlRoot)

function App() {
  const [gameState, setGameState] = useState({})

  useEffect(() => {
    const socket = socketIOClient(urlRoot)
    socket.on("state", data => {
      console.log("got state", data)
      setGameState(data);
    });

    return () => socket.disconnect()
  }, [])

  return (
    <div>
      <pre>{JSON.stringify(gameState, null, 2)}</pre>
      {/* There are {Object.keys(gameState.players).length} people here */}
    </div>
  );
}

export default App;