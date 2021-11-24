/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import { useState, useEffect } from 'react';
import Notes from './components/Notes/Notes';
import Note from './components/Notes/Note';
import Form from './components/Form/Form';
import shortid from 'shortid';

function App() {
  const [form, setForm] = useState({content: ''});
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    loadNotes()
  }, [notes])

  const loadNotes = () => {
    fetch('http://localhost:7777/notes')
    .then((response) => response.json())
    .then(data => setNotes(data));
  }

  const postNote = (form) => {
    const formData = new FormData();
    formData.append('id', shortid.generate());
    formData.append('content', form.content);

    fetch('http://localhost:7777/notes', {
      method: 'POST',
      body: new URLSearchParams(formData)
    });
  }

  const onSubmitHandler = (form) => {
    setNotes(prevState => [...prevState, {
      id: shortid.generate(), 
      ...form
    }])

    postNote(form);
    setForm({content: ''});
  }

  const onChangeHandler = ({ target: { value } }) => {
    setForm(prev => ({...prev, content: value}));
  }

  const onDeleteHandler = (id) => {
    fetch(`http://localhost:7777/notes/${id}`, {
      method: 'DELETE',
      body: id
    });
    loadNotes();
  }

  const onUpdateHandler = () => {
    console.log('change hppened');
    loadNotes();
  }

  return (
    <div className="container">
      <Notes updateHandler={onUpdateHandler}>
        {notes.map(note => {
          return <Note 
            key={note.id} 
            id={note.id}
            text={note.content}
            deleteHandler={onDeleteHandler}></Note>
        })}
      </Notes>
      <Form 
        onSubmit={onSubmitHandler}
        onChange={onChangeHandler}
        form={form}>
      </Form>
    </div>
  );
}

export default App;
