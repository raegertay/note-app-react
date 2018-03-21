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

  addNewNote() {
    const newNotes = this.state.notes.slice()
    newNotes.push({
      title: '<Enter title here>',
      body: '<Enter body here>'
    })
    this.setState({
      notes: newNotes,
      currentNoteIndex: newNotes.length-1
    })
  }

  handleSetCurrentIndex(index) {
    this.setState({
      currentNoteIndex: index
    })
  }

  render() {
    return (
      <div className='dashboard'>
        <Sidebar 
          notes={this.state.notes}
          handleSetCurrentIndex={(index) => this.handleSetCurrentIndex(index)}
        />
        <button 
          onClick={() => this.addNewNote()}>
          Add new note
        </button>
        <Note 
          note={this.state.notes[this.state.currentNoteIndex]}
          handleTitleChange={(e) => this.handleTitleChange(e)}
          handleBodyChange={(e) => this.handleBodyChange(e)}
        />
      </div>
    )
  }
}

export default Dashboard