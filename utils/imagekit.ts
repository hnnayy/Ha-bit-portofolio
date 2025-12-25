const IMAGEKIT_ENDPOINT = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || 'https://ik.imagekit.io/r88gseoed';

export const getImageKitUrl = (path: string): string => {
  return `${IMAGEKIT_ENDPOINT}/${path}`;
};