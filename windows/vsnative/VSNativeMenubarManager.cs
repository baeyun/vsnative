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

            if (menuBtn.Value<JArray>("submenu") != null)
            {
                XElement menu = new XElement(this.XamlNamespace + "MenuFlyout");

                menu.Add(
                    this.DataToMenuFlyoutItems(menuBtn.Value<JArray>("submenu"))
                );

                // Set dropdown min width
                //menu.Add(new XAttribute("MenuFlyoutPresenterStyle",
                //    new XElement(this.XamlNamespace + "Style",
                //        new XAttribute("TargetType", "MenuFlyoutPresenter"),
                //        new XElement(this.XamlNamespace + "Setter",
                //            new XAttribute("Property", "MinWidth"),
                //            new XAttribute("Value", "250")
                //        )
                //    )
                //));

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

            // Set icon
            //if (!string.IsNullOrEmpty(d.Value<string>("icon")))
            //    menuItem.Add(new XAttribute("Icon",
            //        new XElement(this.XamlNamespace + "FontIcon", new XAttribute("Glyph", d.Value<string>("icon")))
            //    ));

            if (d.Value<JArray>("submenu") != null)
                menuItem.Add(
                    this.DataToMenuFlyoutItems(d.Value<JArray>("submenu"))
                );

            menuItems.Add(menuItem);
        }

        return menuItems;
    }
}