export const FETCH_ALL_PRODUCT = `
query getAllProduct {
    allProduct {
        _id
        productName
        productSlug {
        current
        }
        productImage {
        asset {
            url
        }
        }
        productDescriptionRaw
    }
}
`;

export const GET_STORE_BY_SLUG = `
query getStoreBySlug($slug: String!) {
  allStore(where: {storeSlug: {current: {eq: $slug}}}) {
    _id
    storeName
    storeSlug {
      current
    }
    storeDescription
    storeImage {
      asset {
        url
      }
    }
    storeLogo {
      asset {
        url
      }
    }
    storeOpeningHours
    geoLocation {
      lat
      lng
    }
    storeAddress {
      streetAddress
      city
      zipCode
    }
    storeFaqs {
      question
      answer
    }
  }
}
`;


export const GET_TESTIMONIALS_BY_STORENAME=`
query getTestimonialsByStoreName($storeName: String!) {
  allTestimonial(where: {store: {storeName: {eq: $storeName}}}) {
    _id
    customerName
    customerReview
    customerRating
    createdAt
  }
}
`