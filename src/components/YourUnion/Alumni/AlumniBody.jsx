import React from 'react';

const AlumniBody = () => {
    return(
        <div>
            <div class="bg-gray-50 flex flex-wrap md items-center h-full">
                <div class="bg-gray-50 w-full md:w-1/2 h-full">
                    <div class="mx-24">
                    <h1 class="text-6xl font-bold mt-16">Our Alumni </h1>

                    <div class="flex mt-16 font-light text-gray-500">
                        <div class="pr-4">
                        <span class="uppercase">Countries:</span>
                        <p class="text-2xl text-gray-900 font-semibold pt-2">15</p>
                        </div>
                        <div class="pr-4">
                        <span class="uppercase">Members:</span>
                        <p class="text-2xl text-gray-900 font-semibold pt-2">108</p>
                        </div>
                        <div class="pr-4">
                        <span class="uppercase">Established:</span>
                        <p class="text-2xl text-gray-900 font-semibold pt-2">2014</p>
                        </div>
                    </div>

                    <div
                        class="description font-bold w-full sm: md:w-2/3 mt-16 text-gray-500 text-l"
                    >
                        About Us:
                    </div>
                    <div
                        class="description w-full sm: md:w-10/12 mt-4 text-gray-500 text-m"
                    >
                        Our Alumni group serves as your lifelong contact with PEPA and UPOL. 
                        Membership is free and automatic upon graduation for new students. 
                        If you reached Alumnus status before 2021, please reach out to us 
                        and we'll help you get registered and answer any questions you may 
                        have about the process. The Alumni program aims to allow for our past 
                        and current students to stay connected with eachother and to participate 
                        in social and educational opportunities.
                    </div>
                    <div
                        class="description font-bold w-full sm: md:w-2/3 mt-8 text-gray-500 text-l"
                    >
                        Interested in holding an event?
                    </div>
                    <div
                        class="description pb-5 w-full sm: md:w-10/12 mt-4 text-gray-500 text-m"
                    >
                        Every year, Alumna Mater reach out to students of the English Program to
                         enhance our understanding of life after graduation and to allow current 
                         students to prepare for a career in Medicine or Dentistry. Events that 
                         have been held in the past include Webinar series on core competencies 
                         as a Junior doctor and Tutorials on job applicaiton in the UK.
                         <br/><br/>
                        If you'd like to host a similar event, feel free to reach out to us 
                        at: <strong>pepa.palacky@gmail.com</strong>
                    </div>

                    <a href="https://alumni.upol.cz/Alumni/About" class="uppercase mt-5 pb-5 text-sm font-semibold hover:underline">
                        Join us - UPOL Alumni Organisation
                    </a>
                    <br/>
                    <a href="https://www.studyin.cz/students-and-alumni/alumni-focus-groups/?fbclid=IwAR3QBU_9BioHRk4a7NyjcQJCMEEjFe2YwwxHjLHM9TFSqc4fkJHnn_aA1BA" class="uppercase pb-5 text-sm font-semibold hover:underline">
                        Join us - Study In the Czech Republic (National Group)
                    </a>
                    </div>
                </div>
                <div class="bg-gray-100 w-full md:w-1/2 h-screen">
                    <img
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    class="h-screen w-full object-scale-down"
                    alt=""
                    />
                </div>
            </div>
        </div>
    )
};

export default AlumniBody;