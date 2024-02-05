import { Checkbox, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { useBones, useBoneSelectStoreActions, useSelectedBones } from "./BonesViewerStore.ts";

export function BoneSelectTable() {
    const bones = useBones()
    const selectedBones = useSelectedBones()
    const { setActiveBone } = useBoneSelectStoreActions()

    return (
        <>
            <TableContainer maxH={600}>
                <Table size={'sm'}>
                    <TableCaption>选择目标骨骼</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>骨骼名称</Th>
                            <Th>是否选中</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {bones.map(bone => {
                            return (
                                <Tr key={bone.name} onMouseEnter={() => setActiveBone(bone)}>
                                    <Td>{bone.name}</Td>
                                    <Td>
                                        <Checkbox defaultChecked={selectedBones.has(bone)}
                                                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                                      const checked = e.target.checked
                                                      if (checked) {
                                                          selectedBones.add(bone)
                                                      } else {
                                                          selectedBones.delete(bone)
                                                      }
                                                  }}/>
                                    </Td>
                                </Tr>
                            )
                        })}
                    </Tbody>
                </Table>
            </TableContainer>

        </>
    )
}