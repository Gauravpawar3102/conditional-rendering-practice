import { useState } from "react";
import EventList from "./EventList";

function App() {
  const [showEvents, setShowEvents] = useState(true);

  const [events, setEvents] = useState([
    { title: " chintu's birthday", id: "1" },
    { title: " bunny's birthday", id: "2" },
    { title: " chinna's birthday", id: "3" }
  ]);

  const handleClick2 = () => {
    setShowEvents(false);
    console.log(showEvents);
  };

  const handleClick = (id) => {
    setEvents(
      events.filter((event) => {
        return id !== event.id;
      })
    );
    console.log(id);
  };
  return (
    <div className="App">
      {!showEvents && (
        <button onClick={() => setShowEvents(true)}>show Events</button>
      )}
      {showEvents && (
        <EventList
          events={events}
          handleClick={handleClick}
          isSalesModal={false}
        />
      )}
      {showEvents && (
        <button onClick={() => setShowEvents(false)}>Hide Events</button>
      )}
    </div>
  );
}

export default App;
