import "./globals.css"
import "./styles.min.css"
import Header from "./components/header"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
<div className="max-w-2xl mx-auto">
    
    <nav className="border-gray-200">
    <div className="container mx-auto flex flex-wrap items-center justify-between">
        <a href="#" className="flex">
        <svg className="h-10 mr-3" width="51" height="70" viewBox="0 0 51 70" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0)"><path d="M1 53H27.9022C40.6587 53 51 42.7025 51 30H24.0978C11.3412 30 1 40.2975 1 53Z" fill="#76A9FA"></path><path d="M-0.876544 32.1644L-0.876544 66.411C11.9849 66.411 22.4111 55.9847 22.4111 43.1233L22.4111 8.87674C10.1196 8.98051 0.518714 19.5571 -0.876544 32.1644Z" fill="#A4CAFE"></path><path d="M50 5H23.0978C10.3413 5 0 15.2975 0 28H26.9022C39.6588 28 50 17.7025 50 5Z" fill="#1C64F2"></path></g><defs><clipPath id="clip0"><rect width="51" height="70" fill="white"></rect></clipPath></defs></svg>
            <span className="self-center text-lg font-semibold whitespace-nowrap">FlowBite</span>
        </a>
        <button data-collapse-toggle="mobile-menu" type="button" className="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center" aria-controls="mobile-menu-2" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
        <div className="hidden md:block w-full md:w-auto" id="mobile-menu">
        <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            <li>
            <a href="#" className="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded focus:outline-none" aria-current="page">Home</a>
            </li>
            <li>
                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 font-medium flex items-center justify-between w-full md:w-auto">Dropdown <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>
                {/* <!-- Dropdown menu --> */}
                <div id="dropdownNavbar" className="hidden bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44">
                    <ul className="py-1" aria-labelledby="dropdownLargeButton">
                    <li>
                        <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Dashboard</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Settings</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Earnings</a>
                    </li>
                    </ul>
                    <div className="py-1">
                    <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Sign out</a>
                    </div>
                </div>
            </li>
            <li>
            <a href="#" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Services</a>
            </li>
            <li>
            <a href="#" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Pricing</a>
            </li>
            <li>
            <a href="#" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Contact</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>

    <p className="mt-5">This dropdown navbar element is part of a larger, open-source library of Tailwind CSS components. Learn more by going to the official <a className="text-blue-600 hover:underline" href="#" target="_blank">Flowbite Documentation</a>.</p>
</div>

{/* <script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js"></script> */}

