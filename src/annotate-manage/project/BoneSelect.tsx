import { Bone } from "three";
import { create } from "zustand";
import { Checkbox, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { ChangeEvent } from "react";

interface BoneSelectState {
    bones: Bone[]
    selectedBones: Set<Bone>
    initBones: (bones: Bone[]) => void
    activeBone?: Bone
    setActiveBone: (bone: Bone) => void
}

export const useBoneSelectState = create<BoneSelectState>()(set => ({
    bones: [],
    selectedBones: new Set<Bone>(),
    initBones: (bones: Bone[]) => set(() => ({ bones, selectedBones: new Set<Bone>() })),
    setActiveBone: (bone: Bone) => set(() => ({ activeBone: bone }))
}))

export function BoneSelect() {
    const { bones, selectedBones, setActiveBone } = useBoneSelectState()

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
                            const chosen = selectedBones.has(bone)
                            return (
                                <Tr key={bone.name} onMouseEnter={() => setActiveBone(bone)}>
                                    <Td>{bone.name}</Td>
                                    <Td>
                                        <Checkbox isChecked={chosen}
                                                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                                      const isChosen = e.target.checked
                                                      if (isChosen) {
                                                          selectedBones.add(bone)
                                                      }
                                                      else {
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