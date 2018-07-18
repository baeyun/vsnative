/**
 * VSNativeFSManager
 */
import { NativeModules } from 'react-native'

const fs = NativeModules.VSNativeFSManager

/**
 * pickFile
 */
export const pickFile = async () => {
  try {
    return await fs.pickFileDialogue()
  } catch (e) {
    throw e
  }
}

/**
 * pickFolder
 */
export const pickFolder = async () => {
  try {
    return await fs.pickFolderDialogue()
  } catch (e) {
    throw e
  }
}

/**
 * pickFileSave
 * 
 * @param {object} data : suggestedFileName, fileContent
 */
export const pickFileSave = async (data) => {
  try {
    return await fs.pickFileSaveDialogue(data)
  } catch (e) {
    throw e
  }
}
