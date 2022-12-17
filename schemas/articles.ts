export default {
  name: 'articles',
  type: 'document',
  title: 'Articles',
  fields: [
    {
      name: 'titre',
      type: 'string',
      title: 'Titre'
    },
    {
      name: 'phrase',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Quote', value: 'blockquote'}
          ],
        }
      ],
      title: 'Phrase'
    },
    {
      name: 'texte',
      type: 'array',
      title: 'Texte',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Quote', value: 'blockquote'}
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'}
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Code', value: 'code'}
            ]
          }
        }
      ]
    },
    {
      name: 'image',
      type: 'image',
      options: {
        hotspot: true
      },
      title: 'Image'
    },
    {
      name: 'createAt',
      type: 'date',
      title: 'Date de création'
    },
  ]
}
