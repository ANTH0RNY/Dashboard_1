// import roles from "../data/roles.json"
import "../scss/rolesBtnList.scss"
export default function RolesBtnList({ roles, handler = () => { } }) {
    return (
        <div className="roles-btn-list">
            <button
                className={`btn`.toLocaleLowerCase()}
                onClick={(_) => { handler({ roleGroup: "" }) }}>
                All
            </button>
            {
                roles.map((role) => {
                    return (
                        <button key={role.id}
                            className={`btn ${role.roleGroup}`.toLocaleLowerCase()}
                            onClick={(_) => { handler(role) }}
                        >
                            {role.roleGroup}
                        </button>
                    )
                })
            }
        </div>
    )
}