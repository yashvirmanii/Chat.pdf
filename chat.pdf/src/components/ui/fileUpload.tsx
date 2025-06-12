 "use client"
import { Inbox } from 'lucide-react'
import React from 'react'
import {useDropzone} from 'react-dropzone'

const FileUpload = () => {
    const {getRootProps,getInputProps} = useDropzone({
        accept:{'application/pdf':['.pdf']},
        maxFiles:1,
        onDrop:(acceptedFile)=>console.log(acceptedFile)
    })
  return (
    <div className='p-2 bg-white rounded-xl cursor-pointer'>
        <div {...getRootProps({
        className:'p-7 border-dashed border-2 rounded-xl cursor--pointer bg-grey-50 flex justify-center items-center flex-col'
    })}>
        <input {...getInputProps()}/>
        <>
        <Inbox className='w-10 h-10 text-blue-500'/>
        <p className='mt-2 text-sm text-slate-400'>Drop PDF here</p>
        </>
        </div>
    </div>
  )
}

export default FileUpload