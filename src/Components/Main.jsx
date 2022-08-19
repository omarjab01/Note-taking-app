import ReactMarkdown from 'react-markdown'

const Main = ({activeNote, editNote}) => {

    // const [titolo, setTitolo] = useState(activeNote?.title);
    // const [body, setBody] = useState(activeNote?.body)

    const editField = (key, value) => {
        editNote({
            ...activeNote,
            [key] : value,
            lastModified: Date.now(),
        })
    }

    if(!activeNote) return <div className=''>No Notes Selected</div>

    return (
    <div className='col-span-6 h-screen bg-gray-50 grid grid-cols-6'>
        <div className='flex flex-col gap-4 p-4 col-span-3 h-screen'>
            <input type="text" placeholder='Titolo' className="p-2 px-4 rounded-xl" autoFocus 
            value={activeNote.title} 
            onChange={(event) => editField("title",event.target.value)}/>
            <textarea placeholder='Scrivi i tuoi appunti' className="p-4 h-screen rounded-xl" value={activeNote.body} onChange={(event) => editField("body",event.target.value)}/>
        </div>
        <div className='col-span-3 border-l p-4 h-screen overflow-auto mb-2'>
            <h2 className='text-xl font-semibold'>{activeNote.title}</h2>
            <ReactMarkdown className='mt-6'>{activeNote.body}</ReactMarkdown>
        </div>
    </div>
  )
}

export default Main