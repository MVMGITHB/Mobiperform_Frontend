"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import { base_url } from "../Helper/helper";


import Image from "next/image";



export default function Popup3({ data }) {
    const [visible, setVisible] = useState(false);
    const [showClose, setShowClose] = useState(false);


    useEffect(() => {
        const showTimer = setTimeout(() => setVisible(true), 8000);
        const closeTimer = setTimeout(() => setShowClose(true), 8000);
        return () => {
            clearTimeout(showTimer);
            clearTimeout(closeTimer);
        };
    }, []);

    if (!visible) return null;

    return (


        // <Link
        //     href="https://tracking.ajio.business/click?pid=87&offer_id=2&sub1=pass_your_subid%20&redirect=https://www.ajio.com/s/50to90percentoff-140961"
        //     target="_blank"
        //   >
        //     <img
        //       src="./ajionew.jpeg"
        //       alt="Tata Neu Event"
        //       className="w-full h-[480px] object-conver rounded-md"
        //     />
        
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-2">
            <div className="relative min-w-[65%] flex justify-center  rounded-2xl overflow-hidden">

                {showClose && (
                    <button
                        onClick={() => setVisible(false)}
                        className="absolute cursor-pointer top-3 right-60 z-20 bg-white/80 hover:bg-white rounded-full p-1 transition"
                    >
                        <X size={20} className="text-black" />
                    </button>
                )}

                <Link
                    href={
                        data.linkArray && data.linkArray[0]
                            ? data.linkArray[0]
                            : 'https://tracking.ajio.business/click?pid=87&offer_id=2&sub1=pass_your_subid%20&redirect=https://www.ajio.com/s/50to90percentoff-140961'
                    }
                    target="_blank"
                    className="relative"
                >

                    {
                        data.images[0] ? (<> <img
                            src={`${base_url}${data.images[0]}`}
                            alt="Popup"
                            className=" hidden md:block h-auto max-h-[60vh] object-contain rounded-2xl "
                        /></>) : (<> 
                        
                        <img
                            src="/ajionew.jpeg"
                            alt="Popup"
                            // fill
                            className="hidden md:block h-auto max-h-[60vh] object-contain rounded-2xl "
                        />
                        
                        </>)
                    }

                      

                      {
                          data.images[0] && data.images[1] &&(

                            <img
                            src={`${base_url}${data.images[1]}`}
                            alt="Popup"
                            // fill
                            className=" block md:hidden h-auto max-h-[60vh] object-contain rounded-2xl "
                            />
                          )
                      }
                    
                      {
                          data.images[0] && !data.images[1] &&(

                            <img
                            src={`${base_url}${data.images[0]}`}
                            alt="Popup"
                            // fill
                            className=" block md:hidden h-auto max-h-[60vh] object-contain rounded-2xl"
                            />
                          )
                      }
                    
                      {
                          !data.images[0] && !data.images[1] &&(

                            <Image
  src="/ajionew.webp"
  alt="Popup"
  width={1920}
  height={1080}
  className="block md:hidden h-auto max-h-[60vh] object-contain rounded-2xl"
  priority
/>
                          )
                      }
                    

                   


                </Link>
            </div>
        </div>
    );
}
