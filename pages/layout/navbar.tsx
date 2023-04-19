import { SlList } from "react-icons/sl";
import { useRef, useState } from 'react';
import { Link } from "react-scroll";
export default function Navbar(props: any) {
    const [hidden, setHidden] = useState(false)
    const [listHeader] = useState(['Home', 'About', 'Projects', 'Contact'])
    return <div className='flex-col fixed w-full z-10'>
        <div className="h-14 bg-white  flex items-center w-full text-black relative shadow-2xl">
            <div className="grow hidden justify-start px-10 md:flex text-2xl">Fluke jaja.dev</div>
            <div className="grow hidden justify-end px-10  md:flex">
                <ul className="list-none flex space-x-5 ">
                    {
                        listHeader.map((item, index) => {
                            return <li key={index} className="cursor-pointer px-3 py-1 rounded-md hover:shadow-md hover:shadow-pink-600
                            duration-150
                            ">
                                <Link to={item} spy={true} smooth={true} offset={0} duration={500}>{item}</Link>
                            </li>
                        }
                        )
                    }
                </ul>
            </div>
            <div className="grow px-10 flex justify-end md:hidden">
                <SlList size={25} onClick={() => setHidden(!hidden)} />
            </div>

        </div>
        <div className={`${hidden ? 'w-auto px-10' : 'w-0'} h-screen shadow-2xl md:hidden transition-all duration-300 absolute inset-y-0 left-0  bg-white flex-col  text-black`}>
            <div className='h-14'></div>
            {hidden && <ul className='list-none space-y-5'>
                <li className=" text-2xl">Fluke jaja.dev</li>
                {
                    listHeader.map((item, index) => {
                        return <li key={index} className="cursor-pointer">
                            <Link to={item} spy={true} smooth={true} offset={0} duration={500}>{item}</Link>
                        </li>
                    }
                    )
                }
            </ul>}
        </div>
        {/* <div className="hidden"><Home header={propsText} /></div> */}
    </div>
}