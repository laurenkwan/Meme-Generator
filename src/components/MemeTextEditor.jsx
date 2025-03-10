export default function MemeTextEditor({ onMemeTextDataChange, memeTextData}) {
    return (
        <div className="edit-text">
            <label className="text-input">Text:
                <input className="text-box" type="text"
                    value={memeTextData.text}
                    onChange={e => onMemeTextDataChange(v => ({
                        ...v,
                        text: e.target.value
                      }))}
                />
            </label>
            <label>Font Size:
                <input className="font-box" type="number"
                    value={memeTextData.appearance}
                    onChange={e => onMemeTextDataChange(v => ({
                        ...v,
                        appearance: e.target.value
                      }))}
                />
            </label>
        </div>
    )
}
