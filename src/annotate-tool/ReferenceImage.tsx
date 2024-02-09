import { useTexture } from "@react-three/drei";

interface ReferenceImageProps {
    imagePath: string
}

export const TestFramePath = '/frames/image-003.png';

export function ReferenceImage(props: ReferenceImageProps) {
    console.log(props.imagePath);

    const image = useTexture(props.imagePath)

    return (
        <mesh scale={80} position-z={-100}>
            <planeGeometry attach={'geometry'}/>
            <meshBasicMaterial map={image}/>
        </mesh>
    )
}