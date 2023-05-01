import fsPromises from 'fs/promises'
import path from 'path'

export const getLocalData = async () => {
  //get the file path of the json file
  const filepath = path.join(process.cwd(), 'json/data.json')
  //read the file
  const jsonData = await fsPromises.readFile(filepath)

  //parse the json data
  const data = JSON.parse(jsonData.toString())

  //return the data
  return data
}

export const getLocalHobbyData = async () => {
  //get the file path of the json file
  const filepath = path.join(process.cwd(), 'json/hobbyData.json')
  //read the file
  const jsonData = await fsPromises.readFile(filepath)

  //parse the json data
  const hobbyData = JSON.parse(jsonData.toString())

  //return the data
  return hobbyData
}
