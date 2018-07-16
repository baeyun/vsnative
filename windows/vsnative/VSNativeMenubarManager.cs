using Newtonsoft.Json.Linq;
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

    public XNamespace XamlNamespace = "http://schemas.microsoft.com/winfx/2006/xaml/presentation";

    protected override StackPanel CreateViewInstance(ThemedReactContext reactContext)
    {
        return new StackPanel
        {
            Background = new SolidColorBrush(Windows.UI.Colors.Transparent),
            Orientation = Orientation.Horizontal
        };
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

            if (menuBtn.Value<JArray>("menu") != null)
            {
                XElement menu = new XElement(this.XamlNamespace + "MenuFlyout");
                menu.Add(
                    this.DataToMenuFlyoutItems(menuBtn.Value<JArray>("menu"))
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
            if (d.Value<JArray>("submenu") != null)
            {
                menuItems.Add(new XElement(
                    this.XamlNamespace + "MenuFlyoutSubItem",
                    new XAttribute("Text", d.Value<string>("name")),
                    this.DataToMenuFlyoutItems(d.Value<JArray>("submenu"))
                ));
            }
            else
            {
                menuItems.Add(new XElement(
                    this.XamlNamespace + "MenuFlyoutItem",
                    new XAttribute("Text", d.Value<string>("name"))
                ));
            }
        }

        return menuItems;
    }
}