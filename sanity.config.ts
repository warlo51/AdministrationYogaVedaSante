import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title:import.meta.env.SANITY_STUDIO_TITLE,

  projectId: import.meta.env.SANITY_STUDIO_PROJECTID,
  dataset: import.meta.env.SANITY_STUDIO_DATASET,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
