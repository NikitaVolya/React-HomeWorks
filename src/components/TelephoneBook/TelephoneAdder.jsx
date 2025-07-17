
import TelephoneBookForm from "./TelephoneBookForm";


function TelephoneAdder({ telephoneBook }) {

    const onSubmit = (data) => {
        telephoneBook.AddUser(data);
        telephoneBook.Save();
    };
    
    return <TelephoneBookForm onSubmit={onSubmit} submitText="Add"></TelephoneBookForm>;
}

export default TelephoneAdder;