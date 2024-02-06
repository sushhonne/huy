import React from 'react';
import { useState, useRef } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";

export default function Accordion(props) {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    return (
        <div className='py-3 border-b-white/20 border-b-[2px]'>
            <div className='flex justify-between items-center font-medium cursor-pointer list-none' onClick={() => setOpen(!open)}>
                <span className="text-[52px] font-extrabold text-[#bfbfb1] hover:translate-x-4 duration-300 delay-200">
                    <b>{props.title}</b>
                </span>
                {open ? (
                    <span style={{ transition: "all ease-in-out 0.8s" }}>
                        <FaMinus color='#bfbfb1' size={24} />
                    </span>
                ) : (
                    <span style={{ transition: "all ease-in-out 0.8s" }}>
                        <FaPlus color='#bfbfb1' size={24} />
                    </span>
                )}
            </div>
            <div className='overflow-hidden' ref={ref} style={{ height: open ? `${ref.current.scrollHeight}px` : 0, transition: "all ease-in-out 0.5s" }}>
                {props.children}
            </div>
        </div>
    );
}
