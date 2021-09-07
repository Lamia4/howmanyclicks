import bcrypt from "bcrypt";

const newBcrypt = bcrypt.hashSync("cafer123", 12);

console.log(newBcrypt);