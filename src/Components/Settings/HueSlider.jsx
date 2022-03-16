import React from "react"

const HueSlider = ({ changeSevenSegmentHue, H, text }) => {
  return (
    <>
      <p>{text}</p>
      <input
        type="range"
        name="hue"
        id="hue"
        min="0"
        max="360"
        value={H}
        onChange={e => changeSevenSegmentHue(e.target.value)}
      />
      <label className="lbl-hue-num" htmlFor="hue-num">
        {H}
      </label>
    </>
  )
}

export default HueSlider
