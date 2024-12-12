// eslint-disable-next-line react-refresh/only-export-components
import { useState } from "react";
function LoginData() {
    const [inputUsername, setUsername] = useState("--space")

    function handleSubmit(e) {
        e.preventDefault()
        console.log(inputUsername)
        setUsername(e.target.value)

    }
    function handleChange(e) {
        setUsername(e.target.value)

    }
    // console.log(inputUsername)
    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        onChange={handleChange}
                        placeholder="Enter Your Username"
                        className="text-sm mx-5 my-5 px-2 py-1 border border-black rounded-sm"
                    />
                    {/* <input
                        type="password"
                        onChange={handleChange}
                        placeholder="Enter Your Password"
                        className="text-sm mx-5 my-5 px-2 py-1 border border-black rounded-sm"
                    /> */}
                    <button className="px-4 py-1 bg-slate-400 text-white rounded-lg">
                        Login
                    </button>
                </form>
                <p>{inputUsername}</p>
            </div>
        </>
    );
}

export default LoginData;
