import sanityClient from '@sanity/client';

export const createSanityClient = () =>
  sanityClient({
    projectId: '21t4zq9k',
    dataset: 'production',
    useCdn: false,
  });
