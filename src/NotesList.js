import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
class NotesList extends Component {
    render() {
        return <div id="notesList">
            <h1>Your Notes</h1>
            <div>
                {
                    this.props.notes.map(note => {
                        return (
                            <Card>
                                <Card.Body>
                                    <Card.Title>{note.title}
                                        <Button variant="light"
                                            onClick={() => this.props.setEditingNoteFunc(note.index)}>Edit</Button>
                                        <Button variant="danger"
                                        onClick={() => this.props.deleteNoteFunc(note.index)}>Delete</Button>
                                    </Card.Title>

                                    <Card.Text>{note.text}</Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    }
}

export default NotesList;