import { Bone } from "three";
import { Button, ListItem, UnorderedList } from "@chakra-ui/react";

type BoneListProps = {
    bones: Bone[]
    onChoose: (bone: Bone) => void
}

export function BoneList(props: BoneListProps) {

    const {bones, onChoose} = props

    return (
        <>
            <UnorderedList styleType={'none'} spacing={3}>
                {bones.map(bone => {
                    const boneName = bone.name
                    return (
                        <ListItem key={boneName}>
                            <Button onClick={() => onChoose(bone)}>
                                {boneName}
                            </Button>
                        </ListItem>
                    )
                })}
            </UnorderedList>
        </>
    )
}