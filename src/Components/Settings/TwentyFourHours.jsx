import React from "react"

const TwentyFourHours = ({ mode, changeMode, partLanguage }) => {
  return (
    <div className="settings-section ss-24h">
      <h2>{partLanguage.label}</h2>
      <input
        type="checkbox"
        id="24H"
        name="24H"
        checked={mode === "24H"}
        onChange={e => changeMode(e.target.checked ? "24H" : "12H")}
      />
      <label htmlFor="toggle24">{partLanguage.checkbox}</label>
    </div>
  )
}

export default TwentyFourHours
