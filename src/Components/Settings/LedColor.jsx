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
  changeSevenSegmentLightness,
  partLanguage
}) => {
  return (
    <div className="settings-section ss-hue">
      <h2>{partLanguage.label}:</h2>
      <HueSlider
        H={H}
        changeSevenSegmentHue={changeSevenSegmentHue}
        text={partLanguage.ranges[0]}
      />
      <SaturationSlider
        S={S}
        changeSevenSegmentSaturation={changeSevenSegmentSaturation}
        text={partLanguage.ranges[1]}
      />
      <LightnessSlider
        L={L}
        changeSevenSegmentLightness={changeSevenSegmentLightness}
        text={partLanguage.ranges[2]}
      />
    </div>
  )
}

export default LedColor
