const fs = require('fs');
const path = require('path');
const faker = require('faker');
const md5 = require('md5');

function createBadges(limit = 50) {
  const result = [];

  for (let i = 0; i < limit; i++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();

    result.push({
      id: faker.random.uuid(),
      firstName,
      lastName,
      email,
      jobTitle: faker.name.jobTitle(),
      twitter: `${firstName}${lastName}${faker.address.zipCode()}`,
      avatarUrl: `https://www.google.com/url?sa=i&url=https%3A%2F%2Fplatzi.com%2Flive%2F&psig=AOvVaw3aiLmvAYJ4mfpLCzf2Rfoi&ust=1603216707526000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCthf-dwewCFQAAAAAdAAAAABAD`,
    });
  }

  return result;
}

function main() {
  const data = {
    badges: createBadges(),
  };

  fs.writeFileSync(
    path.resolve(__dirname, 'db.json'),
    JSON.stringify(data, null, 4)
  );
}

main();
