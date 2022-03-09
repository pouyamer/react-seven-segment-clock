const Segment = ({ name, points, on_off_state, on_color, off_color }) => {
  return (
    <polygon
      className={`segment ${name} ${on_off_state ? "on" : "off"}`}
      points={points}
      fill={on_off_state ? on_color : off_color}
    />
  )
}

export default Segment
