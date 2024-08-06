import EditDisplay from "../components/editDisplay";
import EventList from "../components/eventList";
import { UserDetail } from "../components/userDetail";
import roles from "../data/roles.json"
import users from "../data/users.json"
import events from "../data/events.json"
import types from "../data/eventTypes.json"
import status from "../data/eventStatus.json"

export default function UserDetails() {
    const user_details={
        id: 1,
        userName:"hello",
        userEmail: "hello@gmail.com",
        role:{
            roleGroup:"Basic",
            id: 1
        }
    }
    return (
        <div className="user-details">
            <UserDetail user={users.users.find(u=>u.id == 99935) || user_details} roles={roles.roles}/>
            <EventList events={events.filter(e=> e.organizerId === 99935)} types={types} status={status}/>
        </div>
    )
}