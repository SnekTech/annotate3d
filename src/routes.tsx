import { RootRoute, Route, Router } from "@tanstack/react-router";
import App from "./App";
import { ToolRoot } from "./label-tool/ToolRoot.tsx";

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
    component: ToolRoot
})

const routeTree = rootRoute.addChildren([indexRoute, playgroundRoute])

export const router = new Router({routeTree})

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

