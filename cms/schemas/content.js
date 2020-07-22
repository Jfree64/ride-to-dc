export default {
  name: 'content',
  title: 'Content',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'externalId',
      title: 'External ID',
      type: 'number'
    },
    {
      name: 'faq',
      title: 'Frequently Asked Questions',
      type: 'array',
      of: [{
        name: 'category',
        title: 'Category',
        type: 'object',
        fields: [
          {
            name: 'name',
            title: 'Name',
            type: 'string'
          },
          {
            name: 'icon',
            title: 'Icon',
            type: 'image'
          },
          {
            name: 'questions',
            title: 'Questions',
            type: 'array',
            of: [{type: 'question'}]
          }
        ],
        preview: {
          select: {
            title: 'name',
            media: 'icon'
          }
        }
      }]
    }
  ],
  preview: {
    select: {
      subtitle: 'characterName',
      title: 'person.name',
      media: 'person.image'
    }
  }
}
