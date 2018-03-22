import React from 'react'

class Sidebar extends React.Component {

  renderTitles(notes) {
    return (
      notes.map((note, index) => {
        return (
          <li
            onClick={ () => this.props.handleSetCurrentIndex(index) }>
            {note.title.length > 15 ? note.title.slice(0, 15) + '...' : note.title }
          </li>
        )
      })
    )
  }

  render() {
    return (
      this.renderTitles(this.props.notes)
    )
  }
}

export default Sidebar