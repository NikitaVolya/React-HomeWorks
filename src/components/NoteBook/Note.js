import React from "react"
import NoteTag from "./NoteTag";
import "./Note.css";


class Note extends React.Component {

    constructor(props) {
        super(props);

        this.id = props.id ?? -1;
        this.tags = props.tags ?? [];

        this.state = { 
            showContextMenu: false,
            name: props.name ?? "",
            description: props.description ?? "",
        };


        this.onUpdate = props.onUpdate ?? ((note) => {});
        this.onDelete = props.onDelete ?? ((note) => {});

        this.getNote = () => {
            return {
                 id: this.id,
                 name: this.state.name,
                 description: this.state.description,
                 tags: this.tags
            };
        }

        this.updateStateValue = (name, value) => {
            this.setState({
                ...this.state, [name]: value
            });
            this.onUpdate(this.getNote());
        }
    }

    render() {
        return (
            <div className="note-card">
                <div className="note-header">
                    <input
                        type="text"
                        value={this.state.name}
                        placeholder="Note title..."
                        className="note-title"
                        onChange={e => this.updateStateValue("name", e.target.value)}/>
                    <button 
                        className="menu-btn" 
                        onClick={() => this.updateStateValue("showContextMenu", !this.state.showContextMenu)}>
                        ⋮
                    </button>
                    {this.state.showContextMenu && (
                        <div className="context-menu">
                            <button className="delete-btn" onClick={() => this.onDelete(this.getNote())}>
                                Delete
                            </button>
                        </div>
                    )}
                </div>

                <textarea
                    value={this.state.description}
                    placeholder="Write description..."
                    className="note-description"
                    onChange={e => this.updateStateValue("description", e.target.value)}/>

                <div className="tagsWrapper">
                    {this.tags.map((tag, i) => (
                        <NoteTag key={i} tagData={tag} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Note;