import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId:import.meta.env.SANITY_STUDIO_PROJECTID,
    dataset:import.meta.env.SANITY_STUDIO_DATASET,
  }
})
