import { DATABASE_KEYS } from '~/contants/database'
import type { PlantComponent } from '~/types/models/plantComponent'

const openDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DATABASE_KEYS.name, 1)
    request.onupgradeneeded = (e) => {
      const db = (e.target as IDBOpenDBRequest)?.result as IDBDatabase
      if (!db.objectStoreNames.contains(DATABASE_KEYS.storeName))
        db.createObjectStore(DATABASE_KEYS.storeName, { keyPath: 'id' })
    }
    request.onerror = () => {
      reject('Error opening database')
    }
    request.onsuccess = (e) => {
      resolve((e.target as IDBRequest).result)
    }
  })
}
// Add a new plant
const addPlant = async (plant: PlantComponent): Promise<PlantComponent> => {
  const db = await openDB()
  const transaction = db.transaction(DATABASE_KEYS.storeName, 'readwrite')
  const store = transaction.objectStore(DATABASE_KEYS.storeName)
  store.put(plant)
  return new Promise((resolve, reject) => {
    transaction.oncomplete = () => resolve(plant)
    transaction.onerror = () => reject('Error adding plant')
  })
}
//Get single plant
const getPlant = async (id: string): Promise<PlantComponent> => {
  const db = await openDB()
  const transaction = db.transaction(DATABASE_KEYS.storeName, 'readonly')
  const store = transaction.objectStore(DATABASE_KEYS.storeName)
  const request = store.get(id)
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject('Error getting plant')
  })
}
// Get all plants
const getAllPlants = async (): Promise<PlantComponent[]> => {
  const db = await openDB()
  const transaction = db.transaction(DATABASE_KEYS.storeName, 'readonly')
  const store = transaction.objectStore(DATABASE_KEYS.storeName)
  const request = store.getAll()
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject('Error getting plants')
  })
}
// Delete a plant
const deletePlan = async (id: number): Promise<void> => {
  const db = await openDB()
  const transaction = db.transaction(DATABASE_KEYS.storeName, 'readwrite')
  const store = transaction.objectStore(DATABASE_KEYS.storeName)
  store.delete(id)
  return new Promise((resolve, reject) => {
    transaction.oncomplete = () => resolve()
    transaction.onerror = () => reject('Error deleting plant')
  })
}
// Update a plant
const updatePlant = async (plant: PlantComponent): Promise<PlantComponent> => {
  const db = await openDB()
  const transaction = db.transaction(DATABASE_KEYS.storeName, 'readwrite')
  const store = transaction.objectStore(DATABASE_KEYS.storeName)
  store.put(plant)
  return new Promise((resolve, reject) => {
    transaction.oncomplete = () => resolve(plant)
    transaction.onerror = () => reject('Error updating plant')
  })
}

export { addPlant, getPlant, getAllPlants, deletePlan, updatePlant }
