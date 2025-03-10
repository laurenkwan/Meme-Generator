export default function MemeText({ text, appearance }) {
    return (
        <p className="text-style" style={{ fontSize: `${appearance}px` }} >
            {text}
        </p>
    )
}
