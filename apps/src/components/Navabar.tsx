import React from 'react'
import { useResolvedPath, useMatch, useNavigate } from 'react-router-dom';


interface INavigationTile {
    active? : boolean,
    title : string,
    Icon : any,
    href : string
}

const NavigationTile = ({active, Icon, title, href} : INavigationTile)=>{
    const ref = React.createRef();
    let resolved = useResolvedPath(href);
    let match = useMatch({ path: resolved.pathname, end: true });
    const navigate = useNavigate();
    return(
        <div onClick={()=> navigate(href)} className={`${ match ? 'text-blue-600 border-b-4 border-blue-600 ' : 'text-gray-500'} flex items-center gap-1 py-5 cursor-pointer`}>
            <Icon/>
            <h4>{title}</h4>
        </div>
    )
}

const Navabar = () => {

    const imgSrc = `https://th.bing.com/th/id/R.7061cadb313603d175753aa4f5801905?rik=3KNvGHiacXgUdA&pid=ImgRaw&r=0`

    const Icon2 = ()=> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>

    const Icon = ()=>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
        </svg>

    const Icon3 = ()=>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>

    const Icon4 = ()=>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
        </svg>


    const Icon5 = ()=>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>




  return (
    <nav className="w-full px-3  z-10 sticky top-0 bg-white border border-gray-200">
        <div className=" w-full max-w-7xl  m-auto flex items-center justify-between">
            <div className="w-10 h-10 bg-blue-700 rounded-lg">
                {/* LOGO */}
            </div>

            <div className="flex items-center gap-4">
                <NavigationTile  href='/'  title="Dashboard" Icon={Icon}/>
                <NavigationTile href='/search'  active title="Job Search" Icon={Icon2}/>
                <NavigationTile  href='/history'  title="History" Icon={Icon3}/>
                <NavigationTile href='/shool-up'  title="School Up" Icon={Icon4} />
                <NavigationTile  href='/events' title="Events" Icon={Icon5}/>
            </div>

            <div className="flex items-center gap-3">

                <div className="relative">
                    <div className="absolute text-white h-4 w-4 rounded-full -top-1 -right-1 bg-red-600">
                        <h4 className="grid place-items-center text-xs">1</h4>
                    </div>

                    <div className="text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                        </svg>
                    </div>

                </div>

                <div className=" flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full relative overflow-hidden">
                        <img className="w-full h-full object-cover object-center" src={imgSrc} alt="" />
                    </div>
                    <h4 className="text-gray-600">Kingsford Ashitey</h4>
                </div>

            </div>
        </div>
    </nav>
  )
}

export default Navabar