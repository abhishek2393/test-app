export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-09-07'

export const dataset = assertValue(
  process.env.NODE_ENV === 'production' ? process.env.SANITY_STUDIO_DATASET : process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET,
  'Missing environment variables: NEXT_PUBLIC_SANITY_STUDIO_DATASET'
)

export const projectId = assertValue(
  process.env.NODE_ENV === 'production' ? process.env.SANITY_STUDIO_PROJECT_ID : process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID'
)

export const sanityURL = assertValue(
  process.env.NODE_ENV === 'production' ? process.env.SANITY_STUDIO_URL : process.env.NEXT_PUBLIC_SANITY_STUDIO_URL,
  'Missing environment variable: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL'
)




function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
