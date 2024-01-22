import { useTexture } from "@react-three/drei";

interface ReferenceImageProps {
    imagePath: string
}

export const TestFramePath = 'test-assets/frames/image-005.png';

export function ReferenceImage(props: ReferenceImageProps) {

    const image = useTexture(props.imagePath)

    return (
        <mesh scale={80} position-z={-100}>
            <planeGeometry attach={'geometry'}/>
            <meshBasicMaterial map={image}/>
        </mesh>
    )
}