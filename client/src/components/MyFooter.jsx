import { Footer } from 'flowbite-react';
import {BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaDribbble } from 'react-icons/fa6'


function MyFooter() {
  return (
    <Footer bgDark>
    <div className="w-full px-4 lg:px-24">
      <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
        <div>
          <Footer.Title title="Company" />
          <Footer.LinkGroup col>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Careers</Footer.Link>
            <Footer.Link href="#">Brand Center</Footer.Link>
            <Footer.Link href="#">Blog</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title title="help center" />
          <Footer.LinkGroup col>
            <Footer.Link href="#">Discord Server</Footer.Link>
            <Footer.Link href="#">Twitter</Footer.Link>
            <Footer.Link href="#">Facebook</Footer.Link>
            <Footer.Link href="#">Contact Us</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title title="legal" />
          <Footer.LinkGroup col>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title title="download" />
          <Footer.LinkGroup col>
            <Footer.Link href="#">iOS</Footer.Link>
            <Footer.Link href="#">Android</Footer.Link>
            <Footer.Link href="#">Windows</Footer.Link>
            <Footer.Link href="#">MacOS</Footer.Link>
          </Footer.LinkGroup>
        </div>
      </div>
      <div className="w-full bg-[#E3CD81FF] px-4 py-6 sm:flex sm:items-center sm:justify-between">
        <Footer.Copyright className='text-black' href="#" by="Team Just" year={2024} />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <Footer.Icon className='text-black' href="#" icon={BsFacebook} />
          <Footer.Icon className='text-black' href="#" icon={BsInstagram} />
          <Footer.Icon className='text-black' href="#" icon={BsTwitter} />
          <Footer.Icon className='text-black' href="#" icon={BsGithub} />
          <Footer.Icon className='text-black' href="#" icon={FaDribbble} />
        </div>
      </div>
    </div>
  </Footer>
  )
}

export default MyFooter