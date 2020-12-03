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

| Option   | Information                                                     |
| -------- | --------------------------------------------------------------- |
| `siteID` | Your Site ID as provided in the Site Settings page of Panelbear |

## Notes

Please see the [Panelbear Documentation](https://panelbear.com/docs/) for explanation of the Panelbear API
