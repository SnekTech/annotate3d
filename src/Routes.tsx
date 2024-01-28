import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { ErrorPage } from "./layout/error-page.tsx";
import { ToolRoot } from "./label-tool/ToolRoot.tsx";
import { AnnotateProject } from "./annotate-manage/AnnotateProject.tsx";

export const router = createBrowserRouter([
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
            },
            {
                path: 'project',
                element: <AnnotateProject/>
            }
        ]
    },
])
