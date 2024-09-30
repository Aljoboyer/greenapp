import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import NavLogo from '../../../assets/navlogo.png'
import NavLogoDark from '../../../assets/navlogodark.png'

const Navbars = () => {
  return (
    <Disclosure as="nav" className="bg-white md:bg-transparent">
      <div className="mx-auto  px-2 sm:px-6 lg:px-8 md:py-4">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block text-black h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>

          <div className="w-full flex flex-row items-center justify-between">
              <div className="w-1/2 md:w-1/6		 h-full">
              <img
                alt="Your Company"
                src={NavLogo}
                className="h-auto w-auto hidden md:block"
              />
              <img
                alt="Your Company"
                src={NavLogoDark}
                className="w-auto h-auto md:hidden"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block w-11/12		">
                <div className='flex flex-row items-center '>
                  <div className='h-[2px] w-1/2 bg-white '></div>

                  <div className=" flex flex-row ml-4 w-2/5 2xl:w-4/12 justify-center">
                    <p className='cursor-pointer font-normal font-poppins text-white hover:text-gray-300 ease-in-out duration-300 mr-4'>Sustainable Websites</p>
                    <p className='cursor-pointer font-normal font-poppins text-white hover:text-gray-300 ease-in-out duration-300 '>Blog</p>
                    <p className='cursor-pointer font-normal font-poppins text-white hover:text-gray-300 ease-in-out duration-300 mx-4'>Contact Us</p>
                    <p className='cursor-pointer font-normal font-poppins text-white hover:text-gray-300 ease-in-out duration-300 '>Login</p>
                  </div>
                  <div className='h-[2px] w-[100px] 2xl:w-[200px] bg-white '></div>
                </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <DisclosureButton
              as="a"
              className="text-center"
            >
              <p className='cursor-pointer font-normal font-poppins text-black hover:text-gray-300 ease-in-out duration-300 mr-4'>Sustainable Websites</p>
            </DisclosureButton>
            <DisclosureButton
              as="a"
              className="text-center my-2"
              
            >
              <p className='cursor-pointer font-normal font-poppins text-black hover:text-gray-300 ease-in-out duration-300 mr-4'>Blog</p>
            </DisclosureButton>
            <DisclosureButton
              as="a"
              className="text-center"
              
            >
              <p className='cursor-pointer font-normal font-poppins text-black hover:text-gray-300 ease-in-out duration-300 mr-4'>Contact Us</p>
            </DisclosureButton>
            <DisclosureButton
              as="a"
              className="text-center my-2"
              
            >
              <p className='cursor-pointer font-normal font-poppins text-black hover:text-gray-300 ease-in-out duration-300 mr-4'>Login</p>
            </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}

export default Navbars