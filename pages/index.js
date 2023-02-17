import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { useState } from 'react';
import Image from 'next/legacy/image';
import dev from '../public/dev-pic.png';
import web0 from '../public/web0.png';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Yoonzy Portfolio</title>
        <meta
          name='description'
          content='Self-taught front-end developer with basic user experience knowledge and make website alive with code. Get in touch with me if you wish to know more about my works and skills.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='bg-slate-100 px-10 md:px-20 lg:px-35 dark:bg-indigoDye'>
        <section className='min-h-screen'>
          {/* Nav Bar */}

          <nav className=' bg-indigoDye p-10 mb-12 flex justify-between md:bg-slate-100  dark:bg-slate-100'>
            <h1 className='text-xl font-burtons text-white md:text-indigoDye lg:text-2xl dark:text-indigoDye'>yoonzy_</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill
                  className='cursor-pointer text-xl text-white md:text-indigoDye dark:text-indigoDye'
                  onClick={() => setDarkMode(!darkMode)}
                />
              </li>
              <li>
                <a
                  className=' bg-white text-indigoDye font-bold px-4 py-2 rounded-md ml-8 md:bg-indigoDye md:text-white md:px-5 md:py-3 dark:bg-indigoDye dark:text-white'
                  href=''
                  download
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          {/* About Me Section */}

          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-sky-700 font-medium md:text-6xl dark:text-sky-500'>Yoonzy</h2>
            <h3 className='text-2xl py-2 dark:text-white font-medium'>Front-end Devloper.</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-slate-200'>
              Self-taught developer with basic user experience knowledge and make website alive with code. Get in touch with me if you
              wish to know more about my works and skills.
            </p>
          </div>

          {/* Social Media Section */}

          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <a href='https://twitter.com/yoon_tech'>
              <AiFillTwitterCircle className='cursor-pointer dark:text-gray-200' />
            </a>
            <a href='https://www.linkedin.com/in/ruby-chu-yun-syuan/'>
              <AiFillLinkedin className='cursor-pointer dark:text-gray-200' />
            </a>
            <a href='https://www.instagram.com/yoon_tech/'>
              <AiFillInstagram className='cursor-pointer dark:text-gray-200' />
            </a>
          </div>

          {/* My Profile Image */}

          <div className='relative mx-auto bg-honeyYellow rounded-full w-80 h-80 my-20 overflow-hidden md:h-96 md:w-96 lg:h-216 lg:w-216'>
            <Image src={dev} className='object-cover' layout='fill' />
          </div>
        </section>

        {/* Portfolio Section */}

        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white dark:text-4xl'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-slate-200'>All my works and practice projects are here.</p>
          </div>

          {/* My Projects */}

          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 grow shrink-0'>
              <a href='https://yoonzy-tech.github.io/react-ubereats-clone/'>
                <Image src={web1} className='rounded-lg object-cover' layout='responsive' width={'160%'} height={'90%'} />
              </a>
            </div>
            <div className='basis-1/3 grow shrink-0'>
              <a href='https://yoonzy-tech.github.io/tea-cozy-flexbox/'>
                <Image src={web2} className='rounded-lg object-cover' width={'160%'} height={'90%'} layout='responsive' />
              </a>
            </div>
            <div className='basis-1/3 grow shrink-0'>
              <a href='https://yoonzy-tech.github.io/hotels_in_singapore_breadcrumb/'>
                <Image src={web3} className='rounded-lg object-cover' width={'160%'} height={'90%'} layout='responsive' />
              </a>
            </div>
            <div className='basis-1/3 grow shrink-0'>
              <a href="https://yoonzy-tech.github.io/scissors-paper-stone-game/">
              <Image src={web4} className='rounded-lg object-cover' width={'160%'} height={'90%'} layout='responsive' />
              </a>
            </div>
            <div className='basis-1/3 grow shrink-0'>
              <Image src={web0} className='rounded-lg object-cover' width={'160%'} height={'90%'} layout='responsive' />
            </div>
            <div className='basis-1/3 grow shrink-0'>
              <Image src={web0} className='rounded-lg object-cover' width={'160%'} height={'90%'} layout='responsive' /> 
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
