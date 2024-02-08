
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { slide } from './Anim';

// export default function Links({data, isActive, setSelectedIndicator}) {
  
//     const { title, href, index} = data;
  
//     return (
//       <motion.div 
//         className="link-div"
//         onMouseEnter={() => {setSelectedIndicator(href)}} 
//         custom={index} 
//         variants={slide} 
//         initial="initial" 
//         animate="enter" 
//         exit="exit"
//       >
//         <motion.div 
//           variants={scale} 
//           animate={isActive ? "open" : "closed"} 
//           className="indicator">
//         </motion.div>
//         <Link href={href}>{title}</Link>
//       </motion.div>
//     )
// }

import React from 'react'

export default function Links() {
  return (
    <div>Links</div>
  )
}
