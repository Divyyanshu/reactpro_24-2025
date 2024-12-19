import { useState } from "react"

const LoginData = () => {
  const [userName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  console.log(userName, Password)
  const [userData, setUserData] = useState({});
  console.log(setUserData)
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({
      Password,
      userName
    })
  }
  const HandleChangeUserName = (e) => {
      setUserName(e.target.value)
  }
  const HandleChangePassword = (e) => {
      setPassword(e.target.value)
  }
  return (
    <>
      <div className="p-10 m-10 bg-blue-400 w-1/3 flex flex-col">
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={HandleChangeUserName} placeholder="Enter your UserName" className="mb-6 px-5 py-2 border border-black rounded-lg "/>
          <input type="text" onChange={HandleChangePassword} placeholder="Enter your Password" className="px-5 py-2 border border-black rounded-lg "/>
          <button type="submit" className="border border-black px-10 py-1 rounded-md bg-white font-semibold flex mt-5">Login</button>
        </form>
      </div>
      <div className="p-10 m-2 bg-red-400 w-2/3">
        <p>{JSON.stringify(userData)}</p>
      </div>
    </>
  )
}
export default LoginData