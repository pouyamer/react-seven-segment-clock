import React from "react"

const ColonsBlinkChange = ({
  willBlink,
  changeBlinkingState,
  partLanguage
}) => {
  return (
    <div className="settings-section ss-blink">
      <h2>{partLanguage.label}:</h2>
      <input
        type="checkbox"
        name="blink"
        id="blink"
        checked={willBlink}
        onChange={e => changeBlinkingState(e.target.checked)}
      />
      <label htmlFor="blink">{partLanguage.checkbox}</label>
    </div>
  )
}

export default ColonsBlinkChange
