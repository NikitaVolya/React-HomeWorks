
import TelephoneBookForm from "./TelephoneBookForm";


function TelephoneChanger({ telephoneBook, user, onChange = null }) {

    const onSubmit = (data) => {
        console.log(telephoneBook);
        user = {...user, ...data}
        telephoneBook.SetUser(user);
        telephoneBook.Save();

        if (onChange != null)
            onChange();
    };
    
    return <TelephoneBookForm onSubmit={onSubmit} submitText="Save" userData={ user }></TelephoneBookForm>;
}

export default TelephoneChanger;