import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'customerName',
      title: 'Customer Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'customerReview',
      title: 'Customer Review',
      type: 'text',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'customerRating',
      title: 'Customer Rating',
      type: 'number',
      validation: Rule => Rule.required().min(1).max(5)
    }),
    defineField({
        name: 'storeName',
        title: 'Store Name',
        type: 'string',
      }),
    defineField({
        name: 'store',
        title: 'Store',
        type: 'reference',
        to: [{ type: 'store' }],
        validation: Rule => Rule.required(),
        options:{
        filter: ({document}:any) => {
            return {
              filter: 'storeName match $storeName',
              params: {
                storeName: document.storeName || ''
              }
            }
          }
        }
      }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
        // calendarTodayLabel: 'Today'
      }
    })
  ],
  preview: {
    select: {
      title: 'customerName',
      subtitle: 'store.storeName',
      rating: 'customerRating'
    },
    prepare(selection) {
      const { title, subtitle, rating } = selection
      return {
        title: title,
        subtitle: `${subtitle || 'No store selected'} - Rating: ${rating}/5`
      }
    }
  }
})