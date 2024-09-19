import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'storeFaq',
    title: 'Store FAQ',
    type: 'object',
    fields: [
      defineField({ name: 'question', type: 'string', title: 'Question' }),
      defineField({ name: 'answer', type: 'text', title: 'Answer' })
    ]
  });
  