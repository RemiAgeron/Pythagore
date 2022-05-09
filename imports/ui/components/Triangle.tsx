import React from 'react'
import { sideValues, svg } from '/imports/constants/FormClass'

const Triangle = (values: sideValues): React.ReactElement => (
  <svg xmlns="http://www.w3.org/2000/svg" className={svg}>
    <g>

      <line id="A_side" y2="5.50399" x2="195.53094" y1="104.64175" x1="195.53094" stroke="currentColor" />
      <line id="B_side" y2="104.33713" x2="196.07515" y1="104.84733" x1="5.76925" stroke="currentColor" />
      <line id="C_ side" y2="5.28848" x2="195.09991" y1="104.85727" x1="5.8761" stroke="currentColor" />

      <line id="Rect_up" y2="94.33713" x2="195.09991" y1="94.33713" x1="185.09991" stroke="currentColor" />
      <line id="Rect_left" y2="94.33713" x2="185.09991" y1="104.33713" x1="185.09991" stroke="currentColor" />

      <text id="Text_A" xmlSpace="preserve" textAnchor="start" fontSize="24" y="64.30367" x="203.28955" strokeWidth="0" fill="currentColor" >{values.sideA || "A"}</text>
      <text id="Text_B" xmlSpace="preserve" textAnchor="middle" fontSize="24" y="131.13076" x="103.85337" strokeWidth="0" fill="currentColor">{values.sideB || "B"}</text>
      <text id="Text_C" xmlSpace="preserve" textAnchor="end" fontSize="24" y="47.7185" x="90.95425" strokeWidth="0" fill="currentColor">{values.sideC || "C"}</text>

    </g>
  </svg>
)

export default Triangle