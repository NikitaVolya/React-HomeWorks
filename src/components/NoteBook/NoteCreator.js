import React from "react";
import "./NoteBook.css";


class NoteCreator extends React.Component {

    constructor(props) {
        super(props);

        this.tags = props.tags ?? [];
        this.onSubmit = props.onSubmit ?? ((note) => {});
    }


    render() {

        const formSubmit = (e) => {
            e.preventDefault();

            const formData =  new FormData(e.target);

            let selectedTags = formData.getAll("tags")

            let newNote = {
                name: formData.get("name"),
                description: formData.get("description"),
                tags: this.tags.filter(globalTag => selectedTags.includes(globalTag.name))
            };
            this.onSubmit(newNote);
        }
        let i = 0;

        return (
            <form className="note-book-form-row" onSubmit={formSubmit}>
                <input 
                    type="text" 
                    name="name"
                    placeholder="Name" 
                    required={true}/>
                <textarea 
                    name="description" 
                    placeholder="Description"/>
                <select 
                    name="tags" 
                    multiple={true} 
                    required={true}>
                    {this.tags.map(tag => (
                        <option value={tag.name} key={i++}>{tag.name}</option>
                    ))}
                </select>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default NoteCreator;