import MemeText from "./MemeText"

export default function MemePreview({ backgroundColor, border, textLines }) {
    return (
        <div className="preview" style={{ backgroundColor: backgroundColor }}>
            <div className="border" style={{ border: `10px solid ${border}` }} >
                {textLines.map((item, index) => (
                    <MemeText key={index} text={item.text} appearance={item.appearance}/>

                ))}
            </div>
        </div>
    )
}
