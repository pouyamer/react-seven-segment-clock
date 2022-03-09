import React from "react"

const ShowSecondsChange = ({ showSeconds, toggleShowSeconds }) => {
  return (
    <div className="settings-section ss-seconds">
      <h2>Show Seconds:</h2>
      <input
        type="checkbox"
        name="seconds"
        id="seconds"
        checked={showSeconds}
        onChange={e => toggleShowSeconds(e.target.checked)}
      />
      <label htmlFor="seconds">Show</label>
    </div>
  )
}

export default ShowSecondsChange
