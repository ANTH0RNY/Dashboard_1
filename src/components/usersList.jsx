import "../scss/userList.scss"
export default function UsersList({ users }) {
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
                                <td className="user-name">{user.userName}</td>
                                <td className="user-email">{user.userEmail}</td>
                                <td className="user-role">{user.role.roleGroup}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}