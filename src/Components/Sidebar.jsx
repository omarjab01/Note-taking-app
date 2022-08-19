import React from 'react'

const Sidebar = ({notes, addNote, deleteNote, activeNote, setActiveNote}) => {
  
    const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);  
    return (
    <div className='w-full p-4 col-span-2 border-r h-screen'>
        <div className='flex flex-row justify-between mb-8'>
            <h1 className='text-2xl font-bold px-2'>Appunti</h1>
            <button className='bg-red-500 px-4 py-2 rounded-xl text-white' onClick={addNote}>Nuovo</button>
        </div>
        {/* Notes */}
        <div className=' h-full overflow-auto'>
            {
                sortedNotes.map((note) => (
                    <div className={`p-4 bg-red-100 mb-4 rounded-xl transition duration-500 cursor-pointer ${note.id === activeNote && "bg-red-300 transition duration-300 ease-in-out"}`}
                        onClick={() => setActiveNote(note.id)} >
                        <div className='flex flex-row justify-between'>
                            <h2 className='font-semibold text-xl'>{note.title}</h2> 
                            <button className='text-red-400' onClick={() => deleteNote(note.id)}>Elimina</button>    
                        </div>
                        <p>
                            {note.body && note.body.substr(0,100) + "..."}
                        </p>
                        <h6 className='text-xs text-right text-gray-600 mt-2'>
                            Ultima Modifica {new Date(note.lastModified).toLocaleDateString("it-IT", {
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                        </h6>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Sidebar