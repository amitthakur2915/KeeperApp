import React, { useState } from "react";

function Note({ id, title, content, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedContent, setEditedContent] = useState(content);

  function handleEditClick() {
    setIsEditing(true);
  }

  function handleSaveClick() {
    onEdit(id, { title: editedTitle, content: editedContent });
    setIsEditing(false);
  }

  return (
    <div className="note">
      {isEditing ? (
        <>
          <input
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
          <button onClick={handleSaveClick}>Save</button>
        </>
      ) : (
        <>
          <h1>{title}</h1>
          <p>{content}</p>
          <button onClick={() => onDelete(id)}>Delete</button>
          <button className="edit-button" onClick={handleEditClick}>Edit</button>
        </>
      )}
    </div>
  );
}

export default Note;
