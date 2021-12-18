import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PauseButton from "./PauseButton";
import PlayButton from "./PlayButton";
import SettingsButton from "./SettingsButton";
import { useContext } from "react";
import SettingsContext from "./SettingsContext";

const percentage = 60;
const red = "#F5605B";
const green = "#D5D066";

const Timer = () => {
  const settingsInfo = useContext(SettingsContext);
  return (
    <div>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: "#fff",
          pathColor: red,
          trailColor: "rgba(255,255,255,0.2",
        })}
      />
      <div style={{ marginTop: "2rem" }}>
        <PlayButton />
        <PauseButton />
      </div>
      <div style={{ marginTop: "2rem" }}>
        <SettingsButton onClick={() => settingsInfo.setShowSettings(true)} />
      </div>
    </div>
  );
};

export default Timer;
