import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Center } from "@chakra-ui/react";
import axios from "axios"

export function AnnotateProject() {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        console.log(acceptedFiles);
        const formData = new FormData()
        formData.append('model', acceptedFiles[0])
        axios.post('http://localhost:3000/annotate-project/model-upload', formData)
            .then(res => console.log(res))
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div>
            <p>上传模型</p>
            <Center
                borderWidth={'medium'}
                borderStyle={'dotted'} height={100} width={500}
                {...getRootProps()}>
                <input {...getInputProps()}/>
                {
                    isDragActive ?
                        <p>Drop the files here ...</p> :
                        <p>Drag 'n' drop some files here, or click to select files</p>
                }
            </Center>
            <p></p>
        </div>
    )
}