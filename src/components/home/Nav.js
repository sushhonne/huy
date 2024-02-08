// import React, { useState } from 'react'
// import { motion } from 'framer-motion';
// import { usePathname } from 'next/navigation';
// import { menuSlide } from './Anim';
// import Links from './Links';


// const navItems = [
//   {
//     title: "Home",
//     href: "/",
//   },
//   {
//     title: "Work",
//     href: "/work",
//   },
//   {
//     title: "About",
//     href: "/about",
//   },
//   {
//     title: "Contact",
//     href: "/contact",
//   },
// ]

// export default function Nav() {

//   const pathname = usePathname();
//   const [selectedIndicator, setSelectedIndicator] = useState(pathname);

//   return (
//     <motion.div 
//       variants={menuSlide} 
//       initial="initial" 
//       animate="enter" 
//       exit="exit" 


//       className="menu"
//       >
//        <div className="menu-body">
//             <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className="menu-nav">
//                     <div className="menu-header">
//                         <p>Navigation</p>
//                     </div>
//                     {
//                       navItems.map( (data, index) => {
//                         return <Links
//                         key={index} 
//                         data={{...data, index}} 
//                         isActive={selectedIndicator == data.href} 
//                         setSelectedIndicator={setSelectedIndicator}>
//                         </Links>
//                       })
//                     }
//             </div>
//             <div className="menu-footer">
//                 <a>Awwwards</a>
//                 <a>Instagram</a>
//                 <a>Dribble</a>
//                 <a>LinkedIn</a>
//             </div>
//         </div>
//     </motion.div>
//   )
// }

import React from 'react'

export default function Nav() {
  return (
    <div>Nav</div>
  )
}
