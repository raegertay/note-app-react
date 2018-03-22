import React from 'react'
import Note from './Note'
import Sidebar from './Sidebar'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [
        {
          title: 'Title',
          body: 'Body'
        }
      ],
      currentNoteIndex: 0
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/notes')
      .then((response) => {
        return response.json()
      })
      .then(data => {
        this.setState({
          notes: data
        })
      }) 
  }

  handleTitleChange(event) {
    const currentNoteIndex = this.state.currentNoteIndex
    const newNotes = this.state.notes.slice()
    const newNote = Object.assign({}, newNotes[currentNoteIndex])
    newNote.title = event.target.value
    newNotes[currentNoteIndex] = newNote
    this.setState({
      notes: newNotes
    })
  }
  
  handleBodyChange(event) {
    const currentNoteIndex = this.state.currentNoteIndex
    const newNotes = this.state.notes.slice()
    const newNote = Object.assign({}, newNotes[currentNoteIndex])
    newNote.body = event.target.value
    newNotes[currentNoteIndex] = newNote
    this.setState({
      notes: newNotes
    })
  }
  
  handleSetCurrentIndex(index) {
    this.setState({
      currentNoteIndex: index
    })
  }
  
  addNewNote() {
    const newNotes = this.state.notes.slice()
    newNotes.push({
      title: '<Title here>',
      body: '<Body here>'
    })
    this.setState({
      notes: newNotes,
      currentNoteIndex: newNotes.length-1
    })
  }

  sync() {
    fetch(
      'http://localhost:3001/notes/sync',
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ 'message': this.state.notes })
      }
    ).then((response) => response.json())
      .then((data) => {
        this.setState({
          notes: data
        })
      })
  }

  render() {
    return (
      <div className='dashboard'>
        <ol>
          <Sidebar 
            notes={this.state.notes}
            handleSetCurrentIndex={(index) => this.handleSetCurrentIndex(index)}
            />
        </ol>
        <div>
          <button 
            onClick={() => this.addNewNote()}>
            Add new note
          </button>
          <button 
            onClick={() => this.sync()}>
            Sync
          </button>
          <Note 
            note={this.state.notes[this.state.currentNoteIndex]}
            handleTitleChange={(e) => this.handleTitleChange(e)}
            handleBodyChange={(e) => this.handleBodyChange(e)}
          />
        </div>
      </div>
    )
  }
}

export default Dashboard