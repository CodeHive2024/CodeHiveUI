import Footer from "./Footer";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useLocation } from "react-router-dom";

const LandingPage = () => {
  const location = useLocation();

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {location.pathname === "/sign-in" ? <SignIn /> : <SignUp />}
      <Footer />
    </div>
  );
};

export default LandingPage;
