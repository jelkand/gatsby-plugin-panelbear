# gatsby-plugin-panelbear

Easily add Panelbear analytics to a Gatsby site. Configured to work in SPA mode and track page events.

[Panelbear](https://panelbear.com/docs) is a analytics provider that emphasises simplicity, speed, and privacy.

## Install

Yarn:

`yarn add gatsby-plugin-panelbear`

NPM:

`npm install --save gatsby-plugin-panelbear`

## Usage

In your `gatsby-config.js` file, include:

```
{
  resolve: `gatsby-plugin-panelbear`,
  options: {
    siteID: 'YOUR_SITE_ID',
  },
}
```

## Options

| Option      | Required? | Default | Information                                                                                                                          |
| ----------- | :-------: | :-----: | ------------------------------------------------------------------------------------------------------------------------------------ |
| `siteID`    |    yes    |   n/a   | Your Site ID as provided in the Site Settings page of Panelbear.                                                                     |
| `debug`     |    no     | `false` | Write Panelbear log messages to the browser console and send events from localhost to panelbear. Please do not enable in production. |
| `autoTrack` |    no     | `true`  | By default, page events are sent when the route updates. Disable for finer grained control over when page view events are sent.      |

## Notes

**Custom Events**

You can use `window.panelbear('track', 'MyCustomEvent')` to send an event. See the [Panelbear Docs](https://panelbear.com/docs/custom-events/) for information on the events API.

**Use alongside Panelbear.js**

Panelbear also provides an npm package for loading the script and interacting with Panelbear. This package is preferable to the plugin if you need types, or want to tailor Panelbear for your specific use case.

For the time being, you _can_ use `panelbear-js` alongside this plugin. You can load the script through the plugin, and use the library for calls such as `Panelbear.track('MyEvent')`. Do _not_ call `Panelbear.load()` if you have the plugin installed. This **is not intentional functionality** and shouldn't be counted on in production.

## FAQ and Docs

Please see the [Panelbear Documentation](https://panelbear.com/docs/) for explanation of the Panelbear API.
