class User {
    constructor(firstName, lastName, age, location) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.location = location;
    }
  
    compareAge(otherUser) {
      if (this.age > otherUser.age) {
        return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
      } else if (this.age < otherUser.age) {
        return `${this.firstName} è più giovane di ${otherUser.firstName}`;
      } else {
        return `${this.firstName} ha la stessa età di ${otherUser.firstName}`;
      }
    }
  }
  
  const user1 = new User("Mario", "Rossi", 35, "Roma");
  const user2 = new User("Luigi", "Verdi", 42, "Milano");
  
  console.log(user1.compareAge(user2));
  
  //es.2

class Pet {
    constructor(petName, ownerName, species, breed) {
      this.petName = petName;
      this.ownerName = ownerName;
      this.species = species;
      this.breed = breed;
    }

    // Metodo che restituisce true se due animali condividono lo stesso padrone
    hasSameOwner(otherPet) {
      return this.ownerName === otherPet.ownerName;
    }
  }

  // Gestione del form
  const form = document.querySelector('form');
  const petList = document.querySelector('#pet-list');

  form.addEventListener('submit', event => {
    event.preventDefault();

    // Creazione di un nuovo oggetto Pet
    const petName = form.elements['pet-name'].value;
    const ownerName = form.elements['owner-name'].value;
    const species = form.elements.species.value;
    const breed = form.elements.breed.value;
    const pet = new Pet(petName, ownerName, species, breed);

    // Aggiunta del nuovo oggetto alla lista dei pet creati
    const li = document.createElement('li');
    li.textContent = `${pet.petName}, ${pet.ownerName}, ${pet.species}, ${pet.breed}`;
    petList.appendChild(li);

    // Controllo se ci sono altri pet nella lista che condividono lo stesso proprietario
    let sameOwner = false;
    for (const otherPetLi of petList.querySelectorAll('li')) {
      const otherPet = parsePetFromListItem(otherPetLi);
      if (otherPet.hasSameOwner(pet)) {
        sameOwner = true;
        break;
      }
    }

    // Aggiunta della classe same-owner al li se necessario
    if (sameOwner) {
      li.classList.add('same-owner');
    }

    // Reset del form
    form.reset();
    form.elements['pet-name'].focus();
  });

  // Funzione per estrarre i dati di un pet da un elemento li
  function parsePetFromListItem(li) {
    const [petName, ownerName, species, breed] = li.textContent.split(', ');
    return new Pet(petName, ownerName, species, breed);
  }