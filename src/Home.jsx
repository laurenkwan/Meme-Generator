import { useState } from "react"
import MemePreview from "./components/MemePreview"
import MemeTextEditor from "./components/MemeTextEditor"

export default function Home() {
  const [color, setColor] = useState(
    {
      background: "#98FB98",
      border: "#0000FF"
    }
  )

  const [firstLine, setFirstLine] = useState(
    {
      text: "I'm running perfectly!",
      appearance: 30
    }
  )

  const [secondLine, setSecondLine] = useState(
    {
      text: "Five minutes later:",
      appearance: 30
    }
  )
  const [thirdLine, setThirdLine] = useState(
    {
      text: "404 Not Found.",
      appearance: 30
    }
  )

  const lines = [firstLine, secondLine, thirdLine]

  return (
    <div className="preview-container">
      <MemePreview backgroundColor={color.background} border={color.border} textLines={lines} />

      <div className="inputs">

        <MemeTextEditor memeTextData={firstLine} onMemeTextDataChange={setFirstLine} />
        <MemeTextEditor memeTextData={secondLine} onMemeTextDataChange={setSecondLine} />
        <MemeTextEditor memeTextData={thirdLine} onMemeTextDataChange={setThirdLine} />


        <div className="bg-border-inputs">
          <div className="color-input-group">
            <label className="color-label">Background Color:</label>
            <input className="box" type="color"
              value={color.background}
              onChange={e => setColor(v => ({
                ...v,
                background: e.target.value
              }))}
            />
          </div>

          <div className="color-input-group">
            <label className="color-label">Border Color:</label>
            <input className="box" type="color"
              value={color.border}
              onChange={e => setColor(v => ({
                ...v,
                border: e.target.value
              }))}
            />
          </div>
        </div>

      </div>
    </div>
  )
}
