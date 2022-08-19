import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";
import { useEffect, useState } from "react";
import uuid from "react-uuid";


function App() {

  const [notes, setNotes] = useState(localStorage.notes ? JSON.parse(localStorage.notes) : [])
  const [activeNote, setActiveNote] = useState(false)

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  const addNote = () => {
    const newNote = {
      id: uuid(),
      title: "Titolo",
      body: "Testo",
      lastModified: Date.now()
    } 
    setNotes([newNote, ...notes])
  }

  const getActiveNote = (id) => {
    return notes.find((note) => note.id === activeNote)
  }

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id))
  }


  const editNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if(note.id === activeNote){
        return updatedNote;
      }
      else{
        return note;
      }
    })
    setNotes(updatedNotesArray)
  }




  return (
      <div className="grid grid-cols-8 overflow-y-hidden">
        <Sidebar className="col-span-2"
          notes={notes}
          addNote={addNote}
          deleteNote={deleteNote}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
        />
        <Main className="col-span-3"
        activeNote={getActiveNote()}
        editNote={editNote}
        />
      </div>
  );
}

export default App;
