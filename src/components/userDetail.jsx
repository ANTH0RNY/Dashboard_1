import EditDisplay from "./editDisplay"
import EditDisplayRole from "./editDisplayRole"
import "../scss/userDetail.scss"

export function UserDetail({ user, roles }) {
    // console.log(roles)
    return (<>
        <div className="user-detail-form">
            <h2>
                User Details
            </h2>
            <div className="details">
                <EditDisplay defaultValue={user.userName} />
                <EditDisplay defaultValue={user.userEmail} />
                <EditDisplay defaultValue={"ChangePassword"} />
                <EditDisplayRole role={user.role} roles={roles} />
            </div>
        </div>
    </>
    )
}