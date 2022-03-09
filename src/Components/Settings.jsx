import React from "react"

import TwentyFourHours from "./Settings/TwentyFourHours"
import Languages from "./Settings/Languages"
import SettingsOpacity from "./Settings/SettingsOpacity"
import LedColor from "./Settings/LedColor"
import ColonsBlinkChange from "./Settings/ColonsBlinkChange"
import ShowSecondsChange from "./Settings/ShowSecondsChange"
import SevenSegment from "./SevenSegment"

const Settings = ({ open_state, hslaStringify, bgColor, state, dispatch }) => {
  const changeMode = mode => {
    dispatch({ type: "SWITCH_MODE", payload: mode })
  }

  const changeSettingsOpacity = opacity => {
    dispatch({
      type: "CHANGE_SETTINGS_OPACITY",
      payload: opacity
    })
  }

  const changeSevenSegmentHue = hue => {
    dispatch({
      type: "CHANGE_SEVEN_SEGMENT_HUE",
      payload: hue
    })
  }

  const changeSevenSegmentSaturation = saturation => {
    dispatch({
      type: "CHANGE_SEVEN_SEGMENT_SATURATION",
      payload: saturation
    })
  }

  const changeSevenSegmentLightness = lightness => {
    dispatch({
      type: "CHANGE_SEVEN_SEGMENT_LIGHTNESS",
      payload: lightness
    })
  }

  const changeBlinkingState = state => {
    dispatch({
      type: "CHANGE_BLINKING_STATE",
      payload: state
    })
    console.log(state)
  }

  const toggleShowSeconds = state => {
    dispatch({
      type: "TOGGLE_SHOW_SECONDS",
      payload: state
    })
  }

  return (
    <article
      className={`settings ${open_state ? "open" : "closed"}`}
      style={{
        backgroundColor: hslaStringify(
          state.sevenSegment.color.H,
          state.sevenSegment.color.S,
          state.sevenSegment.color.L,
          state.settings.opacity
        )
      }}
    >
      <div className="settings-container">
        <form className="settings-form" action="#">
          <TwentyFourHours mode={state.mode} changeMode={changeMode} />
          <Languages />
          <SettingsOpacity
            opacity={state.settings.opacity}
            changeSettingsOpacity={changeSettingsOpacity}
          />
          <LedColor
            H={state.sevenSegment.color.H}
            S={state.sevenSegment.color.S}
            L={state.sevenSegment.color.L}
            changeSevenSegmentHue={changeSevenSegmentHue}
            changeSevenSegmentSaturation={changeSevenSegmentSaturation}
            changeSevenSegmentLightness={changeSevenSegmentLightness}
          />
          <ColonsBlinkChange
            willBlink={state.colons.willBlink}
            changeBlinkingState={changeBlinkingState}
          />
          <ShowSecondsChange
            showSeconds={state.showSeconds}
            toggleShowSeconds={toggleShowSeconds}
          />
        </form>
      </div>
    </article>
  )
}

export default Settings
