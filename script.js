"use strict";

class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

class AddressBook {
  constructor() {
    this.contacts = [];
  }
  add(info) {
    // this.contacts.push(info);
    this.contacts = [...this.contacts, info];
  }
  deleteAt(index) {
    // this.contacts.splice(index, 1);
    this.contacts = [...this.contacts.slice(0, index), ...this.contacts.slice(index + 1)];
  }
  display() {
    document.querySelector(".myContacts").innerHTML = "";
    let count = 0;
    for (let contact of this.contacts) {
      const newEntry = document.createElement("div");
      newEntry.setAttribute("index", count);
      newEntry.classList.add("contactBox");
      newEntry.innerHTML = `
      <p>Name: ${contact.name}</p>
      <p>Email: ${contact.email}</p>
      <p>Phone: ${contact.phone}</p>
      <p>Relation: ${contact.relation}</p>
      <i class="material-icons">delete</i>`;
      document.querySelector(".myContacts").append(newEntry);
      count++;
    }
  }
}

document.querySelector("form").addEventListener("submit", addContact);

function addContact(event) {
  event.preventDefault();
  let inputElements = document.querySelectorAll("input");
  const info = new Contact(inputElements[0].value, 
    inputElements[1].value, 
    inputElements[2].value, 
    inputElements[3].value)
    book.add(info);
    for (let input of inputElements) {
    input.value = "";
}
book.display();
console.dir(book);
}

document.querySelector("main").addEventListener("click", deleteContact);

function deleteContact(event) {
  if (event.target.classList.contains("material-icons")) {
    const index = event.target.parentNode.getAttribute("index");
    book.deleteAt(index);
    book.display();
  }
}

//  instance of address book into a new object
const book = new AddressBook();
//  loop while true means run it until we quit
//  while (true) {
//     //  options to use as conditional statements
//     let choice = prompt("Add, Delete, Print, or Quit?");
//     // if functions conditionals
//     if (choice === "Quit") {
//         console.log("Goodbye");
//         break;
//     } else if (choice === "Print") {
//         // calling  the object name with the method
//         book.print();
//     } else if (choice === "Delete") {
//         book.deleteAt(prompt("Index to delete?"));
//     } else if (choice === "Add") {
//         book.add(new Contact(
//             prompt("Enter a name."),
//             prompt("Enter an email."),
//             prompt("Enter a phone number."),
//             prompt("Enter a relation")
//         ));
//     }
//  }