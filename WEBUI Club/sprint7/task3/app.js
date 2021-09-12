const { getUser, getUserProfile } = require("./Helper.js");

async function getAge() {
  const { id } = await getUser();
  const { age } = await getUserProfile(id);

  return age;
}
