import React from 'react';
import HomepageModal from './HomepageModal';
import heroImgs from '../../images/homepageImgs/heroImg.jpg'

const Hero = () => {
    return(
        
        <div class="bg-gray-900 flex align justify-center">
            <div class="absolute z-50">
                <HomepageModal/>
            </div>
            
            <div class="bg-gray-800 bg-opacity-75 container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
            <div class="w-full lg:w-1/2">
                <div class="lg:max-w-lg">
                    <h1 class="font-medium text-center p-4 tracking-wide text-white text-4xl">Welcome to our website!</h1>
                    <p class="mt-2 text-center text-gray-300">Welcome to the official website of PEPA - the medical student union at Palacký University Olomouc. We are a group of dedicated medical students who strive to improve the educational experience for all of our peers. As a student-led organization, we are committed to representing the interests of our fellow students, organizing events and activities, and providing resources and support. We are based in Olomouc, Czech Republic, and serve the medical community at Palacký University. We invite you to explore our website and learn more about our mission, events, and resources. We look forward to working together to make our educational experience the best it can be. Thank you for visiting and we hope you will join us in our efforts!</p>
                    <div class="grid gap-6 mt-8 sm:grid-cols-2">
                        <div class="flex items-center -px-3 text-gray-200">
                            <svg class="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>

                            <span class="mx-3">List Item</span>
                        </div>

                        <div class="flex items-center -px-3 text-gray-200">
                            <svg class="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>

                            <span class="mx-3">List Item</span>
                        </div>

                        <div class="flex items-center -px-3 text-gray-200">
                            <svg class="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>

                            <span class="mx-3">List Item </span>
                        </div>

                        <div class="flex items-center -px-3 text-gray-200">
                            <svg class="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>

                            <span class="mx-3">List Item </span>
                        </div>


                    </div>
                </div>
            </div>
    
            <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
                <img class="object-cover w-full h-full max-w-2xl rounded-md" src={heroImgs} alt=""/>
            </div>
        </div>
        </div>
    )
}

export default Hero;
