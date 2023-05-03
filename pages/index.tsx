import { Inter } from 'next/font/google'
import { ReactElement, useCallback, useEffect, useRef, useState } from 'react'
import Layout from './layout/layout'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// import { DrawSVGPlugin } from 'gsap-trial/dist/DrawSVGPlugin';
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin';
// import { SplitText } from 'gsap-trial/dist/SplitText';
import ScrollSpy from "react-ui-scrollspy";
import { motion, Variants } from "framer-motion";
import AnimatedTextWord from './animated/text';
import Head from 'next/head'

export default function Home() {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin,);
  gsap.defaults({ ease: 'none' });
  const ref = useRef(null);
  const slideDiv: Variants = {
    offscreen: {
      x: 60,

    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2
      }
    }
  }
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: any) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };
  const cardVariants: Variants = {
    offscreen: {
      y: 300,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2
      }
    }
  };
  let settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    className: "flex justify-center items-center h-10",
    centerMode: true,
    arrows: false,
    speed: 3000,
    autoplaySpeed: 0,
    pauseOnHover: false,
    cssEase: "linear",
    draggable: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  let settingsProfile = {
    infinite: true,
    slidesToShow: 1,
    speed: 10000,
    cssEase: "linear",
    arrows: false,
    dots: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    pauseOnHover: false
  };
  useEffect(() => {
    const element = ref.current as any
    gsap.fromTo(
      element.querySelector("#gsap-div"),
      {
        opacity: 0,
        scale: 0.2,
        y: -20
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: element.querySelector(".first"),
          start: "top center",
          end: "bottom top",
          scrub: true
        }
      }
    );
  }, []);
  const image = ['/image/next-js-icon-512x512-zuauazrk.png', '/image/Fastify.png', '/image/socket-io-logo-png-transparent.png', '/image/Tailwind_CSS_Logo.svg.png'
    , '/image/4195cf989fac0128a89669f40a1e3496.png', '/image/5847f40ecef1014c0b5e488a.png', '/image/django-logo-negative.png', '/image/prismaHD.png', '/image/communityIcon_4g1uo0kd87c61.png', '/image/Vue.png']

  return (
    <div className='h-full bg-white flex flex-col font-akshar ' ref={ref}>
      <Head>
        <title>Fluke jaja</title>
      </Head>
      <ScrollSpy
        activeClass="active-scroll-spy"
        offsetBottom={100}
        scrollThrottle={80}
        useBoxMethod
        updateHistoryStack={false}
      >
        <div id='Home' className='h-[50rem] flex flex-wrap justify-center items-center text-black first'>
          <div className='flex flex-col  md:flex-row h-full w-full justify-center items-center relative'>
            <div className='w-full flex flex-col items-center justify-center h-1/2  md:h-full '>
              <div className='h-52'></div>
              <div className='flex flex-col  h-full w-1/2 items-center space-y-5 ' >
                <AnimatedTextWord text="Hi" />
                <AnimatedTextWord text="I'm Pakkapong Sittiporn" />
                <AnimatedTextWord text="And" />
                <AnimatedTextWord text="I'm a Junior Developer" />
              </div>

            </div>
            <div className='w-full h-1/2  md:h-full flex justify-center items-center relative overflow-hidden md:pt-0'>
              <div className='h-[20rem] w-[20rem] md:h-[40rem] md:w-[40rem] max-w-full md:animate-movemask bg-black' style={{
                WebkitMask: "url('/image/Regular_blob.svg') no-repeat",
                mask: "url('/image/Regular_blob.svg') no-repeat"

              }}>
                <Image
                  src='/image/53e98f5701d854bc1f9295cc7fbb25f6.jpg'
                  alt=''
                  className='object-cover w-full h-full'
                  fill
                />
              </div>
            </div>
            <div className='absolute w-full inset-x-0 bottom-10 '>
              <Slider {...settings} >
                {
                  image.map((img, idx) => {
                    return <div key={idx} >
                      <Image src={img} alt='' width={50} height={50} className='object-fit' />
                    </div>
                  })
                }
              </Slider>
            </div>
          </div>
        </div>
        <div id='About' className='h-[50rem] bg-black flex justify-center items-center text-black twice relative '>
          <div id="gsap-div" className='px-5 flex flex-col md:flex-row  w-full space-x-0 md:space-x-5 justify-center items-center space-y-5 md:space-y-0'>
            <a href='https://www.codewars.com/users/flukejaja' className='hover:shadow-pink-600 shadow-2xl duration-1000 h-60 w-[20rem] max-w-full bg-white flex flex-col items-center justify-center rounded-2xl text-black relative'>
              <Image src={'/image/codewars.jpg'} alt='' fill className="w-full h-full top-0 left-0 object-cover rounded-2xl" />
              <div className='absolute inset-x-0 -top-5 h-8'><Image src={'/large.svg'} alt='' fill className="w-full h-full object-fit" /></div>
            </a>
            <div className='w-[20rem] max-w-full bg-white h-60 rounded-2xl hover:shadow-pink-600 shadow-2xl duration-1000 flex justify-center items-center px-3 py-3'>
              <p className='text-lg'>Experienced in Next.js, Fastify, and MongoDB, knowledgeable in UI/UX design and API development. A quick learner with strong communication and problem-solving skills.</p>
            </div>
            <div className=' w-[20rem] max-w-full bg-white h-60 flex justify-center text-black rounded-2xl px-5 hover:shadow-pink-600 shadow-2xl duration-1000'>
              <div className='w-2/6  flex justify-center flex-col items-center whitespace-nowrap'>
                <p>Tools</p>
                <p>Nextjs / React</p>
                <p>Vue</p>
                <p>Flutter / Firebase</p>
                <p>Prisma / Fastify</p>
                <p>Bootstrap </p>
                <p>Tailwind css</p>
              </div>
              <div className='w-2/6  flex justify-center flex-col items-center whitespace-nowrap'>
                <p>Skill</p>
                <p>Javascript</p>
                <p>Typescript</p>
                <p>Dart</p>
                <p>Php</p>
                <p>Python</p>
                <p>Java</p>
              </div>
              <div className='w-2/6  flex justify-center flex-col items-center whitespace-nowrap'>
                <p>Database</p>
                <p>MongoDB</p>
                <p>MySQL</p>
                <p>MariaDB</p>
                <p>SQLite</p>
              </div>
            </div>
          </div>
          <div className='absolute -bottom-10 right-0 h-16 w-full'>
            <motion.svg
              width="100%"
              height="100%"
              viewBox="0 0 4000 200"
              initial="hidden"
              animate="visible"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.line
                x1="50"
                y1=""
                x2="4000"
                y2="0"
                stroke="#E30B5C"
                strokeWidth={50}
                variants={draw}
                custom={2}
              />
            </motion.svg>
          </div>
        </div>
        <div id='Projects' className='h-[40rem] flex justify-center items-center relative w-full bg-black text-white md:text-black '>
          <div className='w-[50rem] max-w-full  absolute  h-full py-20 bg-black md:bg-white none md:hidden'>
            <Slider {...settingsProfile} >
              <div className='w-[40rem]  h-[30rem] '>
                <div className='h-full w-full bg-black md:bg-white flex flex-col items-center py-10 px-10 '>
                  <p className='text-xl  mb-auto'>Tictactoe</p>
                  <div className='h-[15rem] w-[20rem] bg-red-500 relative'>
                    <Image src={'/image/tictos.png'} alt='' fill className='h-full w-full object-fit' />
                  </div>
                  <p>Tools</p>
                  <p>Nextjs</p>
                  <p>Tailwind</p>
                </div>
              </div>
              <div className='w-[40rem]  h-[30rem] '>
                <div className='h-full w-full bg-black md:bg-white flex flex-col items-center py-10 px-10'>
                  <p className='text-xl  mb-auto'>Adaptive Testing</p>
                  <div className='h-[15rem] w-full bg-red-500 relative'>
                    <Image src={'/image/Screenshot 2023-04-19 144609.png'} alt='' fill className='h-full w-full object-cover' />
                  </div>
                  <p>Tools</p>
                  <p>Nextjs</p>
                  <p>Tailwind</p>
                  <p>Fastity / MongoDB</p>
                  <p>Prisma</p>
                </div>
              </div>
              <div className='w-[40rem]  h-[30rem] '>
                <div className='h-full w-full bg-black md:bg-white flex flex-col items-center py-10 px-10'>
                  <p className='text-xl  mb-auto'>Inventory Management</p>
                  <div className='h-[15rem] w-full  relative'>
                    <Image src={'/image/341031484_187689927424875_5357876837562331708_n.jpg'} alt='' fill className='h-full w-full object-contain' />
                  </div>
                  <p>Tools</p>
                  <p>Flutter</p>
                  <p>Firebase</p>
                </div>
              </div>
            </Slider>
          </div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            className='w-full'
          >
            <motion.div variants={cardVariants}>
              <div className='md:flex hidden w-full justify-center  space-x-3'>
                <div className='w-[30rem] max-w-full bg-black shadow-pink-600 shadow-xl animate-mymove rounded-lg overflow-hidden'>
                  <div className='h-full w-full bg-white flex flex-col items-center py-10 px-10 rounded-lg'>
                    <p className='text-xl  mb-auto'>Tictactoe</p>
                    <div className='h-[15rem] w-[20rem] bg-red-500 relative'>
                      <Image src={'/image/tictos.png'} alt='' fill className='h-full w-full object-fit' />
                    </div>
                    <p>Tools</p>
                    <p>Nextjs</p>
                    <p>Tailwinds</p>
                  </div>
                </div>
                <div className='w-[30rem] max-w-full bg-black shadow-pink-600 shadow-xl animate-mymove rounded-lg overflow-hidden'>
                  <div className='h-full w-full bg-white flex flex-col items-center py-10 px-10 rounded-lg'>
                    <p className='text-xl  mb-auto'>Adaptive Testing</p>
                    <div className='h-[15rem] w-full bg-red-500 relative'>
                      <Image src={'/image/Screenshot 2023-04-19 144609.png'} alt='' fill className='h-full w-full object-cover' />
                    </div>
                    <p>Tools</p>
                    <p>Nextjs</p>
                    <p>Tailwinds</p>
                    <p>Fastity / MongoDB</p>
                    <p>Prisma</p>
                    <a target="_blank" className='text-pink-800 underline hover:cursor-pointer' href='https://adaptive-testing.vercel.app/'>Click links</a>
                  </div>
                </div>
                <div className='w-[30rem] max-w-full bg-black shadow-pink-600 shadow-xl animate-mymove rounded-lg overflow-hidden'>
                  <div className='h-full w-full bg-white flex flex-col items-center py-10 px-10 '>
                    <p className='text-xl mb-auto'>Inventory Management</p>
                    <div className='h-[15rem] w-full  relative'>
                      <Image src={'/image/341031484_187689927424875_5357876837562331708_n.jpg'} alt='' fill className='h-full w-full object-contain' />
                    </div>
                    <p>Tools</p>
                    <p>Flutter</p>
                    <p>Firebase</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <div id='Contact' className='h-[40rem] bg-black flex justify-center items-center relative text-black px-10 py-10'>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.7 }}
            className='bg-white w-[40rem] max-w-full px-10 flex md:flex-row flex-col h-[30rem] items-center rounded-3xl shadow-2xl shadow-pink-500  justify-center'>
            <motion.div variants={slideDiv} className='w-full  h-full flex justify-center items-center md:flex-row flex-col'>
              <div >
                <div className='h-44 w-44 rounded-full overflow-hidden relative'>
                  <Image src={'/image/53e98f5701d854bc1f9295cc7fbb25f6.jpg'} alt='proflie' fill className='h-full w-full object-fit' />
                </div>
              </div>
              <div className='w-full  flex flex-col justify-center items-center'>
                <a>Github : flukejaja</a>
                <a>Facebook : Pakkapong Sittiporn</a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </ScrollSpy>
    </div>
  )
}
Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}


