import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const results = await Promise.allSettled([
    uploadPhoto(), createUser(),
  ]);

  const [photo, user] = results;

  return ({
    photo: photo.status === 'fulfilled' ? photo.value : null,
    user: user.status === 'fulfilled' ? user.value : null,
  });
}
