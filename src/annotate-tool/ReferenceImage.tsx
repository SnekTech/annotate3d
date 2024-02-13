import { useTexture } from "@react-three/drei";

interface ReferenceImageProps {
    imagePath?: string
}

export const TestFramePath = '/frames/image-003.png';

export const FramePrefix = 'frame'
export const ImgExtension = '.png'

export function ReferenceImage({ imagePath }: ReferenceImageProps) {

    const image = useTexture(imagePath || TestFramePath)

    return (
        <mesh scale={80} position-z={-100}>
            <planeGeometry attach={'geometry'}/>
            <meshBasicMaterial map={image}/>
        </mesh>
    )
}