using Newtonsoft.Json.Linq;
using ReactNative.Bridge;
using ReactNative.Collections;
using System;
using System.Collections.Generic;
using Windows.Storage;
using Windows.Storage.Pickers;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace vsnative
{
    class VSNativeFSManager : ReactContextNativeModuleBase
    {
        public VSNativeFSManager(ReactContext reactContext)
            : base(reactContext)
        {
        }

        public override string Name
        {
            get
            {
                return "VSNativeFSManager";
            }
        }

        [ReactMethod]
        public async void pickFileDialogue(IPromise promise)
        {
            try
            {
                var openPicker = new FileOpenPicker();
                openPicker.ViewMode = PickerViewMode.List;
                openPicker.SuggestedStartLocation = PickerLocationId.ComputerFolder;
                openPicker.FileTypeFilter.Add("*");

                CoreApplication.MainView.CoreWindow.Dispatcher.RunAsync(
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

        [ReactMethod]
        public async void pickFolderDialogue(IPromise promise)
        {
            try
            {
                FolderPicker folderPicker = new FolderPicker();
                folderPicker.SuggestedStartLocation = PickerLocationId.ComputerFolder;
                folderPicker.FileTypeFilter.Add("*");

                CoreApplication.MainView.CoreWindow.Dispatcher.RunAsync(
                    CoreDispatcherPriority.Normal,
                    async () =>
                    {
                        StorageFolder folder = await folderPicker.PickSingleFolderAsync();

                        promise.Resolve(folder);
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
