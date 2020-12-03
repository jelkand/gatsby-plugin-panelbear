import React from "react";

export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  const { siteID, debug = false, autoTrack = true } = pluginOptions;

  if (!siteID) {
    console.error("Must provide a Panelbear Site ID.");
  }

  if (debug) {
    console.warn(
      "Debug mode is on. Please do not use debug mode in production."
    );
  }

  const snippet = `window.panelbear = window.panelbear || function(){ window.panelbearQ = window.panelbearQ || []; 
      panelbearQ.push(arguments); };panelbear('config', { site: '${siteID}', spaMode: 'history', autoTrack: ${autoTrack}, debug: ${debug} });`;

  setHeadComponents([
    <script
      key="panelbear-src"
      async
      src={`https://cdn.panelbear.com/analytics.js?site=${siteID}`}
    ></script>,
    <script
      key="plugin-panelbear"
      dangerouslySetInnerHTML={{ __html: snippet }}
    />,
  ]);
};
