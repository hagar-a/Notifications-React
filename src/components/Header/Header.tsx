import { Headset } from "lucide-react";
import { Wifi } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { MoveLeft } from "lucide-react";

function Header() {
  return (
    <>
      <span>23 : 45</span>
      <span style={{ float: "right" }}>
        <Headset />
        <Wifi />
        <BatteryCharging />
      </span>
      <div style={{marginTop:'3px'}}>
        <MoveLeft />
        <span style={{
          position: "absolute",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          width: "100%"
        }}>
          Notifications
        </span>
      </div>
    </>
  );
}

export default Header;
