import React from 'react';

const CreateNewBody = () => {
    return(
        <div class="flex flex-col h-screen bg-gray-800 ">
            <h1 class="text-4xl font-bold text-gray-200 border-b-2 w-max pb-2 pt-8 pl-8">Starting a New Society</h1>
            <div class="flex flex-row px-8 pt-16 text-gray-200 ">
                <div class="flex flex-col justify-evenly mr-12 pr-8">
                    <p class="text-xl font-bold">We're always looking for new ways to expand the extra-curricular activities at UPOL: </p>
                    <p>If you're passionate about something that we don't already offer, it's possible to apply to create a new society - provided there is sufficient interest in the new society. Simply download the Application form below and send it back via email to pepa.palacky@gmail.com</p>
                    <p>Read about our Society Guidelines HERE</p>
                </div>
                
                <img class="justify-end" src="https://media.istockphoto.com/photos/networking-and-social-media-wood-blocks-and-people-icons-picture-id1281811387?b=1&k=20&m=1281811387&s=170667a&w=0&h=7Z6XDn0pIurtBkddgK3nZq_12M1qEQIjN0iD-_68XOk=" alt="" />
            </div>
                



                <div class="flex self-center font-bold w-max p-6 m-8 rounded-md text-gray-400 bg-gray-900 bg-opacity-50 shadow-lg ring-gray-500 ring ring-opacity-90 hover:bg-opacity-80 hover:text-gray-200">
                    <a target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1jOSCUcfBJgZiX3Cv8GGpn6FY1nPUUvNJ/edit?usp=sharing&ouid=107134952830809371585&rtpof=true&sd=true"> Click here to download Application Form</a>    
                </div>

        </div>
    )
};

export default CreateNewBody
;