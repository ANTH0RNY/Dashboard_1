// import EditDisplay from "../components/editDisplay";
import EventList from "../components/eventList";
import { UserDetail } from "../components/userDetail";
import roles from "../data/roles.json"
import users from "../data/users.json"
import events from "../data/events.json"
import types from "../data/eventTypes.json"
import status from "../data/eventStatus.json"
import "../scss/eventDetails.scss"
import { useEffect, useState } from "react";

export default function UserDetails() {
    const [organizedMode, setOrganizedMode] = useState(true)

    const user_details = {
        id: 1,
        userName: "hello",
        userEmail: "hello@gmail.com",
        role: {
            roleGroup: "Basic",
            id: 1
        }
    }

    function eventsAttendeed() {
        const count = 15
        const eventz = new Array()
        const preventDublicate = []
        let i = 0;
        while (i < count) {
            const index = Math.floor(Math.random() * 100)

            // console.log(preventDublicate.includes(index) + ` ${i}`)
            if (preventDublicate.includes(index)) {
                continue;
            }
            preventDublicate.push(index);
            eventz[i] = events[index]
            i++;
        }
        return eventz;
    }

    function eventsOrganized() {
        return events.filter(e => e.organizerId === 99935)
    }

    return (
        <div className="user-details">
            <UserDetail user={users.users.find(u => u.id == 99935) || user_details} roles={roles.roles} />
            <div className="toggle-event-list">
                <div className="toggler">
                    <button className={`btn ${organizedMode ? "" : "selected"}`} onClick={(_) => {
                        setOrganizedMode(false)

                    }}>Attended</button>
                    <button className={`btn ${organizedMode ? "selected" : ""}`}
                        onClick={(_) => {
                            setOrganizedMode(true)
                        }}
                    >Organized</button>
                    <div className="the-rest"></div>
                </div>
                <EventList events={organizedMode ? eventsOrganized() : eventsAttendeed()} types={types} status={status} />
            </div>
        </div>
    )
}