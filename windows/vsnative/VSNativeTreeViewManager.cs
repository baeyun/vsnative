using Newtonsoft.Json.Linq;
using ReactNative.Bridge;
using ReactNative.Modules.Core;
using ReactNative.UIManager;
using ReactNative.UIManager.Annotations;
using System;
using System.Collections.Generic;
using System.Xml.Linq;
using Windows.Foundation;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Media;
using Windows.UI.Popups;

public class VSNativeTreeViewManager : SimpleViewManager<TreeView>
{

    public override string Name
    {
        get
        {
            return "VSNativeTreeView";
        }
    }

    public ThemedReactContext reactContext;

    protected override TreeView CreateViewInstance(ThemedReactContext reactContext)
    {
        // Set context
        this.reactContext = reactContext;

        return new TreeView();
    }

    // Emit events on the JS side
    internal RCTNativeAppEventEmitter Emitter
    {
        get
        {
            // @todo make singleton?
            return this.reactContext.GetJavaScriptModule<RCTNativeAppEventEmitter>();
        }
    }

    [ReactProp("path")]
    public void SetMenuData(TreeView view, string folderPath)
    {
        TreeViewNode rootNode = new TreeViewNode() { Content = "Flavors" };
        rootNode.IsExpanded = true;
        rootNode.Children.Add(new TreeViewNode() { Content = "Vanilla" });
        rootNode.Children.Add(new TreeViewNode() { Content = "Strawberry" });
        rootNode.Children.Add(new TreeViewNode() { Content = "Chocolate" });

        view.RootNodes.Add(rootNode);
    }

    private static void ListDirectory(TreeView treeView, string path)
    {
        treeView.Nodes.Clear();

        var stack = new Stack<TreeNode>();
        var rootDirectory = new DirectoryInfo(path);
        var node = new TreeNode(rootDirectory.Name) { Tag = rootDirectory };
        stack.Push(node);

        while (stack.Count > 0)
        {
            var currentNode = stack.Pop();
            var directoryInfo = (DirectoryInfo)currentNode.Tag;
            foreach (var directory in directoryInfo.GetDirectories())
            {
                var childDirectoryNode = new TreeNode(directory.Name) { Tag = directory };
                currentNode.Nodes.Add(childDirectoryNode);
                stack.Push(childDirectoryNode);
            }
            foreach (var file in directoryInfo.GetFiles())
                currentNode.Nodes.Add(new TreeNode(file.Name));
        }

        treeView.Nodes.Add(node);
    }

    public async void HandleMenuItemClick(string msg = "NO MSG")
    {
        //Emitter.emit("MenubarItemClick", JObject.Parse("{test: true}"));
        var messageDialog = new MessageDialog(msg);
        await messageDialog.ShowAsync();
    }
}
