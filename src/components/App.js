import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { uuid } from "uuidv4";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";

function App() {
	const LOCAL_STORAGE_KEY = "contacts";
	const [contacts, setContacts] = useState([]);

	const addContactHandler = (contact) => {
		setContacts([...contacts, { id: uuid(), ...contact }]);
	};

	const removeContactHandler = (id) => {
		const newContactList = contacts.filter((contact) => {
			return contact.id !== id;
		});

		setContacts(newContactList);
	};

	useEffect(() => {
		const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
		if (retriveContacts) setContacts(retriveContacts);
	}, []);

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
	}, [contacts]);

	return (
		<div className="ui container">
			<Router>
				<Header />
				<Routes>
					<Route
						exact
						path="/"
						element={
							<ContactList
								contacts={contacts}
								getContactId={removeContactHandler}
							/>
						}
					></Route>
					<Route
						path="/add"
						exact
						element={<AddContact addContactHandler={addContactHandler} />}
					></Route> 
					<Route
					   path='/contact/:id' exact element={<ContactDetails />}>

					   </Route>
				</Routes>
				{/* <AddContact addContactHandler={addContactHandler} /> */}
				{/* <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
			</Router>
		</div>
	);
}

export default App;