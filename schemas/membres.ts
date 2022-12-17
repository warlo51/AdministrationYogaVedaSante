export default {
  name: 'membres',
  type: 'document',
  title: 'Membres',
  fields: [
    {
      name: 'nom',
      type: 'string',
      title: 'Nom'
    },
    {
      name: 'prenom',
      type: 'string',
      title: 'Prenom'
    },
    {
      name: 'age',
      type: 'number',
      title: 'Age'
    },
    {
      name: 'photo',
      type: 'image',
      title: 'Photo'
    },
    {
      name: 'telephone',
      type: 'string',
      title: 'Telephone'
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email'
    },
    {
      name: 'cp',
      type: 'number',
      title: 'Code Postal'
    },
    {
      name: 'ville',
      type: 'string',
      title: 'Ville'
    }
  ]
}
