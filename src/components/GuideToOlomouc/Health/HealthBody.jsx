import React from 'react';


const HealthBody = () => {
const [openTab, setOpenTab] = React.useState(1)
    return(
        <div class="h-screen">
            <div class="flex flex-row">
                {/* Information toggle*/}
                <div class="w-3/12 bg-gray-50">
                    <div class="font-semibold pl-2 ">
                        <ul class="">
                            <li class="py-3 transform hover:translate-x-6 transition-all hover:bg-gray-50 hover:shadow-sm duration-200 ease-out" onClick={e =>{e.preventDefault(); setOpenTab(1);}}>
                                <a href="#link1">
                                    General Practitioner
                                </a>
                            </li>
                            <li class="py-3 transform hover:translate-x-6 transition-all hover:bg-gray-50 hover:shadow-sm duration-200 ease-out" onClick={e => {e.preventDefault(); setOpenTab(2)}}>
                                <a href="#link2">
                                    Respiratory Clinic
                                </a>
                            </li>
                            <li class="py-3 transform hover:translate-x-6 transition-all hover:bg-gray-50 hover:shadow-sm duration-200 ease-out" onClick={e => {e.preventDefault(); setOpenTab(3)}}>
                                <a href="#link3">
                                    Dental Clinic
                                </a>
                            </li>
                            <li class="py-3 transform hover:translate-x-6 transition-all hover:bg-gray-50 hover:shadow-sm duration-200 ease-out" onClick={e => {e.preventDefault(); setOpenTab(4)}}>
                                <a href="#link4">
                                    Psychologist 
                                </a>
                            </li>
                            <li class="py-3 transform hover:translate-x-6 transition-all hover:bg-gray-50 hover:shadow-sm duration-200 ease-out" onClick={e => {e.preventDefault(); setOpenTab(5)}}>
                                <a href="#link5">
                                    Psychiatrist 
                                </a>
                            </li>
                            <li class="py-3 transform hover:translate-x-6 transition-all hover:bg-gray-50 hover:shadow-sm duration-200 ease-out" onClick={e => {e.preventDefault(); setOpenTab(6)}}>
                                <a href="#link6">
                                    Dermatologist 
                                </a>
                            </li>
                            <li class="py-3 transform hover:translate-x-6 transition-all hover:bg-gray-50 hover:shadow-sm duration-200 ease-out" onClick={e => {e.preventDefault(); setOpenTab(7)}}>
                                <a href="#link7">
                                    ENT Clinic 
                                </a>
                            </li>
                            <li class="py-3 transform hover:translate-x-6 transition-all hover:bg-gray-50 hover:shadow-sm duration-200 ease-out" onClick={e => {e.preventDefault(); setOpenTab(8)}}>
                                <a href="#link8">
                                    Gynaecologist 
                                </a>
                            </li>
                            <li class="py-3 transform hover:translate-x-6 transition-all hover:bg-gray-50 hover:shadow-sm duration-200 ease-out" onClick={e => {e.preventDefault(); setOpenTab(9)}}>
                                <a href="#link9">
                                    Ophthalmologist 
                                </a>
                            </li>
                            <li class="py-3 transform hover:translate-x-6 transition-all hover:bg-gray-50 hover:shadow-sm duration-200 ease-out" onClick={e => {e.preventDefault(); setOpenTab(10)}}>
                                <a href="#link10">
                                    COVID Vaccinations
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Display */}
                <div class="w-9/12">
                    <div>
                        <div class={openTab === 1 ? 'block' : 'hidden'} id="#link1">
                            <div class="bg-gray-800 flex items-center justify-center h-screen">
                                    <div class="bg-gray-300 flex flex-col text-center w-8/12 h-3/6 p-8 rounded-xl">
                                        <div class="font-semibold text-lg">
                                            <p>General Practitioner (GP)</p>
                                            <br />
                                            <p>Name: MUDr. Karolína Nováková</p>
                                            <p>Location: II. Interna FNOL</p>
                                            <p>email: karolina.novakova@fnol.cz</p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div class={openTab === 2 ? 'block' : 'hidden'} id="#link2">
                            <div class="bg-gray-800 flex items-center justify-center h-screen">
                                    <div class="bg-gray-300 flex flex-col text-center w-8/12 h-3/6 p-8 rounded-xl">
                                        <div class="font-semibold text-lg">
                                            <p>Respiratory Clinic</p>
                                            <br />
                                            <p>Name: MUDr. Genzor Samuel</p>
                                            <p>Location: Clinic respiratory diseases and TBC FNOL</p>
                                            <p>Number (official): (+420) 738 255 179</p>
                                            <p>Allergology: Contact your PEPA representative for more information</p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div class={openTab === 3 ? 'block' : 'hidden'} id="#link3">
                            <div class="bg-gray-800 flex items-center justify-center h-screen">
                                    <div class="bg-gray-300 flex flex-col text-center w-8/12 h-3/6 p-8 rounded-xl">
                                        <div class="font-semibold text-lg">
                                            <p>Dental Clinic</p>
                                            <br />
                                            <p>Secretary: Zuzana Křížková</p>
                                            <p>Location: Palackého 700/12, 779 00 Olomouc,</p>
                                            <p>email: zuzana.krizkova@fnol.cz</p>
                                            <p>Number: (+420)58 585 9248</p>
                                            <p>In case of emergency (painful tooth): directly to
                                                "konzervační oodělení" at 7.30, health insurance
                                                necessary + ISIC</p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div class={openTab === 4 ? 'block' : 'hidden'} id="#link4">
                            <div class="bg-gray-800 flex items-center justify-center h-screen">
                                    <div class="bg-gray-300 flex flex-col text-center w-8/12 h-3/6 p-8 rounded-xl">
                                        <div class="font-semibold text-lg">
                                            <p>Psychologist</p>
                                            <br />
                                            <p>Name: Denisa Pastuszakova </p>
                                            <p>email: pdenisa@seznam.cz</p>
                                            <p>Number: (+420) 774 818 154</p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div class={openTab === 5 ? 'block' : 'hidden'} id="#link5">
                            <div class="bg-gray-800 flex items-center justify-center h-screen">
                                    <div class="bg-gray-300 flex flex-col text-center w-8/12 h-3/6 p-8 rounded-xl">
                                        <div class="font-semibold text-lg">
                                            <p>Psychiatrist</p>
                                            <br />
                                            <p>Name: prof. Látalová, dr. Kolek, .dr. Sandoval, doc. Kamarádová, dr. Kantor</p>
                                            <p>Location: Psychiatric clinic FNOL</p>
                                            <p>Number: (+420) 588 443 519</p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div class={openTab === 6 ? 'block' : 'hidden'} id="#link6">
                            <div class="bg-gray-800 flex items-center justify-center h-screen">
                                    <div class="bg-gray-300 flex flex-col text-center w-8/12 h-3/6 p-8 rounded-xl">
                                        <div class="font-semibold text-lg">
                                            <p>Dermatologist</p>
                                            <br />
                                            <p>Name: MUDr. Vitovjaková</p>
                                            <p>email: karolina.novakova@fnol.cz</p>
                                            <p>Number: (+420) 585 505 212</p>
                                            <p>Mon, Tue, Wednesday: 7.00 – 11.30</p>
                                            <p>Thursday: 12.00-15.00</p>
                                            <p>Only VZP insurance accepted (a document issued on
                                                EHIC or British card resp.), other insurance co – in
                                                cash (cash desk in the 1st floor)</p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div class={openTab === 7 ? 'block' : 'hidden'} id="#link7">
                            <div class="bg-gray-800 flex items-center justify-center h-screen">
                                    <div class="bg-gray-300 flex flex-col text-center w-8/12 h-3/6 p-8 rounded-xl">
                                        <div class="font-semibold text-lg">
                                            <p>ENT Clinic</p>
                                            <br />
                                            <p>Name: MUDr. Karolína Nováková</p>
                                            <p>Location: ORL clinic FNOL</p>
                                            <p>email: karolina.novakova@fnol.cz</p>
                                            <p>Number: (+420) 588 444 172</p>
                                            <p>Without appointment office hours 24/7, after 15:00 charge 90Kč.</p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div class={openTab === 8 ? 'block' : 'hidden'} id="#link8">
                            <div class="bg-gray-800 flex items-center justify-center h-screen">
                                    <div class="bg-gray-300 flex flex-col text-center w-8/12 h-3/6 p-8 rounded-xl">
                                        <div class="font-semibold text-lg">
                                            <p>Gynaecologist</p>
                                            <br />
                                            <p>Name: G centrum</p>
                                            <p>Location: Horní nám. 285/8</p>
                                            <p>number: (+420) 58 523 4444</p>
                                            <p>Only VZP and pVZP accepted, otherwise in cash, appointment needed.</p>
                                            <br />
                                            <p>Name: Fertimed</p>
                                            <p>Location: Boleslavova 2, 772 00 Olomouc</p>
                                            <p>number: (+420) 58 522 4128</p>
                                            <p>Usually in cash - accepts pVZP, Uniqa, ERGO and UNION</p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div class={openTab === 9 ? 'block' : 'hidden'} id="#link9">
                            <div class="bg-gray-800 flex items-center justify-center h-screen">
                                    <div class="bg-gray-300 flex flex-col text-center w-8/12 h-3/6 p-8 rounded-xl">
                                        <div class="font-semibold text-lg">
                                            <p>Ophthalmologist</p>
                                            <br />
                                            <p>Location: Eye Clinic FNOL</p>
                                            <p>Number: (+420) 588 444 227</p>
                                            <p>No appointment needed, better 8.00 - 11.30. After 15.00 there is a charge of 90Kc - personal appointment with doctor is needed</p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div class={openTab === 10 ? 'block' : 'hidden'} id="#link10">
                            <div class="bg-gray-800 flex items-center justify-center h-screen">
                                    <div class="bg-gray-300 flex flex-col text-center w-8/12 h-3/6 p-8 rounded-xl">
                                        <div class="font-semibold text-lg">
                                            <p>COVID Vaccinations</p>
                                            <br />
                                            <p>Name: Avenier Vaccination Center</p>
                                            <p>Location: Třída svobody 32, 779 00 Olomouc</p>
                                            <p>email: info@ockovacicentrum.cz</p>
                                            <p>Working hours: 06.30 - 17.00</p>
                                            <br />
                                            <p>Name: Vaccination and Travel Medicine Center</p>
                                            <p>Location: Dept. Occupational Medicine - floor 1, Building P, FNOL</p>
                                            <p>Number: (+420) 588 443 529</p>
                                            <p>Booking Appointments: Time for making appointment 7.00-8.00, 11.00-12.00 and 13.00-15.00</p>
                                            <p>Working hours: Wed: 13.00 - 15.00 Fri: 13.00 - 15.00</p>

                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HealthBody;