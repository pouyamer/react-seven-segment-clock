const reducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case "SET_TIME":
      return {
        ...state,
        sevenSegment: {
          ...state.sevenSegment,
          shownNumbers: payload
        }
      }

    case "CHANGE_BLINKING_STATE":
      return {
        ...state,
        colons: {
          ...state.colons,
          willBlink: payload
        }
      }

    case "CHANGE_SETTINGS_OPACITY":
      return {
        ...state,
        settings: {
          ...state.settings,
          opacity: payload
        }
      }

    case "CHANGE_SEVEN_SEGMENT_HUE":
      return {
        ...state,
        sevenSegment: {
          ...state.sevenSegment,
          color: {
            ...state.sevenSegment.color,
            H: payload
          }
        }
      }

    case "CHANGE_SEVEN_SEGMENT_SATURATION":
      return {
        ...state,
        sevenSegment: {
          ...state.sevenSegment,
          color: {
            ...state.sevenSegment.color,
            S: payload
          }
        }
      }

    case "CHANGE_SEVEN_SEGMENT_LIGHTNESS":
      return {
        ...state,
        sevenSegment: {
          ...state.sevenSegment,
          color: {
            ...state.sevenSegment.color,
            L: payload
          }
        }
      }

    case "SWITCH_MODE":
      return {
        ...state,
        mode: payload
      }

    case "TOGGLE_HAMBURGER":
      return {
        ...state,
        settings: {
          ...state.settings,
          open_state: !state.settings.open_state
        }
      }

    case "SWITCH_COLON_ON_STATE":
      return {
        ...state,
        colons: {
          ...state.colons,
          on_state: payload
        }
      }

    case "TOGGLE_SHOW_SECONDS":
      return {
        ...state,
        showSeconds: payload
      }

    case "SET_AMPM_STATE":
      return {
        ...state,
        ampm: {
          ...state.ampm,
          ampm_state: payload
        }
      }

    default:
      return state
  }
}

export default reducer
