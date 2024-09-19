
import Image from "next/image";
import { FETCH_ALL_PRODUCT , GET_STORE_BY_SLUG,GET_TESTIMONIALS_BY_STORENAME} from "@/graphqlQueries";
import {client} from "../../sanity/lib/client";


type product={
  name: string;
  slug: string;
  image: {
    asset: {
      url: string;
    };
    alt: string;
  };
  description: string;
}
// fetch data with cache no-store
const data = await client({query: FETCH_ALL_PRODUCT},);
const productList = data.data.allProduct;
const storeSlug = 'denver-store'
console.log(process.env.NODE_ENV )
async function fetchStoreBySlug(slug:string) {
  try {
    const { data, errors } = await client({
      query: GET_STORE_BY_SLUG,
      variables: { slug }
    });
    if (errors) {
      console.log('GraphQL Errors:', errors);
      throw new Error('Failed to fetch store data');
    }
    // console.log('store',data)
    await fetchTestimonialsByStoreName(data.allStore[0].storeName)
    return data; // This should now work correctly
  } catch (error) {
    console.error('Error fetching store:', error);
    throw error;
  }
}

async function fetchTestimonialsByStoreName(storeName:string) {
  try {
    const { data, errors } = await client({
      query: GET_TESTIMONIALS_BY_STORENAME,
      variables: { storeName }
    });
    // console.log('Raw response:', data)
    if (errors) {
      console.log('GraphQL Errors:', errors);
      throw new Error('Failed to fetch testimonial data');
    }
    // console.log('testis',data)
    return data; // This should now work correctly
  } catch (error) {
    console.error('Error fetching testis:', error);
    throw error;
  }
}

const storeData = await fetchStoreBySlug(storeSlug);
console.log('storeData',storeData)


export default function Home() {
  return (
   <div className="flex w-full">

    {productList.map((product: product) => (
       <div key={product.name}>
          <h2>{product.name}</h2>
          <Image src={product.image.asset.url} alt={product.image.alt} width={200} height={200} />
          <p>{product.description}</p>
        </div>
    ))  
    }
   </div>
  );
}
