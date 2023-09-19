'use client'

import { PlusIcon } from "@heroicons/react/24/outline";
import { ChangeEvent, useState } from "react";

type CloudinaryImageType = {
  format: string;
  public_id?: string;
  url: string;
  secure_url?: string;
  width: number;
  height: number;
  original_filename: string;
  bytes: number;
  asset_id: string;
}

export type ImageType = CloudinaryImageType

const cloudName = 'hyrme'
const uploadPreset = 'yew82um7'

export default function ImageUpload({images = [], onChange}: { images?: ImageType[], onChange?: (images: ImageType[]) => void}) {
  const [localFile, setLocalfile] = useState<string>()

  const add = async (e: any) => {
    const file = e.target.files
    if(!file) return;
    setLocalfile(URL.createObjectURL(file[0]))
    const endpoint = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
    const data = new FormData()
    data.append('file', file[0])
    data.append('upload_preset', uploadPreset)
    const result:CloudinaryImageType = await fetch(endpoint, {
          method: 'POST',
          body: data
        }).then(res => res.json())
    onChange?.([...images, result])
    setLocalfile(undefined)
  }
  
  return(
    <div className='flex gap-2'>
      <label onChange={add} htmlFor="upload">
        <input type='file' title="here" id="upload" hidden />
        { localFile? 
          <img src={localFile} className="border dark:border-slate-700 rounded-md w-32 aspect-square flex object-cover" alt="new file" />
          : 
          <div className='border rounded-md w-32 aspect-square flex dark:border-slate-700'>
            <PlusIcon className='w-8 h-8 m-auto dark:stroke-slate-700'/>
          </div>
        }
      </label>
      {images.map( i => 
        <img key={i.asset_id} src={i.url} alt={i.original_filename} className='border dark:border-slate-700 w-32 aspect-square object-cover rounded-md' />
      )}
    </div>
  )
}