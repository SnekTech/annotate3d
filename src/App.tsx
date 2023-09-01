import { CssBaseline } from "@mui/material";
import Tool from "./annotate-tool/Tool.tsx";
import Home from "./task-management/Home.tsx";

import {
    Outlet,
    RouterProvider,
    Link,
    Router,
    Route,
    RootRoute
} from "@tanstack/react-router"

const rootRoute = new RootRoute({
    component: Root
})

function Root() {
    return (
        <>
            <div>
                <Link to="/">Home</Link>
                <Link to="/tool">Tool</Link>
            </div>
            <hr/>
            <Outlet/>
        </>
    )
}

const indexRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/',
    component: Home,
})

const aboutRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/tool',
    component: Tool,
})

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute])
const router = new Router({routeTree})

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

function App() {

    return (
        <>
            <CssBaseline/>
            <RouterProvider router={router}/>
        </>
    )
}

export default App
