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

  