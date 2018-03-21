import React from 'react'

class Sidebar extends React.Component {

  renderTitles(notes) {
    return (
      notes.map((note, index) => {
        return (
          <h2
            onClick={ () => this.props.handleSetCurrentIndex(index) }>
            {note.title}
          </h2>
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