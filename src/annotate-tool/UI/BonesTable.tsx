import { Button, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useMemo } from "react";
import { useTargetBoneNames, useToolStateActions } from "../ToolState.ts";

type BoneRow = {
    boneName: string
}

const columnHelper = createColumnHelper<BoneRow>()

function useBonesTableConfig() {
    const { setActiveBoneName } = useToolStateActions()
    const boneNames = useTargetBoneNames()

    const data: BoneRow[] = boneNames.map(boneName => ({ boneName }))

    const columns = useMemo(() => ([
        columnHelper.accessor('boneName', {
            header: '骨骼名称'
        }),
        columnHelper.display({
            id: 'action-choose',
            header: '操作',
            cell: props => {
                const boneName = props.row.getValue('boneName') as string
                return <Button onClick={() => setActiveBoneName(boneName)}>选择</Button>
            }
        })
    ]), [ setActiveBoneName ])

    return useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel()
    })
}

export function BonesTable() {
    const table = useBonesTableConfig()

    return (
        <Table>
            <Thead>
                {table.getHeaderGroups().map(headerGroup => (
                    <Tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => (
                            <Th key={header.id}>
                                {flexRender(header.column.columnDef.header, header.getContext())}
                            </Th>
                        ))}
                    </Tr>
                ))}
            </Thead>
            <Tbody>
                {table.getRowModel().rows.map(row => (
                    <Tr key={row.id}>
                        {row.getVisibleCells().map(cell => (
                            <Td key={cell.id}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </Td>
                        ))}
                    </Tr>
                ))}
            </Tbody>
        </Table>
    )
}