import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("keeper-notes");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("keeper-notes", JSON.stringify(notes));
  }, [notes]);

  function addNote(newNote) {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  function deleteNote(id) {
    setNotes((prevNotes) => prevNotes.filter((_, index) => index !== id));
  }

  function editNote(id, updatedNote) {
    setNotes((prevNotes) =>
      prevNotes.map((note, index) => (index === id ? updatedNote : note))
    );
  }

  return (
    <div className="App"> {/* ✅ Apply class for layout fix */}
      <Header />
      <main>
        <CreateArea onAdd={addNote} />
        <div className="notes-container">
          {notes.map((note, index) => (
            <Note
              key={index}
              id={index}
              title={note.title}
              content={note.content}
              onDelete={deleteNote}
              onEdit={editNote}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
