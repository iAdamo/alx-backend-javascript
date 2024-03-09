/*
 * Run "npm run dev maintest/4-main.js" to test
*/
export default function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    resolve({
      firstName,
      lastName,
    });
  });
}
