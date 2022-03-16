import React from "react"

const SaturationSlider = ({ S, changeSevenSegmentSaturation, text }) => {
  return (
    <>
      <br />
      <p>{text}</p>

      <input
        type="range"
        name="sat"
        id="sat"
        min="0"
        max="100"
        value={S}
        onChange={e => changeSevenSegmentSaturation(e.target.value)}
      />
      <label className="lbl-sat-num" htmlFor="sat-num">
        {S}
      </label>
    </>
  )
}

export default SaturationSlider
