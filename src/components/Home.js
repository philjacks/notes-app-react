import useFetch from "../custom-hooks/useFetch";
import NoteList from "./NoteList";

const Home = () => {
  const { data: notes, isLoading, error } = useFetch(
    "https://my-json-server.typicode.com/philjacks/notes-json-dummy-data/notes"
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
