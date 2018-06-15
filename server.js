"use strict";

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';

exports.handler =  (event, context, callback) => {
    const response = ReactDOMServer.renderToStaticMarkup(<App name="Server" />);    
    const body = "<div id='main'>" + response + "</div><script src='" + process.env.CDN_BUNDLE + "'></script>";
    callback(null, body);
}