// eslint-disable-next-line react/prop-types
function Footer({inputValue}){
    return (
        <>
        <div className="h-24 bg-slate-400">
        <p className="text-white px-5 py-5">{inputValue}</p>
        </div>
        </>
    )
}

export default Footer