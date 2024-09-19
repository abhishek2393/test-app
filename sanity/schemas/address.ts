import { defineType, defineField } from 'sanity'

export default defineType({
   name:'storeAddress',
    title:'Store Address',
    type:'object',
    fields:[
        defineField({name:'streetAddress',type:'string',title:'Street Address'}),
        defineField({name:'city',type:'string',title:'City'}),
        defineField({name:'zipCode',type:'string',title:'ZIP Code'})
    ]
})