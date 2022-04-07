import React from "react";
import react from "react";

export default function EventList({ events, handleClick }) {
  return (
    <div>
      {events.map((event, index) => (
        <React.Fragment key={event.id}>
          <h1>
            {index}- {event.title}
          </h1>
          <button onClick={() => handleClick(event.id)}>delete </button>
        </React.Fragment>
      ))}
    </div>
  );
}
