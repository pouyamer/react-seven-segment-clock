import React from "react"

const ShowSecondsChange = ({
  showSeconds,
  toggleShowSeconds,
  partLanguage
}) => {
  return (
    <div className="settings-section ss-seconds">
      <h2>{partLanguage.label}:</h2>
      <input
        type="checkbox"
        name="seconds"
        id="seconds"
        checked={showSeconds}
        onChange={e => toggleShowSeconds(e.target.checked)}
      />
      <label htmlFor="seconds">{partLanguage.checkbox}</label>
    </div>
  )
}

export default ShowSecondsChange
