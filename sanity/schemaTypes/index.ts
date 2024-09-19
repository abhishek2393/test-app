import { type SchemaTypeDefinition } from 'sanity'
import product from '../schemas/product'
import stores from '../schemas/stores'
import testimonial from '../schemas/testimonial'
import address from '../schemas/address'
import faqs from '../schemas/faqs'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product , stores , testimonial , address , faqs],
}
