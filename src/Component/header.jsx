// eslint-disable-next-line react/prop-types
const Header = ({setInputValue}) => {
    const handleChange = (e) =>{
        setInputValue(e.target.value)
      }
    return (
        <div className="h-16 bg-gray-200">
            <input type="text" onChange={handleChange} className="mx-5 my-5 px-2 py-1 border border-sky-500" placeholder="type" />
        </div>
    )
}

export default Header