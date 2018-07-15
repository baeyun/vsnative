using Newtonsoft.Json.Linq;
using ReactNative.UIManager;
using ReactNative.UIManager.Annotations;
using System;
using System.Collections.Generic;
using Windows.Foundation;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Media;

public class VSNativeMenuButtonManager : SimpleViewManager<Button>
{

    public override string Name
    {
        get
        {
            return "VSNativeMenuButton";
        }
    }

    protected override Button CreateViewInstance(ThemedReactContext reactContext)
    {
        return new Button
        {
            Background = new SolidColorBrush(Windows.UI.Colors.Transparent),
            BorderThickness = new Thickness(0, 0, 0, 0),
            FontSize = 12
        };
    }

    [ReactProp("content")]
    public void SetContent(Button view, string content = "")
    {
        view.Content = content;
    }
}