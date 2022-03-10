import logo from "./logo.svg"
import "./App.css"
import { useEffect, useReducer } from "react"
import reducer from "./reducer"

import SevenSegment from "./Components/SevenSegment"
import Colon from "./Components/Colon"
import AMPM from "./Components/AMPM"
import HamburgerButton from "./Components/HamburgerButton"
import Settings from "./Components/Settings"

const hslaStringify = (H, S, L, A = 1) => `hsla(${H}, ${S}%, ${L}%, ${A})`

const INITIAL_STATE = {
  sevenSegment: {
    size: {
      width: 192,
      height: 300
    },
    color: {
      H: 110,
      S: 90,
      L: 75,
      A_ON: 0.95,
      A_OFF: 0.05
    },
    // first we want to show the 00:00:00 time
    shownNumbers: ["0", "0", "0", "0", "0", "0"]
  },
  backgroundLightness: 2.5, // from 0 to 100

  ampm: {
    ampm_state: "AM" // AM or PM
  },
  mode: "12H", // 24H or 12H
  colonsBlink: true, // if true, the colons will blink
  showSeconds: true, // if true, the seconds will be shown
  settings: {
    open_state: false,
    opacity: 0.5
  },
  colons: {
    on_state: true,
    willBlink: true
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  const bgColor = {
    H: state.sevenSegment.color.H,
    S: state.sevenSegment.color.S,
    L: state.backgroundLightness
  }

  const on_color = hslaStringify(
    state.sevenSegment.color.H,
    state.sevenSegment.color.S,
    state.sevenSegment.color.L,
    state.sevenSegment.color.A_ON
  )

  const off_color = hslaStringify(
    state.sevenSegment.color.H,
    state.sevenSegment.color.S,
    state.sevenSegment.color.L,
    state.sevenSegment.color.A_OFF
  )

  const ampmDeterminer = hour24 => {
    if (hour24 >= 0 && hour24 < 12) return "AM"
    if (hour24 >= 12 && hour24 < 24) return "PM"
  }

  const to12Hours = hour => {
    if (hour === 0) return `12`
    if (hour > 0 && hour < 10) return ` ${hour}`
    if (hour >= 10 && hour <= 12) return `${hour}`
    if (hour > 12 && hour < 22) return ` ${hour - 12}`
    if (hour >= 22) return `${hour - 12}`
    return `${hour}`
  }

  const to2Digits = num => (num < 10 ? `0${num}` : num.toString())

  const toggleSettings = () => {
    dispatch({ type: "TOGGLE_HAMBURGER" })
  }

  useEffect(() => {
    // Blink the colons
    let miliseconds = new Date().getMilliseconds()
    const blinkInterval = setInterval(() => {
      if (state.colons.willBlink) {
        if (miliseconds > 0 && miliseconds < 500 && state.colons.willBlink) {
          dispatch({ type: "SWITCH_COLON_ON_STATE", payload: true })
        } else {
          dispatch({ type: "SWITCH_COLON_ON_STATE", payload: false })
        }
      }
      miliseconds = new Date().getMilliseconds()
    }, 50)

    if (!state.colons.willBlink) {
      clearInterval(blinkInterval)
      dispatch({ type: "SWITCH_COLON_ON_STATE", payload: true })
    }

    // Set the time
    const int = setInterval(() => {
      const now = new Date()

      const hours = now.getHours()
      const minutes = now.getMinutes()
      const seconds = now.getSeconds()

      const hour24String = to2Digits(hours)
      const hours12String = to12Hours(hours)
      const hourString = state.mode === "24H" ? hour24String : hours12String

      const minuteString = to2Digits(minutes)
      const secondString = to2Digits(seconds)

      const shownNumbers = [
        hourString[0],
        hourString[1],
        minuteString[0],
        minuteString[1],
        secondString[0],
        secondString[1]
      ]

      dispatch({ type: "SET_TIME", payload: shownNumbers })
      dispatch({
        type: "SET_AMPM_STATE",
        payload: ampmDeterminer(parseInt(hour24String))
      })
    }, 1)
    return () => {
      clearInterval(int)
      clearInterval(blinkInterval)
    }
  }, [state.mode, state.colons.willBlink])

  return (
    <main
      style={{
        backgroundColor: hslaStringify(bgColor.H, bgColor.S, bgColor.L)
      }}
    >
      <Settings
        open_state={state.settings.open_state}
        hslaStringify={hslaStringify}
        state={state}
        dispatch={dispatch}
      />

      <article className="container">
        <HamburgerButton
          open_state={state.settings.open_state}
          on_color={on_color}
          off_color={off_color}
          handleClick={toggleSettings}
        />
        <div className="time-container">
          {/* it should add colons after 2 of Seven Segments */}
          {state.sevenSegment.shownNumbers.map((number, index) => {
            return (
              <>
                {((index < 4 && !state.showSeconds) || state.showSeconds) && (
                  <SevenSegment
                    key={index}
                    index={index}
                    sevenSegmentCharacter={number}
                    size={state.sevenSegment.size}
                    on_color={on_color}
                    off_color={off_color}
                    bgColor={hslaStringify(bgColor.H, bgColor.S, bgColor.L)}
                  />
                )}

                {(index === 1 || (index === 3 && state.showSeconds)) && (
                  <Colon
                    key={index + "C"}
                    on_state={state.colons.on_state}
                    on_color={on_color}
                    off_color={off_color}
                  />
                )}
              </>
            )
          })}

          <AMPM
            type="AM"
            ampm_state={state.ampm.ampm_state}
            clock_mode={state.mode}
            on_color={on_color}
            off_color={off_color}
          />
          <AMPM
            type="PM"
            ampm_state={state.ampm.ampm_state}
            clock_mode={state.mode}
            on_color={on_color}
            off_color={off_color}
          />
        </div>
      </article>
    </main>
  )
}

export default App

{
  // TODO: Add rainbow colors functions for font and background
  // TODO: Add option to light up the led background according to the time : day/night
  // TODO: Add shadows (glow) to segments
  // TODO: Add option to change language
  // TODO: Scale the app into React
  // TODO: Add a logo to the project
  // TODO: Make the transformed hamburger button more contrastive
  // TODO: Add a readme file
  //============================================================
  // TODO: Add 24/12h option -- done
  // TODO: Handle the responsive -- done
  // TODO: Add an option to light up the colons with each second -- done
  // TODO: Add an option to hide seconds -- done
  // TODO: Add option for settings opacity -- done
  // TODO: Slider for HUE -- done
  // FIXME: fix the zeroes in the hours, minutes and seconds -- done
  // TODO: Add Option to change saturation and Lightness -- done
}
