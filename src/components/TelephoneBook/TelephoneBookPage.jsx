
import TelephonesTable from "./TelephoneBookTable";
import TelephoneAdder from "./TelephoneAdder";
import TelephoneBookSearch from "./TelephoneBookSearch";

import { useState } from "react";


function TelephoneBookPage() {

    const [telephoneBook, setTelephoneBook] = useState({
        globalId: 0,
        users: [
            {
                Firstname: 'Nikita',
                Lastname: 'Vola',
                Email: 'v@gmail.com',
                PhoneNumber: '098 *** ** **'
            }
        ],
        getFilter: (user) => { return true; },

        Save() {
            setTelephoneBook({
                ...this,
                globalId: this.globalId,
                users: this.users
            });
        },
        AddUser(newUser) {
            newUser.Id = this.globalId++;
            this.users.push(newUser);
        },
        SetUser(user) {
            this.users = this.users.map( el => el.Id === user.Id ? user : el);
        },
        DeleteUser(user) {
            this.users = this.users.filter(el => el.Id != user.Id);
        },
        GetUsers() {
            return this.users.filter(el => this.getFilter(el));
        }
    });


    return <>
        <h2 style={{textAlign: "center"}}>Add user</h2>
        <TelephoneAdder telephoneBook={telephoneBook}></TelephoneAdder>
        <hr />
        <h2 style={{textAlign: "center"}}>Telephone book</h2>
        <TelephoneBookSearch telephoneBook={telephoneBook}></TelephoneBookSearch>
        <TelephonesTable telephoneBook={telephoneBook}></TelephonesTable>
    </>;
}

export default TelephoneBookPage;