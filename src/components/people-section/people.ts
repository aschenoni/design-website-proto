import peopleSource from '../../content/people.md';

export default parsePeopleMd(peopleSource);

function person(name: string, about: string): any {
  return {
    name,
    about,
    imageUrl: `assets/people/${name}`,
  };
}

function parsePeopleMd(string: String) {
  let peopleSource: string[] = removeEmpty(string.split('#'));

  return peopleSource.map(personSource => {
    let source = removeEmpty(personSource.split(/\n+/g));
    return person(source[0].trim(), source[1].trim());
  });
}

function removeEmpty(arr) {
  return arr.filter(function (el) {
    return el != null && el != '';
  });
}
