"use client"
import axios from "axios"
import { useState } from "react"


function Contact() {
  const [name, setName]=useState('')
  const [email, setEmail]=useState('')
  const [message, setMessage]=useState('')
  const [loading, setLoading]=useState('')
  
  const handleSubmit  = async(e)=>{
e.preventDefault()
try {
  setLoading(true)
  await axios.post("https://e-com-backend-neon.vercel.app/api/send-message",{
    name,email,message
  })
  alert("message sent successfully")
  setName('')
  setEmail('')
  setMessage('')
} catch (error) {
  console.log(error)
} finally {setLoading(false)}

  }
  return (
    <>
    
     <div id='/contact' className="container my-24 max-[768px]:mt-60 max-500:mt-[25rem] mx-auto md:px-6 ">
  
  <section >
    <div className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://mdbcdn.b-cdn.net/img/new/textures/full/284.jpg')]"></div>
    <div className="container px-6 md:px-12">
      <div
        className="block border border-white/20 rounded-lg bg-transparent px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[#151515] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
        <div className="flex flex-wrap">
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
            <form onSubmit={handleSubmit}>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <input type="text "
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:white focus:border-b border-[#986dff]"
                  id="exampleInput90" placeholder="Name" value={name} required onChange={(e)=>(setName(e.target.value))} />
                
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <input type="email"
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:white focus:border-b border-[#986dff]"
                  id="exampleInput91" placeholder="Email address " value={email} required onChange={(e)=>(setEmail(e.target.value))} />
               
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <textarea
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:white focus:border-b border-[#986dff]"
                  id="exampleFormControlTextarea1" rows="3" placeholder="Your message" required value={message} onChange={(e)=>(setMessage(e.target.value))}/>
                
              </div>
              
              <button disabled={loading} type="submit" data-te-ripple-init data-te-ripple-color="light"
                className="mb-6 inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-[#986dff] shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] lg:mb-0 ">
                Send
              </button>
            </form>
          </div>
          <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
            <div className="flex flex-wrap">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="#986dff" class="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    
                    <p class="text-neutral-500 dark:text-neutral-200">
                      sahajit119@gmail.com
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                     +919199118582
                    </p>
                  </div>
                </div>
              </div>
              <div className=" w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                <div class="flex items-start">
                 
                  <div className=" relative text-right w-full h-[346px]"><div class="overflow:hidden  bg-none w-full h-[346px]  "><iframe class="h-[346px]" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=369&amp;height=346&amp;hl=en&amp;q=patna&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>-

</div>
 
    </>
  )
}

export default Contact


