import React from 'react';

const YearBreakdownBodyAlt = ({color}) => {
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
                            <i class="fas fa-cog"></i> Year 1
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
                            <i class="fas fa-cog"></i> Year 2
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
                            <i class="fas fa-cog"></i> Year 3
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
                            <i class="fas fa-cog"></i> Year 4
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
                            <i class="fas fa-cog"></i> Year 5
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
                            <i class="fas fa-cog"></i> Year 6
                        </a>
                    </li>
                </ul>
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                    <div class="px-4 py-5 flex-auto">
                        <div class="">
                            <div class={openTab === 1 ? "block" : "hidden"} id="link1">
                                <div class="font-bold">
                                    <details>
                                        <summary class="hover:opacity-80">Module Breakdown</summary>
                                        <div class="p-4 bg-gray-900 bg-opacity-5 font-semibold">
                                            <ul>
                                                <li>Chemistry</li>
                                                <li>Biology 1&2</li>
                                                <li>Biophysics 1&2</li>
                                                <li>Anatomy 1&2</li>
                                                <li>Latin</li>
                                                <li>Histology and Embryology 1</li>
                                                <li>Czech</li>
                                                <li>Basic Communication</li>
                                                <li>First Aid</li>
                                                <li>Biochemistry 1</li>
                                            </ul>
                                        </div>
                                        
                                    </details>
                                    <details>
                                        <summary class="hover:opacity-80">Intro to 1st Year</summary>
                                    </details>
                                    <details>
                                        <summary class="hover:opacity-80">Advice</summary>
                                    </details>
                                </div>
                            </div>
                            <div class={openTab === 2 ? "block" : "hidden"} id="link2">
                                <div class="font-bold">
                                    <details>
                                        <summary class="hover:opacity-80">Module Breakdown</summary>
                                        <div class="p-4 bg-gray-900 bg-opacity-5 font-semibold">
                                            <ul>List of modules:
                                                <li>Czech 2</li>
                                                <li>Physiology 1&2</li>
                                                <li>Histology and Embryology 2</li>
                                                <li>Basic Procedures in Healthcare 1&2</li>
                                                <li>Medical Psychology 1&2</li>
                                                <li>Microbiology 1</li>
                                                <li>Social Medicine and Medical Ethics</li>
                                                <li>Communication with Patients in Practise</li>
                                                <li>Biochemistry 2</li>
                                            </ul>   
                                        </div>
                                    </details>
                                    <details>
                                        <summary class="hover:opacity-80">Intro to 2nd Year</summary>
                                    </details>
                                    <details>
                                        <summary class="hover:opacity-80">Advice</summary>
                                    </details>
                                </div>
                            </div>
                            <div class={openTab === 3 ? "block" : "hidden"} id="link3">
                                <div class="font-bold">
                                    <details>
                                        <summary class="hover:opacity-80">Module Breakdown</summary>
                                        <div class="p-4 bg-gray-900 bg-opacity-5 font-semibold">
                                            <ul>List of modules:
                                                <li>Czech 3</li>
                                                <li>Intro to Clinical Medicine 1&2</li>
                                                <li>Medical Immunology 1</li>
                                                <li>Microbiology 2</li>
                                                <li>Pathology 1&2</li>
                                                <li>Pathophysiology 1&2</li>
                                                <li>Epidemiology</li>
                                                <li>Basics of Dentistry 1&2</li>
                                                <li>Pharmacology 1</li>
                                                <li>Internal Medicine 1</li>
                                            </ul>
                                        </div>
                                    </details>
                                    <details>
                                        <summary class="hover:opacity-80">Intro to 3rd Year</summary>
                                    </details>
                                    <details>
                                        <summary class="hover:opacity-80">Advice</summary>
                                    </details>
                                </div>
                            </div>
                            <div class={openTab === 4 ? "block" : "hidden"} id="link4">
                                <div class="font-bold">
                                    <details>
                                        <summary class="hover:opacity-80">Module Breakdown</summary>
                                        <div class="p-4 bg-gray-900 bg-opacity-5 font-semibold">
                                            <ul> List of Modules:
                                                <li>Surgery 1</li>
                                                <li>Pharmacology 2</li>
                                                <li>Internal Medicine 2</li>
                                                <li>Infectious Diseases 1&2</li>
                                                <li>Clinical Immunology and Allergology</li>
                                                <li>Social Medicine 1</li>
                                                <li>Forensic Medicine</li>
                                                <li>Dermatology and Venerology</li>
                                                <li>Medical Genetics</li>
                                                <li>Neurology</li>
                                                <li>Clinical Rehabilitation</li>
                                                <li>Occupational Medicine</li>
                                                <li>Psychiatry</li>
                                                <li>Epidemiology</li>
                                                <li>Radiology and Nuclear Medicine</li>
                                                <li>Exercise Medicine</li>
                                            </ul>
                                        </div>
                                    </details>
                                    <details>
                                        <summary class="hover:opacity-80">Intro to 4th Year</summary>
                                    </details>
                                    <details>
                                        <summary class="hover:opacity-80">Advice</summary>
                                    </details>
                                </div>
                            </div>
                            <div class={openTab === 5 ? "block" : "hidden"} id="link5">
                                <div  class="font-bold">
                                    <details>
                                        <summary class="hover:opacity-80">Module Breakdown</summary>
                                        <div class="p-4 bg-gray-900 bg-opacity-5 font-semibold">
                                            <ul>
                                                <li>Pediatrics</li>
                                                <li>Internal Medicine 3</li>
                                                <li>Anaesthesia and Intensive Care</li>
                                                <li>Neurosurgery</li>
                                                <li>Opthalmology</li>
                                                <li>Clinical Oncology</li>
                                                <li>Otorhinolaryngology (ENT)</li>
                                                <li>Orthopedics</li>
                                                <li>Gynecology and Obstetrics 1</li>
                                                <li>Epidemiology 2</li>
                                                <li>Social Medicine 2</li>
                                                <li>Epidemiology, Law and Social Medicine</li>
                                                <li>Medical Law</li>
                                                <li>Emergency Medicine</li>
                                                <li>Urology</li>
                                            </ul>
                                        </div>
                                    </details>
                                    <details>
                                        <summary class="hover:opacity-80">Intro to 5th Year</summary>
                                    </details>
                                    <details>
                                        <summary class="hover:opacity-80">Advice</summary>
                                    </details>
                                </div>
                            </div>
                            <div class={openTab === 6 ? "block" : "hidden"} id="link6">
                                <div class="font-bold">
                                    <details>
                                        <summary class="hover:opacity-80">Module Breakdown</summary>
                                        <div class="p-4 bg-gray-900 bg-opacity-5 font-semibold">
                                            <ul>
                                                <li>Surgery 2</li>
                                                <li>Internal Medicine 4</li>
                                                <li>Gynecology and Obstetrics 2</li>
                                                <li>Acute Conditions in Medicine</li>
                                                <li>General Practical Medicine</li>
                                            </ul>
                                        </div>
                                    </details>
                                    <details>
                                        <summary class="hover:opacity-80">Intro to 6th Year</summary>
                                    </details>
                                    <details>
                                        <summary class="hover:opacity-80">Advice</summary>
                                    </details>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    )
};

export default function YearBreakdownBodyAltRenderer() {
    return (
        <>
        <YearBreakdownBodyAlt color="gray"/>
        </>
    );
}