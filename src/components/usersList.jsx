import "../scss/userList.scss"
import { useRef, useState } from "react"
import EditDisplay from "./editDisplay"
import EditDisplayRole from "./editDisplayRole"

export default function UsersList({ users, roles }) {

    const [changeTracker, setChangeTracker] = useState([])
    const [discardController, setDiscardController] = useState(false)

    const handleCHange = (user, key) => {
        return function (value) {
            let changed = changeTracker.find((item) => item.id == user.id)
            let newChanges = []
            if (key !== "roleGroup") {
                if (changed) {
                    // console.log(changed)
                    changed = { ...changed, [key]: value }
                    newChanges = changeTracker.map((item) => {
                        if (item.id == user.id) {
                            return changed
                        }
                        return item
                    })
                }
                else {
                    changed = { id: user.id, [key]: value.trim() }
                    newChanges = [...changeTracker, changed]
                }
            } else {
                // console.log(key)
                if (changed) {
                    changed = { ...changed, role: { id: value, [key]: roles.find((e) => e.id == value).roleGroup } }
                    newChanges = changeTracker.map((item) => {
                        if (item.id == user.id) {
                            return changed
                        }
                        return item
                    })
                } else {
                    changed = { id: user.id, role: { id: value, [key]: roles.find((e) => e.id == value).roleGroup } }
                    newChanges = [...changeTracker, changed]
                }
            }
            // console.log(newChanges)
            setChangeTracker(newChanges)
        }
    }
    const handleSave = () => {

    }

    return (
        <div className="user-item">
            <table className="user-list">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => {
                        return (
                            <tr key={user.id} className="user-item">
                                {/* <td className="user-name">{user.userName}</td>
                                <td className="user-email">{user.userEmail}</td>
                                <td className="user-role">{user.role.roleGroup}</td> */}
                                <td className="user-name">
                                    <EditDisplay defaultValue={user.userName} handler={handleCHange(user, "userName")} discardController={discardController} />
                                </td>
                                <td className="user-email">
                                    <EditDisplay defaultValue={user.userEmail} handler={handleCHange(user, "userEmail")} discardController={discardController} />
                                </td>
                                <td className="user-role">
                                    {/* <EditDisplay defaultValue={user.role.roleGroup} handler={handleCHange(user, "roleGroup")} discardController={discardController}/> */}
                                    <EditDisplayRole role={user.role} roles={roles} handler={handleCHange(user, "roleGroup")} discardController={discardController} />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <hr />
            <div className="btns" >
                <button
                    className="save"
                    disabled={changeTracker.length <= 0}
                    onClick={(_) => { handleSave() }}
                >
                    Save Changes
                </button>
                <button
                    className="discard"
                    disabled={changeTracker.length <= 0}
                    onClick={(_) => {
                        setChangeTracker([])
                        // handleDiscard()
                        setDiscardController(!discardController)
                    }}
                >
                    Discard Changes
                </button>
            </div>
        </div>
    )
}