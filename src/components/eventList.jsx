import Search from "./search.jsx"

export default function EventList({ events, types, status }) {
    return (
        <div className="event-list">
            <div className="event-search">
                <Search />
            </div>
            <div className="select-btns">
                <div className="types">
                    {
                        types.map((type, index) => {
                            return (<button className="btn btn-type" key={index}>
                                {type}
                            </button>)
                        })
                    }
                </div>
                <div className="status">
                    {
                        status.map((statu, index) => {
                            return (
                                <button key={index} className="btn btn-status">
                                    {statu}
                                </button>
                            )
                        })
                    }
                </div>
            </div>
            <table className="event-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Duration</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        events.map((event)=>{
                    return( <tr key={event.id}>
                                <td>{event.id}</td>
                                <td>{event.eventName}</td>
                                <td>{ new Date(event.startDateTime).toLocaleDateString() +" " + new Date(event.startDateTime).toLocaleTimeString()}</td>
                                <td>{event.duration}</td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}