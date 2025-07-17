import React from 'react'
import { FiSearch } from 'react-icons/fi'

function Search(props) {
    const { search, setSearch, placeholder } = props
    return (
        <div className="relative">
            <input value={search} onChange={(e) => { setSearch(e.target.value) }} placeholder={placeholder} className="pl-8 py-2 border border-gray-300 rounded-xl w-[300px] focus:outline-none focus:shadow-[0px_0px_12px_0px_rgba(15,22,28,0.06)] focus:border-[#bac9ca]" type="text" />
            <div className="absolute top-[10px] left-2"><FiSearch className="text-gray-500 text-xl" /> </div>
        </div>
    )
}

export default Search