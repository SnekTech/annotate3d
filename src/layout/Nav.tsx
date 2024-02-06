import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function Nav() {

    return (
        <Breadcrumb separator={'-'}>
            <BreadcrumbItem>
                <BreadcrumbLink as={Link} to={'home'}>
                    Home
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink as={Link} to={'tool'}>
                    Tool
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink as={Link} to={'project-create'}>
                    Project
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink as={Link} to={'task-create'}>
                    Task
                </BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    );
}