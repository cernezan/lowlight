import { initApp } from './app'
import './style.css'
import { v4 } from 'uuid'

initApp()

export async function saveObjectsToDB(objects: any) {
  let booksKeys = []
  for (let objectName in objects) {
    const generatedID = v4()
    booksKeys.push(generatedID)
    craft.storageApi.put(generatedID, JSON.stringify(objects[objectName]))
  }
  craft.storageApi.put('booksKeys', JSON.stringify(booksKeys))
}
