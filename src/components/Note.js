import React from 'react'

class Note extends React.Component {
  render() {
    return (
      <div>
        <input 
          value={this.props.note.title}
          onChange={(e) => this.props.handleTitleChange(e)}
        />
        <br />
        <input 
          value={this.props.note.body}
          onChange={(e) => this.props.handleBodyChange(e)}
        />
      </div>
    )
  }
}

export default Note