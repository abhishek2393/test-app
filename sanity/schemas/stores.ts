import { defineType, defineField } from 'sanity'



export default defineType({
  name: 'store',
  title: 'Stores',
  type: 'document',
  fields: [
    defineField({
      name: 'storeName',
      title: 'Store Name',
      type: 'string',
      validation: Rule => Rule.required(),
      description: 'The official name of the store',
    }),
    defineField({
      name: 'storeSlug',
      title: 'Store Slug',
      type: 'slug',
      options: { source: 'storeName', maxLength: 200 },
      description: 'A URL-friendly version of the store name, used in web addresses',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'storeDescription',
      title: 'Store Description',
      type: 'text',
      description: 'A brief overview of the store, its offerings, or unique features'
    }),
    defineField({
      name: 'storeAddress',
      title: 'Store Address',
      type: 'storeAddress',
      description: 'The physical address of the store'
    }),
    defineField({
      name: 'storeImage',
      title: 'Store Image',
      type: 'image',
      options: { hotspot: true }
,   description: 'A collection of images representing the store',
    }),
    defineField({
      name: 'storeLogo',
      title: 'Store Logo',
      type: 'image',
      description: 'URL of the store logo image, stored in Vercel'
    }),
    defineField({
      name: 'storeOpeningHours',
      title: 'Store Opening Hours',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'geoLocation',
      title: 'Geo Location',
      type: 'geopoint',
      options: {
        includeAltitude: false
      },
      description: 'The geographical coordinates of the store for mapping purposes',
    }),
    defineField({
        name:'storeFaqs',
        title:'Store FAQs',
        type: 'array',
        of: [{type: 'storeFaq'}],
        description: 'Frequently asked questions and answers about the store',
    })
  ],
  preview: {
    select: {
      title: 'storeName',
      media: 'storeLogo',
      subtitle: 'storeAddress.city'
    },
    prepare(selection) {
      const { title, media, subtitle } = selection
      return {
        title: title,
        media: media,
        subtitle: subtitle ? `Located in ${subtitle}` : 'No location set'
      }
    }
  }
})