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
        XElement menu = new XElement(this.XamlNamespace + "MenuFlyout",
            new XElement(this.XamlNamespace + "MenuFlyoutItem", new XAttribute("Text", "Open")),
            new XElement(this.XamlNamespace + "MenuFlyoutSubItem",
                new XAttribute("Text", "Send to"),
                new XElement(this.XamlNamespace + "MenuFlyoutItem", new XAttribute("Text", "Bluetooth")),
                new XElement(this.XamlNamespace + "MenuFlyoutItem", new XAttribute("Text", "Desktop (shortcut)")),
                new XElement(this.XamlNamespace + "MenuFlyoutSubItem",
                    new XAttribute("Text", "Compressed file"),
                    new XElement(this.XamlNamespace + "MenuFlyoutItem", new XAttribute("Text", "Compress and email")),
                    new XElement(this.XamlNamespace + "MenuFlyoutItem", new XAttribute("Text", "Compress to .7z")),
                    new XElement(this.XamlNamespace + "MenuFlyoutItem", new XAttribute("Text", "Compress to .zip"))
                )
            )
        );

        view.Children.Add(
            new Button
            {
                Content = "File",
                Background = new SolidColorBrush(Windows.UI.Colors.Transparent),
                BorderThickness = new Thickness(0, 0, 0, 0),
                FontSize = 12,
                Flyout = (MenuFlyout)XamlReader.Load(menu.ToString())
            }
        );

        foreach (JObject menuBtn in data)
            view.Children.Add(
                new Button
                {
                    Content = menuBtn.Value<string>("name"),
                    Background = new SolidColorBrush(Windows.UI.Colors.Transparent),
                    BorderThickness = new Thickness(0, 0, 0, 0),
                    FontSize = 12
                }
            );
    }
}