import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing";
import { ApolloProvider } from "@apollo/client";
import client from "./config/ApolloClient";
import io from "socket.io-client";
import { useState, useEffect } from "react";

function App() {
  const [serverMessage, setServerMessage] = useState(""); // State to store the server's response
  const [clientMessage, setClientMessage] = useState(""); // State to store the message sent from client

  useEffect(() => {
    // Connect to the Socket.IO server (make sure to match the server URL)
    const socket = io("http://localhost:3001");

    // Listen for the 'welcome' event emitted by the server
    socket.on("welcome", (message) => {
      console.log("Received from server:", message);
    });

    // Listen for the server's response to our message
    socket.on("serverMessage", (message) => {
      console.log("Received from server:", message);
      setServerMessage(message); // Update the server message state
    });

    // Clean up the socket connection when the component is unmounted
    return () => {
      socket.disconnect();
    };
  }, []);

  // Send a message to the server when the button is clicked
  const sendMessage = () => {
    const socket = io("http://localhost:5000");
    socket.emit("clientMessage", clientMessage); // Emit a message from the client
  };

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign-in" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
