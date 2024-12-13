/* eslint-disable react/jsx-key */

import { useState } from "react"

function ListFruits() {
    const [fruits, setFruits] = useState(["mango", "apple", "orange"]);
    const [newfruits, setnewFruits] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        setFruits([...fruits, newfruits])
    }
    function handleChange(e){
        setnewFruits(e.target.value)
    }
    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={handleChange} className="border border-blue-100" placeholder="Enter fruits Name" />
                    <button className="px-4 py-1 bg-slate-400 text-white rounded-lg">Add</button>
                </form>
                {fruits.map((fruit) => (
                    <div>{fruit}</div>
                ))}
            </div>
        </>
    )
}

export default ListFruits