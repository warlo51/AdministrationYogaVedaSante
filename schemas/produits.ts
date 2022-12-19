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
      name: 'gratuit',
      type: 'string',
      title: 'Gratuit',
      options: {
        list: [
          { title: 'Oui', value: 'Oui' },
          { title: 'Non', value: 'Non' },
        ],
      },
    },
    {
      name: 'priceCode',
      type: 'string',
      title: 'Price Code',
      hidden: ({ parent }) => parent?.gratuit === 'Oui'
    },
    {
      name: 'prix',
      type: 'number',
      title: 'Prix',
      hidden: ({ parent }) => parent?.gratuit === 'Oui'
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
