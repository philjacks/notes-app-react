import { useHistory, useParams } from "react-router-dom";
import useFetch from "../custom-hooks/useFetch";

const NoteDetails = () => {
  const { id } = useParams();
  const { data: note, isLoading, error } = useFetch(
    `http://localhost:8000/notes/${id}`
  );
  const history = useHistory();

  const handleClick = () => {
    fetch(
      `http://localhost:8000/notes/${note.id}`,
      {
        method: "DELETE"
      }
    ).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="note-details">
      {isLoading && <div>Loading note details...</div>}
      {error && <div>{error}</div>}
      {note && (
        <article>
          <h2>{note.title}</h2>
          <p>Written by {note.author}</p>
          <div>{note.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default NoteDetails;
