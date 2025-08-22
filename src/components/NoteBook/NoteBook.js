import React from "react";
import NoteCreator from "./NoteCreator";
import Note from "./Note";
import "./NoteBook.css";


class NoteBook extends React.Component {
    
    constructor(props) {
        super(props);

        this.globalId = 0;

        this.state = {
            notes: [],
            tags: [
                { name: "Ready", bgColor: "green", textColor: "white"},
                { name: "In work", bgColor: "yellow", textColor: "black" },
                { name: "To do", bgColor: "white", textColor: "black"}
            ],
            tagsFilters: [

            ]
        }

        this.pushNote = (note) => {
            note.id = this.globalId++;

            this.setState({
                ...this.state,
                notes: [...this.state.notes, note],
            });
        }

        this.updateNote = (note) => {
            this.setState({
                ...this.state,
                notes: this.state.notes.map(n => {
                    if (n.id !== note.id)
                        return n;
                    else
                        return note;
                })
            });
        }

        this.deleteNote = (note) => {
            this.setState({
                ...this.state,
                notes: this.state.notes.filter(n => n.id !== note.id),
            })
        }

        this.updateFilter = (values) => {
            this.setState({
                ...this.state,
                tagsFilters: values
            });
        }
    }

    render() {
        let filteredNotes;
        if (this.state.tagsFilters.length == 0)
           filteredNotes = this.state.notes;
        else if (this.state.tagsFilters.length == 1 && this.state.tagsFilters[0] == "")
           filteredNotes = this.state.notes;
        else
        {   
            console.log(this.state.tagsFilters);
            filteredNotes = this.state.notes.filter(
                note => {
                    let rep = true;
                    this.state.tagsFilters.forEach(tag => {
                        if (tag == "")
                            return;
                        console.log(note.tags, tag);
                        if (!note.tags.find( t => t.name == tag ))
                            rep = false;
                    });
                    return rep;
                }
            );
        }

        return (
            <>
                <h2 className="form-title">Create a New Note</h2>
                <NoteCreator tags={this.state.tags} onSubmit={this.pushNote} />

                <hr />

                <div className="notebook-container">
                
                {/* Filters */}
                <div className="filters">
                    <label htmlFor="tagFilter" className="filter-label">
                    Filter by Tags:
                    </label>
                    <select
                    id="tagFilter"
                    multiple={true}
                    value={this.state.tagsFilters}
                    onChange={(e) =>
                        this.updateFilter(
                        Array.from(e.target.selectedOptions, (option) => option.value)
                        )
                    }
                    className="tag-select"
                    >
                    <option value="">-- Select tags --</option>
                    {this.state.tags.map((tag, i) => (
                        <option value={tag.name} key={i}>
                        {tag.name}
                        </option>
                    ))}
                    </select>
                </div>

                {/* Notes */}
                <div className="notesWrapper">
                    {filteredNotes.length > 0 ? (
                    filteredNotes.map((note) => (
                        <Note
                        id={note.id}
                        key={note.id}
                        name={note.name}
                        description={note.description}
                        tags={note.tags}
                        onUpdate={this.updateNote}
                        onDelete={this.deleteNote}
                        />
                    ))
                    ) : (
                    <p className="empty-message">
                        No notes found for selected tags.
                    </p>
                    )}
                </div>
                </div>
            </>
        );
    }
}

export default NoteBook;