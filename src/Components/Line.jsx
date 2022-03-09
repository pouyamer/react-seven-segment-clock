import React from "react"

const Line = ({ index, d, color }) => {
  return (
    <path style={{ stroke: color }} className={`line line${index}`} d={d} />
  )
}

export default Line
