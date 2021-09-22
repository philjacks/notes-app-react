import useFetch from "../custom-hooks/useFetch";
import NoteList from "./NoteList";

const Home = () => {
  const { data: notes, isLoading, error } = useFetch(
    "http://localhost:8000/notes"
  );

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading notes...</div>}
      {notes && <NoteList notes={notes} title="All notes" />}
    </div>
  );
};

export default Home;
