
import { sanityURL } from "../env";

export const client = async ({ query, variables }: { query: string, variables?: any }) => {

  try {
    const response  = await fetch(sanityURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        query,
        variables
      }),
      cache: 'no-store',
    }

   ,
  );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch API', error);
    throw new Error('Failed to fetch API');
  };
};