import React from "react"

const Colon = ({ on_color, off_color, on_state }) => (
  <p
    className="colon"
    style={{
      color: on_state ? on_color : off_color
    }}
  >
    :
  </p>
)

export default Colon
