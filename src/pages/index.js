import AnimatedText from '@/components/AnimatedText';
import { FiDownload } from 'react-icons/fi';
import Layout from '@/components/Layout';
import TransitionEffect from '@/components/TransitionEffect';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import profilePic from '../../public/images/profile/developer-pic-3.png';
import Scene from '@/components/particle-scene/Scence';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dylst | Personal Portfolio</title>
        <meta name='description' content="Dylst's Personal Portfolio" />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light sm:items-start'>
        <Layout className='pt-0 md:pt-16 sm:pt-16'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 h-[75vh] lg:w-5/6 md:w-full sm:h-[400px] sm:w-3/4 xs:w-5/6'>
              {/* <Image
                src={profilePic}
                alt='Swordsman facing forward'
                className='w-full h-auto lg:hidden md:inline-block md:w-full'
                priority
                sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw'
              /> */}
              <Scene />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <h2 className='my-4 text-xl self-start tracking-widest font-medium md:text-sm lg:self-center'>
                Dylan Cornel
              </h2>
              <AnimatedText
                text='Life is a journey not a destination.'
                className='!text-6xl !text-left 
                xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl
                '
              />
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                As a full-stack developer, I turn imagination into innovation
                through the power of code. Embark on a legendary adventure in
                exploring my latest projects and portfolio.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link
                  href='/resume.pdf'
                  target={'_blank'}
                  className='flex items-center gap-1 bg-dark text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark
                  
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light md:p-2 md:px-4 md:text-base
                  '
                  download={true}
                >
                  Resume
                  <FiDownload />
                </Link>

                <Link
                  href='mailto:cdylan127@gmail.com'
                  target={'_blank'}
                  className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
