export default {
  name: 'rdv',
  type: 'document',
  title: 'Rendez vous',

  fields: [
    {
      name: 'date',
      type: 'string',
      title: 'Date'
    },
    {
      title: 'Membre',
      name: 'membre',
      type: 'array',
      of: [
        {
          name: 'membre',
          type: 'reference',
          title: 'Membre',
          to: {type:'membres'},
        }
      ],
    },
    {
      name: 'categorie',
      type: 'string',
      options: {
        list: [
          { title: 'Massages', value: 'massages' },
          { title: 'Yogathérapie', value: 'yogatherapie' },
        ],
      },
      title: 'Categorie',
    },
    {
      title: 'Fichiers',
      name: 'fichiers',
      type: 'array',
      of: [
        {
          name: 'fichier',
          type: 'reference',
          title: 'Fichier',
          to: {type:'fichiers'}
        }
      ],
    }
  ]
}
