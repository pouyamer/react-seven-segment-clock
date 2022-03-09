import Segment from "./Segment"

const SevenSegment = ({
  index,
  size,
  sevenSegmentCharacter,
  on_color,
  off_color,
  bgColor
}) => {
  // character can be 0 - 9

  const determineOnOffFromCharacter = sevenSegmentCharacter => {
    switch (sevenSegmentCharacter) {
      case "0":
        return [true, true, true, true, true, true, false]
      case "1":
        return [false, true, true, false, false, false, false]
      case "2":
        return [true, true, false, true, true, false, true]
      case "3":
        return [true, true, true, true, false, false, true]
      case "4":
        return [false, true, true, false, false, true, true]
      case "5":
        return [true, false, true, true, false, true, true]
      case "6":
        return [true, false, true, true, true, true, true]
      case "7":
        return [true, true, true, false, false, false, false]
      case "8":
        return [true, true, true, true, true, true, true]
      case "9":
        return [true, true, true, true, false, true, true]
      default:
        return [false, false, false, false, false, false, false]
    }
  }

  const on_off_array = determineOnOffFromCharacter(sevenSegmentCharacter)

  const { width, height } = size

  const segments = [
    {
      name: "a",
      points: "1, 1  2, 0  8, 0  9, 1  8, 2  2, 2",
      on_off_state: on_off_array[0]
    },
    {
      name: "b",
      points: "9, 1 10, 2 10, 8  9, 9  8, 8  8, 2",
      on_off_state: on_off_array[1]
    },
    {
      name: "c",
      points: "9, 9 10,10 10,16  9,17  8,16  8,10",
      on_off_state: on_off_array[2]
    },
    {
      name: "d",
      points: "9,17  8,18  2,18  1,17  2,16  8,16",
      on_off_state: on_off_array[3]
    },
    {
      name: "e",
      points: "1,17  0,16  0,10  1, 9  2,10  2,16",
      on_off_state: on_off_array[4]
    },
    {
      name: "f",
      points: "1, 9  0, 8  0, 2  1, 1  2, 2  2, 8",
      on_off_state: on_off_array[5]
    },
    {
      name: "g",
      points: "1, 9  2, 8  8, 8  9, 9  8,10  2,10",
      on_off_state: on_off_array[6]
    }
  ]

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${width}px`}
      height={`${height}px`}
      viewBox="-1 -1 12 20"
      className={`seven-segment-${index}`}
    >
      <g className="abcdefg" style={{ stroke: bgColor }}>
        {segments.map((segment, i) => (
          <Segment
            key={i}
            name={segment.name}
            points={segment.points}
            on_off_state={on_off_array[i]}
            on_color={on_color}
            off_color={off_color}
          />
        ))}
      </g>
    </svg>
  )
}
export default SevenSegment
