import React from "react";
import react from "react";

export default function EventList({ events, handleClick, isSalesModal }) {
  return (
    <div>
      {events.map((event, index) => (
        <React.Fragment key={event.id}>
          <h1 style={{ color: isSalesModal ? "red" : "blue" }}>
            {index}- {event.title}
          </h1>
          <button onClick={() => handleClick(event.id)}>delete </button>
        </React.Fragment>
      ))}
    </div>
  );
}
