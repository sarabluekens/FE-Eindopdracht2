import fsPromises from 'fs/promises'
import path from 'path'

const getLocalData = async (id: any) => {
  //get the file path of the json file
  const filepath = path.join(process.cwd(), 'json/data.json')
  //read the file
  const jsonData = await fsPromises.readFile(filepath)

  //parse the json data
  const data = JSON.parse(jsonData.toString())

  //return the data
  return data
}

export default getLocalData
