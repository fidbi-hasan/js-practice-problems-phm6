const getEvenFriends = (friends) => {
  const evenLengths = [];

  for(const friend of friends) {
    const nameLength = friend.length;

    if (nameLength % 2 === 0) {
      evenLengths.push(friend);
    }
  }

  return evenLengths;
}

const names = ["Alice", "Bob", "Charlie", "Diana", "Ethana", "Fiona", "George"];


const result = getEvenFriends(names);

console.log(result);
