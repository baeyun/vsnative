/**
 * VSNativeFSManager
 */
import { NativeModules } from 'react-native'

const fs = NativeModules.VSNativeFSManager

export const pickFile = async () => {
  try {
    return await fs.pickFileDialogue()
  } catch (e) {
    throw e
  }
}

export const pickFolder = async () => {
  try {
    return await fs.pickFolderDialogue()
  } catch (e) {
    throw e
  }
}
