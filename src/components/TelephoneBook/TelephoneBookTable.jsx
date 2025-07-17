

import { useState } from "react";
import "./TelephoneBookPage.css";

import TelephoneChanger from "./TelephoneChanger";


function TelephonesTable({ telephoneBook }) {

    const [editingId, setEditingId] = useState(null);

    let i = 0;

    const getRow = (user) => {
        const isEditing = user.Id === editingId;

        return <div className="TelephonesTableRow" key={i++}>
            <div className="cell">
                { user.Firstname }
            </div>
            <div className="cell">
                { user.Lastname }
            </div>
            <div className="cell">
                { user.Email }
            </div>
            <div className="cell">
                { user.PhoneNumber }
            </div>
            <div className="cell" onClick={() => setEditingId(user.Id)}>
                <b>Change</b>
            </div>
            <div className="cell" onClick={() => {telephoneBook.DeleteUser(user); telephoneBook.Save()}}>
                <b>Delete</b>
            </div>

            {
            isEditing && (
                <div className="change-form-overlay">
                    <div className="change-form-container">
                        <b onClick={() => setEditingId(null)}>close</b>
                        <TelephoneChanger 
                            telephoneBook={telephoneBook} 
                            user={user} 
                            onChange={() => {setEditingId(null)}}/>
                    </div>
                </div>
            )
            }
        </div>;
    }

    return <>
        <div className="TelephonesTable">
            {
                telephoneBook.GetUsers().map(el => getRow(el))
            }
        </div>
    </>;
}

export default TelephonesTable;