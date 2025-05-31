import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [notes, setNotes] = useState([]);
  const [hoveredId, setHoveredId] = useState(null);

  const getAllNotes = async () => {
    try {
      const res = await axios.get('http://localhost:5000/notes');
      setNotes(res.data);
    } catch (err) {
      console.error('Error fetching notes:', err);
    }
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/notes/${id}`);
      getAllNotes();
    } catch (err) {
      console.error('Error deleting note:', err);
    }
  };

  useEffect(() => {
    getAllNotes();
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📋 All Notes</h2>
      <ul style={styles.noteList}>
        {notes.map((note) => (
          <li
            key={note.id}
            style={styles.noteItem}
            onMouseEnter={() => setHoveredId(note.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {note.text}
            {hoveredId === note.id && (
              <button
                onClick={() => deleteNote(note.id)}
                style={styles.deleteButton}
              >
                ❌
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '50px auto',
    padding: '20px',
    border: '2px solid #ddd',
    borderRadius: '10px',
    background: '#f9f9f9',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    fontFamily: 'sans-serif',
  },
  heading: {
    color: '#333',
    marginBottom: '20px',
    textAlign: 'center',
  },
  noteList: {
    listStyle: 'none',
    padding: 0,
  },
  noteItem: {
    position: 'relative',
    background: '#fff',
    padding: '12px 20px',
    margin: '10px auto',
    borderRadius: '6px',
    border: '1px solid #ccc',
    width: '80%',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    border: 'none',
    color: 'white',
    padding: '6px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Home;