<template>
    <header class="top-0 z-50 sticky mt-0">
        <ul>
            <li>
                <div class="flex w-full justify-between px-50 bg-black text-white font-heading py-2 overflow-hidden">
                    <div class="">
                        <NuxtLink to="#home">
                            <span class="text-green-400 border border-green py-1 px-1">[ KS ]</span> 
                            KOEM SOTHEARITH
                        </NuxtLink>
                    </div>
                    <div class="flex gap-10 text-lg">
                        <NuxtLink to="#about" class="text-gray-400 hover:text-green-500 hover:border-b">About</NuxtLink>
                        <NuxtLink to="#prosecss" class="text-gray-400 hover:text-green-500 hover:border-b">Process</NuxtLink>
                        <NuxtLink to="#experiences" class="text-gray-400 hover:text-green-500 hover:border-b">Experience</NuxtLink>
                        <NuxtLink to="#contact" class="text-gray-400 hover:text-green-500 hover:border-b">Contact</NuxtLink>
                    </div>
                    <div clas>
                        <span class="bg-green-500 h-[1px] w-[1px] border border-green-600"></span> Available for work
                    </div>
                </div>
                <hr class="text-gray-500 shadow-xl">
            </li>
        </ul>
    </header>
</template>