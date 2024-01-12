import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from '@tanstack/react-router'

import './index.css'
import { router } from './routes.tsx'
import { ChakraProvider, ColorModeScript, extendTheme, ThemeConfig } from "@chakra-ui/react";

const themeConfig: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false
}
const myTheme = extendTheme({config: themeConfig})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <>
        <ColorModeScript initialColorMode={myTheme.config.initialColorMode} />
        <React.StrictMode>
            <ChakraProvider theme={myTheme}>
                <RouterProvider router={router}/>
            </ChakraProvider>
        </React.StrictMode>
    </>
)
