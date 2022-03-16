import React from "react"

const SettingsOpacity = ({ opacity, changeSettingsOpacity, partLanguage }) => {
  return (
    <div className="settings-section ss-opacity">
      <h2>{partLanguage.label}:</h2>
      <label htmlFor="opacity">{partLanguage.range}</label>
      <input
        type="range"
        name="opacity"
        id="opacity"
        min="0"
        max="100"
        value={opacity * 100}
        onChange={e => changeSettingsOpacity(e.target.value / 100)}
      />
      <label htmlFor="opacity">{Math.round(opacity * 100)}</label>
    </div>
  )
}

export default SettingsOpacity
