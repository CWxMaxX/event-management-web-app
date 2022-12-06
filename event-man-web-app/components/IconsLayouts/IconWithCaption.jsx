import React from 'react'
import {ICONS} from "../../helpers/iconsPath";
import Image from "next/image";
import {SectionColumn} from "../Layouts/sectionLayouts";

export const IconWithCaption =({path,size,title})=>{
    return <SectionColumn  className={"items-center"} ><Image src={path} width={size} height={size} layout={"fixed"}  />
        <span className='text-left text-xs text-zinc-400  mt-2 max-[425px]:text-[10px]' >{title}</span>
    </SectionColumn>
}