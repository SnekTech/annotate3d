import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { ErrorPage } from "./layout/error-page.tsx";
import { ToolRoot } from "./label-tool/ToolRoot.tsx";
import { AnnotateProjectCreate } from "./annotate-manage/project/AnnotateProjectCreate.tsx";
import { AnnotateTaskCreate } from "./annotate-manage/task/AnnotateTaskCreate.tsx";
import { AssignedTasks } from "./annotate-manage/task/AssignedTasks.tsx";

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
                path: 'project-create',
                element: <AnnotateProjectCreate/>
            },
            {
                path: 'task-create',
                element: <AnnotateTaskCreate/>
            },
            {
                path: 'assigned-tasks',
                element: <AssignedTasks/>
            }
        ]
    },
])
