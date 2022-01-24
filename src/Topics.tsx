import "./Topics.css";

function Topics() {
  return (
    <div className="topics-bar">
      {/* {[...Array(20)].map((value: undefined, index: number) => (
        <button className="topic">Topic {index + 1}</button>
      ))} */}
      <button className="topic active">All</button>
      <button className="topic">Live</button>
      <button className="topic">Lo-fi</button>
      <button className="topic">Walt Disney Animation Studios</button>
      <button className="topic">Chill-out music</button>
      <button className="topic">Nature</button>
      <button className="topic">Music</button>
      <button className="topic">Taste</button>
      <button className="topic">Restaurants</button>
      <button className="topic">Laughter</button>
      <button className="topic">Superhero movies</button>
      <button className="topic">Sketch comedy</button>
      <button className="topic">Scene</button>
      <button className="topic">Comedies</button>
    </div>
  );
}

export default Topics;
