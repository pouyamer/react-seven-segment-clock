import React from "react"
import Line from "./Line"

const HamburgerButton = ({ handleClick, open_state, on_color, off_color }) => {
  const lines = [
    {
      index: 1,
      d: "M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
    },
    {
      index: 2,
      d: "M 20,50 H 80"
    },
    {
      index: 3,
      d: "M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
    }
  ]

  const lineColor = !open_state ? on_color : off_color

  return (
    <button className="hamburger-toggle">
      <div
        id="hamburger"
        className={open_state ? "open" : "closed"}
        onClick={handleClick}
      >
        <svg viewBox="0 0 100 100">
          {lines.map(line => (
            <Line
              key={line.index + "L"}
              index={line.index}
              d={line.d}
              color={lineColor}
            />
          ))}
        </svg>
      </div>
    </button>
  )
}

export default HamburgerButton
