import React from "react"
import HueSlider from "./HueSlider"
import SaturationSlider from "./SaturationSlider"
import LightnessSlider from "./LightnessSlider"

const LedColor = ({
  H,
  S,
  L,
  changeSevenSegmentHue,
  changeSevenSegmentSaturation,
  changeSevenSegmentLightness
}) => {
  return (
    <div className="settings-section ss-hue">
      <h2>LED Color:</h2>
      <HueSlider H={H} changeSevenSegmentHue={changeSevenSegmentHue} />
      <SaturationSlider
        S={S}
        changeSevenSegmentSaturation={changeSevenSegmentSaturation}
      />
      <LightnessSlider
        L={L}
        changeSevenSegmentLightness={changeSevenSegmentLightness}
      />
    </div>
  )
}

export default LedColor
