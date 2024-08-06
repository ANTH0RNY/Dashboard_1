import Search from "./search.jsx"
import "../scss/eventList.scss"
import { useEffect, useState } from "react"

export default function EventList({ events, types, status }) {
    const [eventList, setEventList] = useState(events);
    useEffect(() => {
        setEventList(events)
    }, [events])
    const filterType = (type) => {
        if (type === "All") {
            setEventList(events)
            return
        }
        const list = events.filter((event) => event.eventType == type)
        setEventList(list)
    }
    const filterStatus = (status) => {
        if (status === "All") {
            setEventList(events)
            return
        }
        const list = events.filter((event) => event.status === status)
        setEventList(list);
    }

    const handleSearch = (value) => {
        if (value !== null) {
            const searchString = value.toLowerCase()
            const searchresult = events
                .filter((event) => event.eventName
                    .toLowerCase().includes(searchString))
            setEventList(searchresult)
            // console.log(searchresult)
        }
    }

    return (
        <div className="event-list">
            <div className="event-search">
                <Search handler={handleSearch} />
            </div>
            <hr />
            <div className="select-btns">
                <div className="types">
                    <h4>Types</h4>
                    <div className="btns">
                        <button className="btn btn-type" onClick={(_) => filterType("All")}>All</button>
                        {
                            types.map((type, index) => {
                                return (<button className="btn btn-type" key={index} onClick={(_) => filterType(type)}>
                                    {type}
                                </button>)
                            })
                        }
                    </div>
                </div>
                <div className="status">
                    <h4>Status</h4>
                    <div className="btns">
                        <button className="btn btn-status" onClick={(_) => filterStatus("All")}>All</button>
                        {
                            status.map((statu, index) => {
                                return (
                                    <button key={index} className="btn btn-status" onClick={(_) => filterStatus(statu)}>
                                        {statu}
                                    </button>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <table className="event-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Duration</th>
                        <th>Event Type</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        eventList.map((event) => {
                            return (<tr key={event.id} className="event-item">
                                <td>{event.id}</td>
                                <td>{event.eventName}</td>
                                <td>{new Date(event.startDateTime).toLocaleDateString() + " " + new Date(event.startDateTime).toLocaleTimeString()}</td>
                                <td>{event.duration}</td>
                                <td>{event.eventType}</td>
                                <td>{event.status}</td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}