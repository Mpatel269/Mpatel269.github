import React from 'react';

const ResearchBody = () => {
    return(

        <div class="flex flex-col text-gray-200">
            <div class="bg-gray-900 text-4xl font-semibold py-6 pl-8">
                <h1>Research at LF/UP</h1>
            </div>
            {/* Main page section */}
            <div class="flex flex-col h-max ">
                <div class="bg-gray-800 flex flex-row justify-evenly h-full py-4 ">
                    <div class="flex flex-col text-center justify-center w-5/12 h-auto text-lg">
                        <p class="text-2xl pb-8 font-medium">What is SVOC?</p>
                        <p>SVOC is a student research conference occuring annually in the summer semester. Students of all years have the opportunity to apply for a research project under the supervision of Faculty staff from various departments every year for the following year.</p>
                        <p class="pt-8 font-medium">For more information, visit the <a target="_blank" rel="noreferrer" href="https://www.lf.upol.cz/veda-a-vyzkum/svoc/" class="text-red-300 hover:text-red-400">Official SVOC Page</a></p>
                    </div>
                    <div class="pr-8 h-full w-6/12">
                        <img src="https://www.lf.upol.cz/fileadmin/_processed_/8/9/csm_svoc_uvod_6a4a2a211c.jpg" alt="" />
                    </div>                    
                </div>
                <div class="flex flex-col bg-gray-700 w-screen">
                    <div class="self-center py-8 w-max">
                            <ol class="flex flex-col">
                                <h2 class="self-center font-semibold text-2xl pb-4">How to get started :</h2>
                                <li class="border-b-2 border-opacity-10 pt-4">1) Submit an application for SVOC in summer semester (titles are typically released around May/June)</li>
                                <li class="border-b-2 border-opacity-10 pt-4">2) Once accepted, arrange a meeting with your supervisor</li>
                                <li class="border-b-2 border-opacity-10 pt-4">3) Confirm your SVOC project title by the deadline (usually towards the end of winter semester)</li>
                                <li class="border-b-2 border-opacity-10 pt-4">4) Submit a 1 page abstract (Summer semester)</li>
                                <li class="border-b-2 border-opacity-10 pt-4">5) Submit a poster presentation (~ 1 month after abstract deadline)</li>
                                <li class="border-b-2 border-opacity-10 pt-4">6) Short Presentation followed by Q/A session at SVOC conference</li>
                            </ol>
                    </div>
                </div>
                <div class="text-black bg-gradient-to-br from-pink-50 to-indigo-100">
                    <h2 class="self-center font-semibold text-2xl py-8">Frequently Asked Questions :</h2>
                    <div class="px-16">
                        <details class="py-4 border-b-2 border-gray-50">
                            <summary class="font-bold">Is SVOC the only way to do research?</summary>
                            SVOC is not the only route into research at LF UPOL. Many of the staff at the Medical and Dental faculty would gladly welcome student participation in research. If there is an area of research that you are interested in, contact the relevant staff member through your UPOL email to explore your options. 
                        </details>
                        <details class="py-4 border-b-2 border-gray-50">
                            <summary class="font-bold">When does the conference take place?</summary>
                            The SVOC conference takes place around May each year 
                        </details>
                        <details class="py-4 border-b-2 border-gray-50">
                            <summary class="font-bold">Can I take part in SVOC more than once?</summary>
                            Yes, students are allowed to partake in SVOC as many times as they would like
                        </details>
                        <details class="py-4 border-b-2 border-gray-50">
                            <summary class="font-bold">When are topics for projects released?</summary>
                            Research topics are usually released around May/June 
                        </details>
                    </div>
                </div>
            </div>
            {/* FAQ Accordion */}
        </div>
    )
};

export default ResearchBody;