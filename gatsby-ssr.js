import React from "react";

export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  const { siteID } = pluginOptions;

  if (!siteID) console.error("Must provide a Panelbear Site ID.");

  const snippet = `window.panelbear = window.panelbear || function(){ window.panelbearQ = window.panelbearQ || []; panelbearQ.push(arguments); };panelbear('config', { site: '${siteID}' });`;

  setHeadComponents([
    <script
      async
      src="https://cdn.panelbear.com/analytics.js?site=EjWw2y2d5PY"
    ></script>,
    <script
      key="plugin-panelbear"
      dangerouslySetInnerHTML={{ __html: snippet }}
    />,
  ]);
};
