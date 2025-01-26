import NotificationBell from "../NotificationBell";
import pfp from "../../assets/picture_1.png"; // Import the image

const Options = () => {
  return (
    <div className="flex ml-6 gap-[10px]">
      <NotificationBell />
      <img src={pfp} className="rounded-full" />
    </div>
  );
};

export default Options;
