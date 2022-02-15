import "./Note.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const Note = ({ note, removeNote }) => {
  const navigate = useNavigate();

  const handleRemoveNote = (id) => {
    const confirm = window.confirm("Are you sure?");
    if (confirm) {
      removeNote(id);
    }
  };

  return (
    <div className="Note" onClick={() => navigate("/" + note.id)}>
      <div style={{ textAlign: "left" }}>
        <p>{note.text}</p>
        <p style={{ color: "#909090" }}>{note.id}</p>
      </div>
      <span className="btn-close" onClick={() => handleRemoveNote(note.id)}>
        &times;
      </span>
    </div>
  );
};

Note.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};
