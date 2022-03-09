import React from "react"

const TwentyFourHours = ({ mode, changeMode }) => {
  return (
    <div className="settings-section ss-24h">
      <h2>24Hours/12Hours</h2>
      <input
        type="checkbox"
        id="24H"
        name="24H"
        checked={mode === "24H"}
        onChange={e => changeMode(e.target.checked ? "24H" : "12H")}
      />
      <label htmlFor="toggle24">24-hour</label>
    </div>
  )
}

export default TwentyFourHours
