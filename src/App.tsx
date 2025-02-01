import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LandingPage from "./pages/Landing";
import { ApolloProvider } from "@apollo/client";
import client from "./config/ApolloClient";
import io from "socket.io-client";
import { useEffect } from "react";
import Hives from "./pages/Hives";
import NavBar from "./components/NavBar";
import { ToastContainer } from "react-toastify";
import Verification from "./pages/Landing/Verification";
import { useAuth } from "./hooks/useAuth";

function App() {
  const { isLoggedIn } = useAuth();

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
    });

    // Clean up the socket connection when the component is unmounted
    return () => {
      socket.disconnect();
    };
  }, []);

  let routes;
  if (isLoggedIn()) {
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
        <Route path="/verification" element={<Verification />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  }

  return (
    <ApolloProvider client={client}>
      <ToastContainer />
      <BrowserRouter>{routes}</BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
