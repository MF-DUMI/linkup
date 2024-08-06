import { createRequire } from 'module'
const require = createRequire(import.meta.url)
export const collections = {
  'heroicons': () => require('@iconify-json/heroicons/icons.json'),
  'material-symbols': () => require('@iconify-json/material-symbols/icons.json'),
  'ph': () => require('@iconify-json/ph/icons.json'),
  'simple-icons': () => require('@iconify-json/simple-icons/icons.json'),
}