import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddNote() {
  const [text, setText] = useState('');
  const API_URL = "https://noteapp-3-zc97.onrender.com";
  const navigate = useNavigate();

  const addNote = async () => {
    if (!text.trim()) return;
    try {
      await axios.post(`${API_URL}/notes`, { text });
      setText('');
      navigate('/'); // Redirect to Home after adding
    } catch (err) {
      console.error('Error adding note:', err);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>➕ Add a New Note</h2>
      <div style={styles.inputContainer}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a note"
          style={styles.input}
        />
        <button onClick={addNote} style={styles.button}>Add Note</button>
      </div>
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
    textAlign: 'center',
    fontFamily: 'sans-serif',
  },
  heading: {
    color: '#333',
    marginBottom: '20px',
  },
  inputContainer: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    border: '1.5px solid #ccc',
    borderRadius: '5px',
    flexGrow: 1,
    maxWidth: '300px',
  },
  button: {
    padding: '10px 15px',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: '1.5px solid #007bff',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
};

export default AddNote;
