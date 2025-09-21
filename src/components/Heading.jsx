
function Heading(props) {
    return (
        <>
        <h2 className={`text-4xl font-medium text-[#4d4d4d] ${props.align} mt-10`}>
            {props.text}
        </h2>
        </>
    )
}

export default Heading
