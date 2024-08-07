import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "../scss/editEventForm.scss"

export default function EditEventForm({ event, types, status }) {
    return (
        <div className="edit-event-form">
            <span className="input-element">
                <label htmlFor="event-name">Event Name</label>
                <input type="text" id="event-name" />
            </span>
            <span className="input-element">
                <label htmlFor="starting-date">Starting date</label>
                <input type="datetime-local" id="starting-date" />
            </span>
            <span className="input-element">
                <label htmlFor="duration">Duration</label>
                <input type="number" id="duration" />
            </span>
            <span className="input-element">
                <label htmlFor="price">Price</label>
                <input type="number" step={0.01} id="price" />
            </span>
            <span className="input-element">
                <label htmlFor="capacity">Capacity</label>
                <input type="number" id="capacity" />
            </span>
            <span className="input-element">
                <label htmlFor="location-venue">Location Venue</label>
                <input type="text" id="location-venue" />
            </span>
            <span className="input-element">
                <label htmlFor="ticket-quantity">Ticket quantiy</label>
                <input type="text" id="ticket-quantity" />
            </span>
            <span className="input-element">
                <label htmlFor="organizer-id">Organizer id</label>
                <input type="text" id="organizer-id" />
            </span>
            <span className="input-element">
                <label htmlFor="description">Description</label>
                {/* <input type="text" /> */}
                <textarea id="description"></textarea>
            </span>
            <span className="input-element">
                <label htmlFor="schedule">Schedule</label>
                <textarea id="schedule"></textarea>
            </span>
            <span className="input-element">
                <label htmlFor="event-type">Choose event type</label>
                {/* <input type="text" /> */}
                <select id="event-type">
                    {types.map((type, idx) => <option key={idx} value={type}>{type}</option>)}
                </select>
            </span>
            <span className="input-element">
                <label htmlFor="event-status">Change event status</label>
                {/* <input type="text" /> */}
                <select id="event-status">
                    {status.map((statu, idx) => <option key={idx} value={statu}>{statu}</option>)}

                </select>
            </span>
        </div>
    );
}
