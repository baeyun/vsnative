using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using ReactNative.Bridge;
using ReactNative.Collections;
using ReactNative.Modules.Core;
using System;
using System.IO;
using System.Collections.Generic;
using System.Threading.Tasks;
using Windows.Storage;
using Windows.Storage.Pickers;
using Windows.Storage.Provider;
using Windows.Storage.Search;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace vsnative
{
    class VSNativeFSManager : ReactContextNativeModuleBase
    {
        public VSNativeFSManager(ReactContext reactContext)
            : base(reactContext)
        {
            this.reactContext = reactContext;
        }

        public override string Name
        {
            get
            {
                return "VSNativeFSManager";
            }
        }

        public ReactContext reactContext;

        public StorageFolder currenFolder;

        // Emit events on the JS side
        internal RCTDeviceEventEmitter Emitter
        {
            get
            {
                // @todo make singleton?
                return this.reactContext.GetJavaScriptModule<RCTDeviceEventEmitter>();
            }
        }

        [ReactMethod]
        public async void pickFileDialogue(IPromise promise)
        {
            try
            {
                FileOpenPicker openPicker = new FileOpenPicker
                {
                    ViewMode = PickerViewMode.List,
                    SuggestedStartLocation = PickerLocationId.ComputerFolder
                };

                openPicker.FileTypeFilter.Add("*");

                await CoreApplication.MainView.CoreWindow.Dispatcher.RunAsync(
                    CoreDispatcherPriority.Normal,
                    async () =>
                    {
                        IReadOnlyList<StorageFile> files = await openPicker.PickMultipleFilesAsync();

                        promise.Resolve(files);
                    }
                );
            }
            catch (Exception ex)
            {
                promise.Reject(ex);
            }
        }

        public async Task<JArray> GetDirTree(StorageFolder folder, List<string>ObjPath = null)
        {
            JArray tree = new JArray();
            List<StorageFolder> folders = new List<StorageFolder>(await folder.GetFoldersAsync());
            List<StorageFile> files = new List<StorageFile>(await folder.GetFilesAsync());

            if (folders != null)
                for (int i = 0; i < folders.Count; i++)
                {
                    StorageFolder f = folders[i];
                    JObject newItem = JObject.FromObject(f);
                    bool isEmpty = await f.GetItemsAsync(0, 1) == null;

                    newItem.Add(new JProperty("IsCollapsed", true));

                    List<string> newObjPath = new List<string>();

                    if (ObjPath != null && ObjPath.Count > 0)
                    {
                        newObjPath.AddRange(ObjPath);
                        newObjPath.Add("Children");
                    }

                    newObjPath.Add(i.ToString());

                    newItem.Add(new JProperty("ObjPath", newObjPath));

                    if (!isEmpty)
                        newItem.Add(new JProperty(
                            "Children",
                            await GetDirTree(f, newObjPath)
                        ));

                    tree.Add(newItem);
                }

            if (files != null)
                for (int i = 0; i < files.Count; i++)
                {
                    JObject f = JObject.FromObject(files[i]);

                    List<string> newObjPath = new List<string>();

                    if (ObjPath != null && ObjPath.Count > 0)
                    {
                        newObjPath.AddRange(ObjPath);
                        newObjPath.Add("Children");
                    }

                    newObjPath.Add((folders.Count + i).ToString());

                    f.Add(new JProperty("ObjPath", newObjPath));

                    tree.Add(f);
                }

            return tree;
        }

        [ReactMethod]
        public async void pickFolderDialogue(IPromise promise)
        {
            try
            {
                FolderPicker folderPicker = new FolderPicker
                {
                    SuggestedStartLocation = PickerLocationId.ComputerFolder
                };

                folderPicker.FileTypeFilter.Add("*");

                await CoreApplication.MainView.CoreWindow.Dispatcher.RunAsync(
                    CoreDispatcherPriority.Normal,
                    async () =>
                    {
                        StorageFolder folder = await folderPicker.PickSingleFolderAsync();
                        
                        if (folder != null)
                        {
                            // set as current working folder
                            //this.currenFolder = folder;

                            JObject folderTree = JObject.FromObject(folder);

                            folderTree.Add(
                                new JProperty("Children", await GetDirTree(folder))
                            );

                            folderTree.Add(
                                new JProperty("IsCollapsed", false)
                            );

                            promise.Resolve(folderTree);
                        }
                        else
                        {
                            promise.Resolve(folder);
                        }
                    }
                );
            }
            catch (Exception ex)
            {
                promise.Reject(ex);
            }
        }

        // @todo
        //    - add more FileTypeChoices dynamically
        //    - handle no empty file save replace
        [ReactMethod]
        public async void pickFileSaveDialogue(JObject data, IPromise promise)
        {
            try
            {
                FileSavePicker savePicker = new FileSavePicker
                {
                    SuggestedStartLocation = PickerLocationId.ComputerFolder
                };

                // Dropdown of file types the user can save the file as
                savePicker.FileTypeChoices.Add("Plain Text", new List<string>() { ".txt" });
                // Default file name if the user does not type one in or select a file to replace
                if (data.Value<string>("suggestedFileName") != null)
                    savePicker.SuggestedFileName = data.Value<string>("suggestedFileName");

                await CoreApplication.MainView.CoreWindow.Dispatcher.RunAsync(
                    CoreDispatcherPriority.Normal,
                    async () =>
                    {
                        StorageFile file = await savePicker.PickSaveFileAsync();

                        if (file != null && data.Value<string>("fileContent") != null)
                        {
                            // Prevent updates to the remote version of the file until
                            // we finish making changes and call CompleteUpdatesAsync.
                            CachedFileManager.DeferUpdates(file);
                            // write to file
                            await FileIO.WriteTextAsync(file, data.Value<string>("fileContent"));
                            // Let Windows know that we're finished changing the file so
                            // the other app can update the remote version of the file.
                            // Completing updates may require Windows to ask for user input.
                            FileUpdateStatus status = await CachedFileManager.CompleteUpdatesAsync(file);

                            if (status == FileUpdateStatus.Complete)
                                promise.Resolve(file);
                        }
                        else
                        {
                            promise.Resolve(file);
                        }
                    }
                );
            }
            catch (Exception ex)
            {
                promise.Reject(ex);
            }
        }
    }
}
