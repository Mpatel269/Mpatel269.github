import React from 'react';

const OtherBody = ({color}) => {
const [openTab, setOpenTab] = React.useState(1);
return(
    <div class="flex flex-wrap">
        <div class="w-full">
            <ul class="flex mb-0 list-none flex-wrap pt-12 pb-4 flex-row">
                <li class="-mb-px mr-2 last:mr-mr-0 flex-auto text-center">
                    <a href="#link1" 
                       class={"text-sm font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " + 
                              (openTab === 1
                                ? "text-white bg-" + color + "-800 text-white" 
                                : "text-" + color + "-900 bg-white hover:bg-gray-900 hover:bg-opacity-5")
                            } 
                       onClick={e => {
                           e.preventDefault();
                           setOpenTab(1);
                       }}>
                        <i class="fas fa-cog"></i> Gym
                    </a>
                </li>
                <li class="-mb-px mr-2 last:mr-mr-0 flex-auto text-center">
                    <a href="#link2" 
                       class={"text-sm font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" + 
                              (openTab === 2
                                ? "text-white bg-" + color + "-800 text-white"
                                : "text-" + color + "-600 bg-white hover:bg-gray-900 hover:bg-opacity-5")
                            } 
                       onClick={e => {
                           e.preventDefault();
                           setOpenTab(2);
                       }}>
                        <i class="fas fa-cog"></i> Swimming
                    </a>
                </li>
                <li class="-mb-px mr-2 last:mr-mr-0 flex-auto text-center">
                    <a href="#link3" 
                       class={"text-sm font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" + 
                              (openTab === 3
                                ? "text-white bg-" + color + "-800 text-white"
                                : "text-" + color + "-600 bg-white hover:bg-gray-900 hover:bg-opacity-5")
                            } 
                       onClick={e => {
                           e.preventDefault();
                           setOpenTab(3);
                       }}>
                        <i class="fas fa-cog"></i> Martial Arts
                    </a>
                </li>
                <li class="-mb-px mr-2 last:mr-mr-0 flex-auto text-center">
                    <a href="#link4" 
                       class={"text-sm font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" + 
                              (openTab === 4
                                ? "text-white bg-" + color + "-800 text-white" 
                                : "text-" + color + "-900 bg-white hover:bg-gray-900 hover:bg-opacity-5")
                            } 
                       onClick={e => {
                           e.preventDefault();
                           setOpenTab(4);
                       }}>
                        <i class="fas fa-cog"></i> Academic Sports Center
                    </a>
                </li>
                <li class="-mb-px mr-2 last:mr-mr-0 flex-auto text-center">
                    <a href="#link5" 
                       class={"text-sm font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" + 
                              (openTab === 5
                                ? "text-white bg-" + color + "-800 text-white"
                                : "text-" + color + "-600 bg-white hover:bg-gray-900 hover:bg-opacity-5")
                            } 
                       onClick={e => {
                           e.preventDefault();
                           setOpenTab(5);
                       }}>
                        <i class="fas fa-cog"></i> Rock Climbing
                    </a>
                </li>
                <li class="-mb-px mr-2 last:mr-mr-0 flex-auto text-center">
                    <a href="#link6" 
                       class={"text-sm font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" + 
                              (openTab === 6
                                ? "text-white bg-" + color + "-800 text-white"
                                : "text-" + color + "-600 bg-white hover:bg-gray-900 hover:bg-opacity-5")
                            } 
                       onClick={e => {
                           e.preventDefault();
                           setOpenTab(6);
                       }}>
                        <i class="fas fa-cog"></i> Other Activities
                    </a>
                </li>
            </ul>
            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                <div class="px-4 py-5 flex-auto">
                    <div class="">
                        <div class={openTab === 1 ? "block" : "hidden"} id="link1">
                            <div class="font-bold">
                                <div>
                                    <div>
                                        <img src="" alt="" />
                                    </div>
                                    <div>
                                        <p>This is the name of the gym</p>
                                    </div>
                                    <details>
                                        <summary>Click this to expand</summary>
                                        <div>

                                        </div>
                                    </details>
                                </div>
                            </div>
                        </div>
                        <div class={openTab === 2 ? "block" : "hidden"} id="link2">
                            <div class="font-bold">
                                
                            </div>
                        </div>
                        <div class={openTab === 3 ? "block" : "hidden"} id="link3">
                            <div class="font-bold">
                                
                            </div>
                        </div>
                        <div class={openTab === 4 ? "block" : "hidden"} id="link4">
                            <div class="font-bold">
                                
                            </div>
                        </div>
                        <div class={openTab === 5 ? "block" : "hidden"} id="link5">
                            <div  class="font-bold">
                                
                            </div>
                        </div>
                        <div class={openTab === 6 ? "block" : "hidden"} id="link6">
                            <div class="font-bold">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>            
    </div>
)
};

export default function OtherBodyRenderer() {
    return (
        <>
        <OtherBody color="gray"/>
        </>
    );
}