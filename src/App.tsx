import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LandingPage from "./pages/Landing";
import { ApolloProvider } from "@apollo/client";
import client from "./config/ApolloClient";
import io from "socket.io-client";
import { useState, useEffect } from "react";
import Hives from "./pages/Hives";
import NavBar from "./components/NavBar";

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

  const loggedIn = true;
  let routes;
  if (loggedIn) {
    routes = (
      <div className="flex flex-col h-screen">
        <NavBar />
        <div className="flex-grow">
          {" "}
          {/* Content area */}
          <Routes>
            <Route path="/" element={<Hives />} />{" "}
            <Route path="*" element={<Navigate to="/" />} />{" "}
          </Routes>
        </div>
      </div>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-in" element={<LandingPage />} />
        <Route path="/hives" element={<Navigate to="/" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  }

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>{routes}</BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
