import { useState } from "react";


function TelephoneBookSearch({ telephoneBook }) {

    const [searchValue, setSeacrhValue] = useState('');

    const searchClick = (e) => {
        telephoneBook.getFilter = (user) => {
            return user.Firstname.toLowerCase().indexOf(searchValue.toLowerCase()) != -1;
        }
        telephoneBook.Save();
    }

    return <>
        <div className="TelephoneSearch">
            <input type="text" value={searchValue} onChange={(e) => setSeacrhValue(e.target.value)}/>
            <button onClick={searchClick}>Search</button>
        </div>
    </>
}

export default TelephoneBookSearch;