import { useState } from "react";
import { useHistory } from "react-router-dom";

const NewNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("phil");
  const [isAdding, setIsAdding] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const note = { title, content, author };

    setIsAdding(true);

    fetch(
      "https://my-json-server.typicode.com/philjacks/notes-json-dummy-data/notes",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(note)
      }
    ).then(() => {
      console.log("New note added to server");
      setIsAdding(false);
      history.push("/");
    });
  };

  return (
    <div className="new-note">
      <h2>Add a New Note</h2>
      <form onSubmit={handleSubmit}>
        <label>Note Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Note Content</label>
        <textarea
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <label>Author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Phil Jacks">Phil Jacks</option>
          <option value="John Doe">John Doe</option>
        </select>
        {!isAdding && <button>Add Note</button>}
        {isAdding && <button disabled>Adding Note</button>}
      </form>
    </div>
  );
};

export default NewNote;
