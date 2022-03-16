import React from "react"

const LightnessSlider = ({ L, changeSevenSegmentLightness, text }) => {
  return (
    <>
      <br />
      <p>{text}</p>

      <input
        type="range"
        name="light"
        id="light"
        min="0"
        max="100"
        value={L}
        onChange={e => changeSevenSegmentLightness(e.target.value)}
      />
      <label className="lbl-light-num" htmlFor="light-num">
        {L}
      </label>
    </>
  )
}

export default LightnessSlider
