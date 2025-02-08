import NotificationBell from "../NotificationBell";
import pfp from "../../assets/picture_1.png"; // Import the image
import { Link } from "react-router-dom";

const Options = () => {
  return (
    <div className="flex ml-6 gap-[10px]">
      <Link to="/">Home</Link>
      <NotificationBell />
      <img src={pfp} className="rounded-full" />
    </div>
  );
};

export default Options;
