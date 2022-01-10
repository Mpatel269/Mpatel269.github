import React, {useState} from 'react';
import PepaLogo from '../../images/pepa-logo-new.png';

const HomepageModal = () => {

    const [isVisible, setIsVisible] = useState(true)

    return(
        <div onClick={() => setIsVisible(false)} class="h-screen w-screen bg-black bg-opacity-70" style={{ display: isVisible ? "" : "none"}}>
        <div class=" py-3 sm:max-w-xl sm:mx-auto">
            <button onClick={() => setIsVisible(false)} class="flex justify-end">
                <div class="text-white text-lg font-bold border-2 p-1 rounded-full flex justify-end">
                    <i class="fas fa-times"></i> 
                </div>
            </button>
            <div class="relative px-4 py-6 bg-white shadow-lg sm:rounded-3xl sm:p-20 bg-clip-padding bg-opacity-60 border border-gray-200 backdrop-filter backdrop-blur-lg z-50">
            <div class="max-w-md mx-auto">
                <div class="flex justify-center">
                <img src={PepaLogo} class="h-16 sm:h-36" alt=''/>
                </div>
                <div class="divide-y divide-gray-200">
                <div class="py-8 text-base leading-6 space-y-4 sm:text-lg sm:leading-7">
                    <p>
                        <strong>Palacky English Program Association (PEPA)</strong> is the official student 
                        organisation for International students at Palacky. Our key aims include: 
                    </p>
                    <ul class="list-disc space-y-2">
                    <li class="flex items-start">
                        <span class="h-6 flex items-center sm:h-7">
                        <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        </span>
                        <p class="ml-2">
                        Helping students acclimatise to life at university
                        </p>
                    </li>
                    <li class="flex items-start">
                        <span class="h-6 flex items-center sm:h-7">
                        <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        </span>
                        <p class="ml-2">
                        Connecting students with each other and Alumni
                        </p>
                    </li>
                    <li class="flex items-start">
                        <span class="h-6 flex items-center sm:h-7">
                        <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        </span>
                        <p class="ml-2">Facilitating Academic and Social support</p>
                    </li>
                    </ul>
                    <p>We're here to improve your time at Palacky and improve communication between the student body and Staff of the Medical and Dental Faculty. </p>
                    <p>
                    <a href="/yourunion/pepa-team" class="font-bold text-cyan-600 hover:text-cyan-700"> Meet the Team &rarr; </a>
                    </p>
                </div>
                <div class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                    <p>Check us out on <a class="font-bold text-blue-700" href="https://www.facebook.com/UPOLPEPA/"> Facebook </a> or <a class="font-bold text-blue-700" href="https://www.instagram.com/pepa.up/?hl=en">Instagram</a></p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
};

export default HomepageModal;