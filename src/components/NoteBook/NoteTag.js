import React from "react";
import "./NoteTag.css";


class NoteTag extends React.Component {

    constructor(props) {
        super(props);

        this.name = props.tagData?.name ?? "Non";
        this.textColor = props.tagData?.textColor ?? "black";
        this.bgColor = props.tagData?.bgColor ?? "white";
    }

    render() {
        return (
            <span className="note-tag" style={{ backgroundColor: this.bgColor, color: this.textColor }}>
                {this.name}
            </span>
        );
    }
}

export default NoteTag;