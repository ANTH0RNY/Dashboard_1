import SearchIcon from '@mui/icons-material/Search';
import "../scss/search.scss"
import { useEffect, useRef, useState } from 'react';

export default function Search({ handler = () => { } }) {
    const [value, setValue] = useState("")

    const input = useRef(null)
    function handleIconClick() {
        if (input.current) {
            input.current.focus();
        }
    }
    function handleCrossClick() {
        setValue("")
        input.current.focus();
    }
    useEffect(() => {
        const val = handler(value);
        // setValue(val || value)
    }, [value])
    return (
        <div className='search'>
            <SearchIcon className='icon' onClick={(_) => { handleIconClick() }} />
            <input type="text"
                className='input'
                placeholder='Search'
                ref={input}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value)
                }}
            />
            <span className='cross' onClick={(_) => {
                handleCrossClick()
            }}>&#10005;</span>
        </div>
    )
}