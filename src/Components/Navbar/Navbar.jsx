import React from 'react'
import './Navbar.scss'
import {motion} from "framer-motion"
import Sidebar from '../sidebar/Sidebar'
const Navbar = () => {
  return ( 
    <div className='navbar'>
        <Sidebar/>
        <div className='wrapper'>
            <motion.span
            initial={{opacity:0,scale:0.5}}
            animate={{opacity:1,scale:1}}
            transition={{duration:0.5}}
            >Abhishek</motion.span>
            <div className='social'>
                <a href='https://github.com/Abhishek2310k'><img src='/github.png' alt='/'/></a>
                <a href='https://www.linkedin.com/in/abhishek-kumar-031a81235/'><img src='/linkedin.png' alt='/'/></a>
                {/* <a href='#'><img src='/instagram.png' alt='/'/></a> */}
                <a href='https://codeforces.com/profile/AbhishekKu_AK47'><img src='/codeforces.png' alt='/'/></a>
                <a href='https://www.codechef.com/users/abhishek_2310a'><img src='/codechef.png' alt='/'/></a>
                <a href='https://leetcode.com/abhishek_0040/'><img src='/leetcode.png' alt='/'/></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar