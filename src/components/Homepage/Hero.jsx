import React from 'react';

const Hero = () => {
    return(
        
        <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 bg-hero-image bg-cover">
        <div class="relative py-3 sm:max-w-xl sm:mx-auto">
            <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 bg-clip-padding bg-opacity-60 border border-gray-200" style={{'backdrop-filter': "blur(20px);"}}>
            <div class="max-w-md mx-auto">
                <div>
                <img src="https://cdn.worldvectorlogo.com/logos/tailwind-css-1.svg" class="h-16 sm:h-24" alt=''/>
                </div>
                <div class="divide-y divide-gray-200">
                <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <p>Tailwind CSS update bring a new powerful features.</p>
                    <ul class="list-disc space-y-2">
                    <li class="flex items-start">
                        <span class="h-6 flex items-center sm:h-7">
                        <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        </span>
                        <p class="ml-2">
                        Customizing style and create design system
                        </p>
                    </li>
                    <li class="flex items-start">
                        <span class="h-6 flex items-center sm:h-7">
                        <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        </span>
                        <p class="ml-2">
                        Just-In-Time : The Next Generation of Tailwind CSS
                        </p>
                    </li>
                    <li class="flex items-start">
                        <span class="h-6 flex items-center sm:h-7">
                        <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        </span>
                        <p class="ml-2">Tailwind CSS from Zero to Production</p>
                    </li>
                    </ul>
                    <p>Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.</p>
                </div>
                <div class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                    <p>See me on <a class="font-bold text-blue-700" href="https://www.linkedin.com/in/ferdianar/"> LinkedIn </a></p>
                    <p>
                    <a href="https://tailwindcss.com/docs" class="text-cyan-600 hover:text-cyan-700"> Read the docs &rarr; </a>
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Hero;
