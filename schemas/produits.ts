export default {
  name: 'produits',
  type: 'document',
  title: 'Produits',
  fields: [
    {
      name: 'titre',
      type: 'string',
      title: 'Titre'
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description'
    },
    {
      name: 'priceCode',
      type: 'string',
      title: 'Price Code'
    },
    {
      name: 'prix',
      type: 'number',
      title: 'Prix'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image'
    },
    {
      name: 'fichier',
      type: 'file',
      title: 'Fichier'
    },{
      name: 'createAt',
      type: 'date',
      title: 'Date d ajout',
    },{
      name: 'categorie',
      type: 'string',
      options: {
        list: [
          { title: 'Outils', value: 'outils' },
          { title: 'Videos', value: 'videos' },
          { title: 'Audios', value: 'audios' },
        ],
      },
      title: 'Categorie',
    },
  ]
}
