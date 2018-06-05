import React from "react";

const ThemeContext = React.createContext();

export const themeContext={
    ThemeProvider: ThemeContext.Provider,
    ThemeConsumer: ThemeContext.Consumer
};