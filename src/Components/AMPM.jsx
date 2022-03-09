const AMPM = props => {
  const { type, ampm_state, clock_mode, on_color, off_color } = props

  const ONorOFF = (type, ampm_state, clock_mode) => {
    if (clock_mode === "24H") return false
    if (type === ampm_state) return true
  }

  return (
    <p
      style={{
        color: ONorOFF(type, ampm_state, clock_mode) ? on_color : off_color
      }}
      className={`AMPM ${type}`}
    >
      {type}
    </p>
  )
}

export default AMPM
