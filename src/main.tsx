import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider, ColorModeScript, extendTheme, ThemeConfig } from "@chakra-ui/react";

import './index.css'
import App from "./App.tsx";
import { ErrorPage } from "./layout/error-page.tsx";
import { ToolRoot } from "./label-tool/ToolRoot.tsx";

const themeConfig: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false
}
const myTheme = extendTheme({ config: themeConfig })

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: 'home',
                element: 'Home, sweet home~'
            },
            {
                path: 'tool',
                element: <ToolRoot/>
            }
        ]
    },

])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <>
        <ColorModeScript initialColorMode={myTheme.config.initialColorMode}/>
        <React.StrictMode>
            <ChakraProvider theme={myTheme}>
                <RouterProvider router={router}/>
            </ChakraProvider>
        </React.StrictMode>
    </>
)
