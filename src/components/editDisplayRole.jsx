import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

import { useEffect, useState } from "react";
import "../scss/edit-display-role.scss"

export default function EditDisplayRole({ role, roles, handler = () => { }, discardController = null }) {
    const [editMode, setEditMode] = useState(false)
    const [value, setValue] = useState(role.id)
    // console.log(role)
    const handleCrossClick = () => {
        setValue(role.id)
        setEditMode(false)
    }
    const handleSaveClick = () => {
        // if (role.id == value) return
        handler(value)
        setEditMode(false)
    }
    useEffect(() => {
        setValue(role.id)
    }, [discardController])

    return (
        <div className="edit-display-role">
            {
                !editMode
                    ? (<>
                        <p className="display">
                            {
                                roles.find((r) => r.id == value).roleGroup
                            }
                        </p>
                        <EditIcon fontSize='small' onClick={(_) => { setEditMode(true) }} />
                    </>)

                    : <>
                        <select name="role" value={value}
                            onChange={e => setValue(e.target.value)}
                        >
                            {
                                roles.map((r) =>
                                    <option value={r.id} key={r.id}>
                                        {r.roleGroup}
                                    </option>)
                            }
                        </select>
                        <span className='cross' onClick={(_) => handleCrossClick()}>
                            &#10005;
                        </span>
                        <SaveIcon fontSize={"small"} className='icon' onClick={(_) => { handleSaveClick() }} />
                    </>
            }
        </div>
    )
}