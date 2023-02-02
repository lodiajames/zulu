import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import { HomeIcon, InformationCircleIcon, PhoneIcon, UserIcon } from '@heroicons/react/24/solid'


export default function Header() {
  return (
    <div className=" select-none p-6 bg-[#121212] text-white flex flex-col items-center sm:flex-row sm:justify-between">
        <div className="flex">
          <HeaderIcon Icon={HomeIcon} title="HOME"/>
          <HeaderIcon Icon={UserIcon} title="ACCOUNT"/>
          <HeaderIcon Icon={PhoneIcon} title="CONTACT"/>
          <HeaderIcon Icon={InformationCircleIcon} title="ABOUT"/>
        </div>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1150px-IMDB_Logo_2016.svg.png?20200406194337" width={100} height={100} className='my-3 cursor-pointer active:brightness-110'/>
        
    </div>
  )
}
