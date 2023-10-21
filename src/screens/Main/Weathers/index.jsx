import React from 'react';
import {View, Text} from "react-native";
import NavigationBackBar from "../../../components/UI/NavigationBackBar";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import WebView from "react-native-webview";

const Index = (props) => {
    const selectLocation = useSelector(state => state.locationState);
    const {i18n} = useTranslation();
    const darkModeSelector = useSelector(state => state.theme.darkMode);
    const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>IFrame Example</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            margin: 0;
            padding: 0;
          }
           iframe {
    width: 100vw;
    height: 300vh;
    border: none;
    overflow: hidden;    
  }
        iframe {
        transform: translateY(-22%);
        }
        </style>
      </head>
      <body>
        <iframe src="https://www.meteo.tj/${i18n.language}/weather-forecast"></iframe>
      </body>
    </html>
  `;


    // https://www.meteo.tj/${i18n.language}/weather-forecast
    return (
        <>
            <NavigationBackBar props={props}/>
            <WebView
                originWhitelist={['*']}
                className={" h-screen w-full"}
                source={{html: htmlContent}}
            />
        </>
    );
};

export default Index;