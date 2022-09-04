import Image from "next/image";
import loginimg from "../public/prueba64.png"
export default function Login(){
    return <div className="h-screen max-w-[1150px] flex mx-auto">
        <div className="w-1/2 border-solid border-[1px] border-[#FF3839]">
            <Image src ="/prueba64.png"width={565} height={750}></Image>
        </div>
        <div className="p-24 w-1/2 flex flex-col justify-center items-center gap-8 mt-28">
            <h1 className ="text-[#FF3839] text-[64px] font-medium">
                SING IN
            </h1>
            <p className = "text-[15px] capitalize mb-3">
                enter your email address and password to access
            </p>
            <form className ="flex flex-col justify-center w-full gap-7">
                <input type ="text" placeholder="USERNAME / EMAIL" className="rounded-[10px] border-solid border-2 border-[#FBF8F8] bg-[#F5E7E7] font-regular text-[12px] p-2" />
                <input type="password" placeholder="PASSWORD" className="rounded-[10px] border-solid border-2 border-[#FBF8F8] bg-[#F5E7E7] font-regular text-[12px] p-2"/>
                <button className ="bg-[#FF3839] rounded-[10px] text-white font-regular text-[15px] self-center px-16 py-0.5">
                    LOGIN
                </button>
            </form>
            <a className ="text-[#FF3839] text-[11px] font-regular self-start mt-20">
                Forgotten your username or password?
            </a>
        </div>
    </div>
}