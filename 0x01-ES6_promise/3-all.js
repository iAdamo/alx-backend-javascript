/*
 * Run "npm run dev maintest/3-main.js" to test
*/
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((resolve) => {
      const [photo, user] = resolve;
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => console.error('Signup system offline'));
}
