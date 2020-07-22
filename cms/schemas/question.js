export default {
  name: 'question',
  title: 'Queston',
  type: 'object',
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'string'
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'blockContent'
    },
  ],
  preview: {
    select: {
      title: 'question',
      subtitle: 'answer'
    }
  }
}