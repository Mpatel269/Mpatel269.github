import React from 'react';

const ThingsToDoBody = () => {
    const [openTab, setOpenTab] = React.useState(1);
    
    return(
        <div>
            {/* gallery slider */}
            <div class="flex flex-col pt-12">
                <div class="flex flex-row justify-evenly">
                    <div class="self-center text-center hover:text-teal-700 w-1/12" onClick={e => openTab > 1 ? setOpenTab(openTab - 1) : setOpenTab(1)}>
                    <i class="fas fa-chevron-left fa-2x"></i>
                    </div>               
                    <div class="w-10/12">
                        <div class={openTab === 1? "block" : "hidden"} id="link1">
                            <div class="flex flex-row bg-gray-100 ">
                                <img src="https://media.istockphoto.com/photos/low-angle-view-of-athletic-man-climbing-on-the-wall-in-a-gym-picture-id939460884?b=1&k=20&m=939460884&s=170667a&w=0&h=xzt7_4KwOkmB44DPizi1bS2m_jguBpn6gaeviRH9L5k=" alt="" />
                                <div class="flex flex-col">
                                    <p class="self-center font-semibold pt-8">Activity Name</p>
                                    <p class="self-center p-8 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, magni. Iure et provident nihil dolorem, quam, nemo nisi omnis vitae amet inventore corrupti cum libero! Nobis facilis tempora sunt neque.</p>
                                </div>
                            </div>
                        </div>

                        <div class={openTab === 2? "block" : "hidden"} id="link2">
                            <div class="flex flex-row bg-gray-100 ">
                                <img src="https://images.unsplash.com/photo-1628468489376-d2c8310814b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z29rYXJ0aW5nfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                <div class="flex flex-col">
                                    <p class="self-center font-semibold pt-8">Activity Name</p>
                                    <p class="self-center p-8 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, magni. Iure et provident nihil dolorem, quam, nemo nisi omnis vitae amet inventore corrupti cum libero! Nobis facilis tempora sunt neque.</p>
                                </div>
                            </div>
                        </div>

                        
                        <div class={openTab === 3? "block" : "hidden"} id="link3">
                            <div class="flex flex-row bg-gray-100 ">
                                <img src="https://images.unsplash.com/photo-1619982268623-bcba4bd35c1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXhlJTIwdGhyb3dpbmd8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                <div class="flex flex-col">
                                    <p class="self-center font-semibold pt-8">Activity Name</p>
                                    <p class="self-center p-8 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, magni. Iure et provident nihil dolorem, quam, nemo nisi omnis vitae amet inventore corrupti cum libero! Nobis facilis tempora sunt neque.</p>
                                </div>
                            </div>
                        </div>
                        

                        <div class={openTab === 4? "block" : "hidden"} id="link4">
                            <div class="flex flex-row bg-gray-100 ">
                                <img src="https://images.unsplash.com/photo-1629213288413-156cecc050ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGdvbGZ8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                <div class="flex flex-col">
                                    <p class="self-center font-semibold pt-8">Activity Name</p>
                                    <p class="self-center p-8 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, magni. Iure et provident nihil dolorem, quam, nemo nisi omnis vitae amet inventore corrupti cum libero! Nobis facilis tempora sunt neque.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="self-center text-center hover:text-teal-700 w-1/12" onClick={e => openTab < 4? setOpenTab(openTab + 1) : setOpenTab(4)}>
                        <i class="fas fa-chevron-right fa-2x"></i>
                    </div>                  
                </div>

                <div class="flex flex-row justify-center">
                    <div class="flex flex-row mt-6 my-2 w-max">
                        <a href="#link1" onClick={e => {e.preventDefault(); setOpenTab(1)}} class={"w-3 h-3 mx-2 rounded-full focus:outline-none hover:bg-blue-300 " + (openTab === 1? "bg-blue-500 animate-pulse" : "bg-gray-200")}> </a>
                        <a href="#link2" onClick={e => {e.preventDefault(); setOpenTab(2)}} class={"w-3 h-3 mx-2 rounded-full focus:outline-none hover:bg-blue-300 " + (openTab === 2? "bg-blue-500 animate-pulse" : "bg-gray-200")}> </a>
                        <a href="#link3" onClick={e => {e.preventDefault(); setOpenTab(3)}} class={"w-3 h-3 mx-2 rounded-full focus:outline-none hover:bg-blue-300 " + (openTab === 3? "bg-blue-500 animate-pulse" : "bg-gray-200")}> </a>
                        <a href="#link4" onClick={e => {e.preventDefault(); setOpenTab(4)}} class={"w-3 h-3 mx-2 rounded-full focus:outline-none hover:bg-blue-300 " + (openTab === 4? "bg-blue-500 animate-pulse" : "bg-gray-200")}> </a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ThingsToDoBody;