<div className="bg-gray-200 font-sans leading-normal tracking-normal">
<nav className="relative bg-white border-b-2 border-gray-300 text-gray-900">
  <div className="container mx-auto flex justify-between">
    <div className="relative block p-4 lg:p-6 text-xl text-blue-600 font-bold">Logo</div>
    <ul className="flex">
	
      {/* <!--Regular Link--> */}
      <li className="hover:bg-blue-800 hover:text-white">
        <a href="#" className="relative block py-6 px-2 lg:p-6 text-sm lg:text-base font-bold">Normal</a>
      </li>
	  
      {/* <!--Toggleable Link--> */}
      <li className="toggleable hover:bg-blue-800 hover:text-white">
        <input type="checkbox" value="selected" id="toggle-one" className="toggle-input"/>
          <label htmlFor="toggle-one" className="block cursor-pointer py-6 px-4 lg:p-6 text-sm lg:text-base font-bold">Click</label>
          <div role="toggle" className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-blue-800">
            <div className="container mx-auto w-full flex flex-wrap justify-between mx-2">
              <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                <h3 className="font-bold text-xl text-white text-bold mb-2">Heading 1</h3>
                <li>
                  <a href="#" className="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">Category One Sublink</a>
                </li>
                <li>
                  <a href="#" className="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">Category One Sublink</a>
                </li>
                <li>
                  <a href="#" className="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">Category One Sublink</a>
                </li>
                <li>
                  <a href="#" className="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">Category One Sublink</a>
                </li>
                <li>
                  <a href="#" className="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">Category One Sublink</a>
                </li>
              </ul>
              <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                <h3 className="font-bold text-xl text-white text-bold mb-2">Heading 2</h3>
                <li>
                  <a href="#" className="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">Category One Sublink</a>
                </li>
                <li>
                  <a href="#" className="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">Category One Sublink</a>
                </li>
                <li>
                  <a href="#" className="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">Category One Sublink</a>
                </li>
                <li>
                  <a href="#" className="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">Category One Sublink</a>
                </li>
                <li>
                  <a href="#" className="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">Category One Sublink</a>
                </li>
              </ul>
              <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
                <h3 className="font-bold text-xl text-white text-bold">Heading 3</h3>
                <li>
                  <a href="#" className="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">Category One Sublink</a>
                </li>
                <li>
                  <a href="#" className="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">Category One Sublink</a>
                </li>
                <li>
                  <a href="#" className="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">Category One Sublink</a>
                </li>
                <li>
                  <a href="#" className="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">Category One Sublink</a>
                </li>
                <li>
                  <a href="#" className="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">Category One Sublink</a>
                </li>
              </ul>
              <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3">
                <h3 className="font-bold text-xl text-white text-bold mb-2">Heading 4</h3>
                <li className="pt-3">
                  <img src="https://placehold.it/205x172"/>
                  </li>
                </ul>
              </div>
            </div>
          </li>
		  
          {/* <!-- ## Toggleable Link Template ##
      
		  <li className="toggleable"><input type="checkbox" value="selected" id="toggle-xxx" className="toggle-input"><label htmlFor="toggle-xxx" className="cursor-pointer">Click</label><div role="toggle" className="mega-menu">
			Add your mega menu content
			</div></li>
		  
		  --> */}
		  
          {/* <!--Hoverable Link--> */}
          <li className="hoverable hover:bg-blue-800 hover:text-white">
            <a href="#" className="relative block py-6 px-4 lg:p-6 text-sm lg:text-base font-bold hover:bg-blue-800 hover:text-white">Hover</a>
            <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-blue-800">
              <div className="container mx-auto w-full flex flex-wrap justify-between mx-2">
                <div className="w-full text-white mb-8">
                  <h2 className="font-bold text-2xl">Main Hero Message for the menu section</h2>
                  <p>Sub-hero message, not too long and not too short. Make it just right!</p>
                </div>
                <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                  <div className="flex items-center">
                    <svg className="h-8 mb-3 mr-3 fill-current text-white"
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M3 6c0-1.1.9-2 2-2h8l4-4h2v16h-2l-4-4H5a2 2 0 0 1-2-2H1V6h2zm8 9v5H8l-1.67-5H5v-2h8v2h-2z"/>
                    </svg>
                    <h3 className="font-bold text-xl text-white text-bold mb-2">Heading 1</h3>
                  </div>
                  <p className="text-gray-100 text-sm">Quarterly sales are at an all-time low create spaces to explore the accountable talk and blind vampires.</p>
                  <div className="flex items-center py-3">
                    <svg className="h-6 pr-3 fill-current text-blue-300"
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
                    </svg>
                    <a href="#" className="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                  </div>
                </ul>
                <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                  <div className="flex items-center">
                    <svg className="h-8 mb-3 mr-3 fill-current text-white"
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M4.13 12H4a2 2 0 1 0 1.8 1.11L7.86 10a2.03 2.03 0 0 0 .65-.07l1.55 1.55a2 2 0 1 0 3.72-.37L15.87 8H16a2 2 0 1 0-1.8-1.11L12.14 10a2.03 2.03 0 0 0-.65.07L9.93 8.52a2 2 0 1 0-3.72.37L4.13 12zM0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z"/>
                    </svg>
                    <h3 className="font-bold text-xl text-white text-bold mb-2">Heading 2</h3>
                  </div>
                  <p className="text-gray-100 text-sm">Prioritize these line items game-plan draw a line in the sand come up with something buzzworthy UX upstream selling.</p>
                  <div className="flex items-center py-3">
                    <svg className="h-6 pr-3 fill-current text-blue-300"
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
                    </svg>
                    <a href="#" className="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                  </div>
                </ul>
                <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
                  <div className="flex items-center">
                    <svg className="h-8 mb-3 mr-3 fill-current text-white"
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M2 4v14h14v-6l2-2v10H0V2h10L8 4H2zm10.3-.3l4 4L8 16H4v-4l8.3-8.3zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"/>
                    </svg>
                    <h3 className="font-bold text-xl text-white text-bold mb-2">Heading 3</h3>
                  </div>
                  <p className="text-gray-100 text-sm">This proposal is a win-win situation which will cause a stellar paradigm shift, let&apos;s touch base off-line before we fire the new ux experience.</p>
                  <div className="flex items-center py-3">
                    <svg className="h-6 pr-3 fill-current text-blue-300"
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
                    </svg>
                    <a href="#" className="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                  </div>
                </ul>
                <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3">
                  <div className="flex items-center">
                    <svg className="h-8 mb-3 mr-3 fill-current text-white"
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"/>
                    </svg>
                    <h3 className="font-bold text-xl text-white text-bold mb-2">Heading 4</h3>
                  </div>
                  <p className="text-gray-100 text-sm">This is a no-brainer to wash your face, or we need to future-proof this high performance keywords granularity.</p>
                  <div className="flex items-center py-3">
                    <svg className="h-6 pr-3 fill-current text-blue-300"
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
                    </svg>
                    <a href="#" className="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                  </div>
                </ul>
              </div>
            </div>
          </li>
{/* 		  
          <!-- ## Hoverable Link Template ##
      
		  <li className="hoverable hover:bg-blue-800 hover:text-white"><a href="#" className="relative block">x</a><div className="mega-menu">
			Add your mega menu content
			</div></li>
		  
		  --> */}
        </ul>
      </div>
    </nav>
  </div>

        {children}
      </body>
    </html>
  )
}
