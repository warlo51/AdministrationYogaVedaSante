export default {
  name: 'fichiers',
  type: 'document',
  title: 'Fichiers',
  fields: [
    {
      name: 'titre',
      type: 'string',
      title: 'Titre'
    },
    {
      name: 'categorie',
      type: 'string',
      options: {
        list: [
          { title: 'Fiches', value: 'fiches' },
          { title: 'Videos', value: 'videos' },
          { title: 'Audios', value: 'audios' },
        ],
      },
      title: 'Categorie',
    },
    {
      name: 'fichier',
      type: 'file',
      title: 'Fichier'
    },

  ]
}
