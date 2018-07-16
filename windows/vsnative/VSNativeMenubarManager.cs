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
using Windows.UI.Xaml.Markup;

public class VSNativeMenubarManager : SimpleViewManager<StackPanel>
{

    public override string Name
    {
        get
        {
            return "VSNativeMenubar";
        }
    }

    public ThemedReactContext reactContext;

    public XNamespace XamlNamespace = "http://schemas.microsoft.com/winfx/2006/xaml/presentation";

    protected override StackPanel CreateViewInstance(ThemedReactContext reactContext)
    {
        // Set context
        this.reactContext = reactContext;

        return new StackPanel
        {
            Background = new SolidColorBrush(Windows.UI.Colors.Transparent),
            Orientation = Orientation.Horizontal
        };
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

    [ReactProp("data")]
    public void SetMenuData(StackPanel view, IList<JObject> data)
    {
        foreach (JObject menuBtn in data)
        {
            Button button = new Button
            {
                Content = menuBtn.Value<string>("name"),
                Background = new SolidColorBrush(Windows.UI.Colors.Transparent),
                BorderThickness = new Thickness(0, 0, 0, 0),
                FontSize = 12
            };

            if (menuBtn.Value<JArray>("submenu") != null)
            {
                XElement menu = new XElement(this.XamlNamespace + "MenuFlyout");

                menu.Add(
                    this.DataToMenuFlyoutItems(menuBtn.Value<JArray>("submenu"))
                );

                button.Flyout = (MenuFlyout)XamlReader.Load(menu.ToString());
            }

            view.Children.Add(button);
        }
    }

    public List<XElement> DataToMenuFlyoutItems(JArray data)
    {
        List<XElement> menuItems = new List<XElement>();

        foreach (JObject d in data)
        {
            if (d.Value<bool>("seperator"))
            {
                menuItems.Add(new XElement(this.XamlNamespace + "MenuFlyoutSeparator"));
                continue;
            }
            
            string menuItemXName = (d.Value<JArray>("submenu") != null)
                ? "MenuFlyoutSubItem"
                : d.Value<bool>("toggle") ? "ToggleMenuFlyoutItem" : "MenuFlyoutItem";

            XElement menuItem = new XElement(
                this.XamlNamespace + menuItemXName,
                new XAttribute("Text", d.Value<string>("name"))
            );

            if (d.Value<JArray>("submenu") != null)
                menuItem.Add(
                    this.DataToMenuFlyoutItems(d.Value<JArray>("submenu"))
                );

            menuItems.Add(menuItem);
        }

        return menuItems;
    }
}