import { RootRoute, Route, Router } from "@tanstack/react-router";
import App from "./App";
import { LabelTool } from "./label-tool/LabelTool.tsx";

const rootRoute = new RootRoute({
    component: App
})

const indexRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/',
    component: () => 'Home, sweet home~'
})

const playgroundRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/tool',
    component: LabelTool
})

const routeTree = rootRoute.addChildren([indexRoute, playgroundRoute])

export const router = new Router({routeTree})

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

