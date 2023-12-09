import React, { useState } from 'react'
import Image from 'next/image'

function DropZone() {
  const [file, setFile] = useState<File | null>(null);
  return (
    <div className="flex items-center justify-center w-full">
        <label className="flex flex-col p-8 items-center justify-center h-full w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-100">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Image src={"/images/icon_4.png"} alt='icon' width={100} height={100} />
                <p className="my-4 text-md text-gray-500 dark:text-gray-400"><span className="font-semibold">Bấm vào đây để tải lên tài liệu</span></p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" onInput={(e) => {setFile(e.target.value)}}/>
        </label>
    </div>
  )
}

export default DropZone