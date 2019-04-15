"use strict";

function createPerson(name) {
  const privateProperties = {};

  const person = {
    setName: name => {
      if(!name) {
				throw new Error('A person must have a name'); // 人には名前が必須です
			}
      privateProperties.name = name;
    },
    getName: () => {
      return privateProperties.name;
    }
  };

  person.setName(name);
  return person;
}

const person = createPerson('James Joyce');
console.log(person.getName(), person);
