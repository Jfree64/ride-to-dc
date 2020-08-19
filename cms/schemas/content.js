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
            name: 'content',
            title: 'Content',
            type: 'blockContent',
          }
        ],
        preview: {
          select: {
            title: 'name',
            media: 'icon'
          }
        }
      }]
    },
    {
      name: 'schedule',
      title: 'Schedule',
      type: 'array',
      of: [{
        name: 'day',
        title: 'Day',
        type: 'object',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string'
          },
          {
            name: 'mileage',
            title: 'Mileage',
            type: 'number',
            description: 'Round to nearest 5 miles'
          },
          {
            name: 'elevation',
            title: 'Elevation',
            type: 'number',
            description: 'Round to nearest 1000ft'
          },
          {
            name: 'content',
            title: 'Content',
            type: 'blockContent',
          }
        ],
        preview: {
          select: {
            title: 'title',
            description: 'content',
            media: 'icon'
          }
        }
      }]
    }
  ],
  preview: {
    select: {
      title: 'title',
    }
  }
}
