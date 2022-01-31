import "./TopicsBar.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function TopicsBar() {
  const topicsBar = document.getElementById("topicsBar");

  return (
    <div className="topicsBar" id="topicsBar">
      <button
        className="scroll-left"
        onClick={() => {
          topicsBar?.scrollBy({ top: 0, left: -150, behavior: "smooth" });
        }}
      >
        <ChevronLeftIcon />
      </button>
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
      <button
        className="scroll-right"
        onClick={() => {
          topicsBar?.scrollBy({ top: 0, left: 150, behavior: "smooth" });
        }}
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
}

export default TopicsBar;
