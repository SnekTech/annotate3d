import { Button, ListItem, UnorderedList } from "@chakra-ui/react";

type BoneListProps = {
    boneNames: string[]
    onChoose: (boneName: string) => void
}

export function BoneList(props: BoneListProps) {

    const { onChoose, boneNames } = props

    return (
        <>
            <UnorderedList styleType={'none'} spacing={3}>
                {boneNames.map(boneName => {
                    return (
                        <ListItem key={boneName}>
                            <Button onClick={() => onChoose(boneName)}>
                                {boneName}
                            </Button>
                        </ListItem>
                    )
                })}
            </UnorderedList>
        </>
    )
}