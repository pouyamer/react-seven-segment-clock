import React from "react"

const ColonsBlinkChange = ({ willBlink, changeBlinkingState }) => {
  return (
    <div className="settings-section ss-blink">
      <h2>Colons Blinking:</h2>
      <input
        type="checkbox"
        name="blink"
        id="blink"
        checked={willBlink}
        onChange={e => changeBlinkingState(e.target.checked)}
      />
      <label htmlFor="blink">Blinking</label>
    </div>
  )
}

export default ColonsBlinkChange
