import React from "react"

import TwentyFourHours from "./Settings/TwentyFourHours"
import Languages from "./Settings/Languages"
import SettingsOpacity from "./Settings/SettingsOpacity"
import LedColor from "./Settings/LedColor"
import ColonsBlinkChange from "./Settings/ColonsBlinkChange"
import ShowSecondsChange from "./Settings/ShowSecondsChange"

// import languages
import enUS from "../Localization/en-US"
import faIR from "../Localization/fa-IR"

const Settings = ({ open_state, hslaStringify, bgColor, state, dispatch }) => {
  const changeMode = mode => {
    dispatch({ type: "SWITCH_MODE", payload: mode })
  }

  const changeLanguage = language => {
    dispatch({ type: "CHANGE_LANGUAGE", payload: language })
    console.log("language changed to: ", language)
  }

  const determineLanguage = language => {
    switch (language) {
      case "en-US":
        return enUS
      case "fa-IR":
        return faIR
      default:
        return enUS
    }
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
          <TwentyFourHours
            mode={state.mode}
            changeMode={changeMode}
            // partLanguage is a part of language that we use in the current component
            partLanguage={
              determineLanguage(state.language).settings.twentyFourHours
            }
          />
          <Languages
            partLanguage={determineLanguage(state.language).settings.languages}
            changeLanguage={changeLanguage}
            language={state.language}
          />
          <SettingsOpacity
            opacity={state.settings.opacity}
            changeSettingsOpacity={changeSettingsOpacity}
            partLanguage={
              determineLanguage(state.language).settings.settingsOpacity
            }
          />
          <LedColor
            H={state.sevenSegment.color.H}
            S={state.sevenSegment.color.S}
            L={state.sevenSegment.color.L}
            changeSevenSegmentHue={changeSevenSegmentHue}
            changeSevenSegmentSaturation={changeSevenSegmentSaturation}
            changeSevenSegmentLightness={changeSevenSegmentLightness}
            partLanguage={determineLanguage(state.language).settings.ledColor}
          />
          <ColonsBlinkChange
            willBlink={state.colons.willBlink}
            changeBlinkingState={changeBlinkingState}
            partLanguage={
              determineLanguage(state.language).settings.colonsBlinking
            }
          />
          <ShowSecondsChange
            showSeconds={state.showSeconds}
            toggleShowSeconds={toggleShowSeconds}
            partLanguage={
              determineLanguage(state.language).settings.showSeconds
            }
          />
        </form>
      </div>
    </article>
  )
}

export default Settings
