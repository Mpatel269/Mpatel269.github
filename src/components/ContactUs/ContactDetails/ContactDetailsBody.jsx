import React from 'react';

const ContactDetailsBody = () => {
    return(
        <div class="">
            <div class="flex flex-col">
                <div class="flex items-center justify-center w-screen py-16 bg-white">
                    <div class="flex flex-col h-10/12 w-10/12 bg-gray-900 text-white rounded-lg">
                        <div class="text-center">
                            <p>Reach out to us on any of these platforms</p>
                        </div>
                        <div class="">
                            <div class="text-center p-6">
                                <a href="">
                                    <i class="fab fa-facebook-messenger fa-4x"></i>
                                </a>
                                <p>Facebook</p>
                            </div>
                            <div class="text-center p-6">
                                <a href="">
                                    <i class="fab fa-instagram fa-4x"></i>
                                </a>
                                <p>Instagram</p>
                            </div>
                            <div class="text-center p-6">
                                <a href="">
                                    <i class="fab fa-linkedin fa-4x"></i>
                                </a>
                                <p>LinkedIn</p>
                            </div>
                            <div class="text-center p-6">
                                <a href="">
                                    <i class="fas fa-envelope fa-4x"></i>
                                </a>
                                <p>Email</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ContactDetailsBody;