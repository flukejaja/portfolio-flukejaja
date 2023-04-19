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
export default function Home(props: { header: string }) {
  gsap.registerPlugin(ScrollTrigger,  MotionPathPlugin, );
  gsap.defaults({ ease: 'none' });
  const svgRef = useRef(null);
  const svgRefdiv4 = useRef(null);
  const svgRefdiv1 = useRef(null);
  const ref = useRef(null);
  let settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    className: "flex justify-center items-center h-10",
    centerMode: true,
    arrows: false,
    speed: 2000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: "linear",
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
    speed: 3000,
    cssEase: "linear",
    arrows: false,
    dots: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
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

  useEffect(() => {
    const svg = svgRef.current;
    const svg1 = svgRefdiv1.current;
    const svg4 = svgRefdiv4.current;
    if (svg) {
      gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: svg,
          scrub: true,
          start: 'top center',
          end: 'bottom center',
        },
      }).from('.theLine', { drawSVG: 1 }, 0)
    }
    if (svg4) {
      gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: svg4,
          scrub: true,
          start: 'top center',
          end: 'bottom center',
        },
      }).from('.theLine1', { drawSVG: 1 }, 0)
    }
    if (svg1) {
      gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: svg1,
          scrub: true,
          start: 'top center',
          end: 'bottom center',
        },
      }).from('.theLine2', { drawSVG: 1 }, 0)
    }
  }, []);

  const titleRef = useRef(null);

  // useEffect(() => {
  //   const tl = gsap.timeline({ repeat: -1, yoyo: true });
  //   tl.to(document.querySelectorAll('.title .word'), {
  //     opacity: 1,
  //     y: '0%',
  //     rotation: '0deg',
  //     ease: 'power4.inOut',
  //     duration: 1.2,
  //     stagger: 0.5,
  //   });
  //   gsap.set(document.querySelectorAll('.title'), { opacity: 1 });
  //   gsap.set(document.querySelectorAll('.title .word'), { opacity: 0.0001, y: '200%', rotation: '3deg' });
  //   new SplitText(document.querySelector('.title'), {
  //     type: 'lines words',
  //     linesClass: 'line line--++',
  //     wordsClass: 'word word--++'
  //   });
  // }, []);
  const image = ['/image/next-js-icon-512x512-zuauazrk.png', '/image/Fastify.png', '/image/socket-io-logo-png-transparent.png', '/image/Tailwind_CSS_Logo.svg.png'
    , '/image/4195cf989fac0128a89669f40a1e3496.png', '/image/5847f40ecef1014c0b5e488a.png', '/image/django-logo-negative.png', '/image/prismaHD.png', '/image/communityIcon_4g1uo0kd87c61.png', '/image/Vue.png']

  return (
    <div className='h-full bg-white flex flex-col font-akshar ' ref={ref}>
      <div id='Home' className='h-[50rem] flex flex-wrap justify-center items-center text-black first'>
        <div className='flex flex-col  md:flex-row h-full w-full justify-center items-center relative'>
          <div className='w-full flex flex-col items-center justify-center  h-full '>
            <div className='h-44'></div>
            <div className='flex flex-col  h-full w-[40rem] max-w-full items-center space-y-5 title' ref={titleRef}>
              <p className='text-2xl md:text-6xl '>Hello</p>
              <p className='text-2xl md:text-6xl '>My name is </p>
              <p className='text-2xl md:text-6xl '>Pakkapong</p>
              <p className='text-2xl md:text-6xl '>Sittiporn</p>
            </div>

          </div>
          <div className='w-full h-full flex justify-center items-center relative overflow-hidden'>
            <div className='h-[40rem] w-[40rem] max-w-full animate-movemask ' style={{
              WebkitMask: "url('/image/Regular_blob.svg') no-repeat",
              mask: "url('/image/Regular_blob.svg') no-repeat"
              , transformOrigin: "50% 50%"
            }}> <Image
                src='/image/53e98f5701d854bc1f9295cc7fbb25f6.jpg'
                alt=''
                className='object-fit'
                fill
              /></div>
          </div>
          <div className='absolute w-full inset-x-0 bottom-10 '>
            <Slider {...settings} >
              {
                image.map((img, idx) => {
                  return <div key={idx} >
                    <Image src={img} alt='' width={50} height={50} className='object-fit ' />
                  </div>
                })
              }
            </Slider>
          </div>
        </div>
      </div>
      <div id='About' className='h-[50rem] bg-black flex justify-center items-center text-black twice relative '>

        <div id="gsap-div" className='px-5 flex flex-col md:flex-row  w-full space-x-0 md:space-x-5 justify-center items-center space-y-5 md:space-y-0'>
          <a href='https://www.codewars.com/users/flukejaja' className='hover:shadow-pink-600 shadow-2xl duration-1000 h-60 w-[30rem] max-w-full bg-white flex items-center justify-center rounded-2xl text-black relative'>
            <Image src={'/image/codewars.jpg'} alt='' fill className="w-full h-full top-0 left-0 object-cover rounded-2xl" />
          </a>
          <div className='w-[30rem] max-w-full bg-white h-60 rounded-2xl hover:shadow-pink-600 shadow-2xl duration-1000'><p>About me</p></div>
          <div className='w-[30rem] max-w-full bg-white h-60 flex justify-center text-black rounded-2xl px-5 hover:shadow-pink-600 shadow-2xl duration-1000'>
            <div className='w-full  flex justify-center flex-col items-center whitespace-nowrap'>
              <p>Tools</p>
              <p>Nextjs / React</p>
              <p>Vue</p>
              <p>Flutter / Firebase</p>
              <p>Djano</p>
              <p>Prisma / Fastify</p>
              <p>Bootstrap / Tailwind css</p>
            </div>
            <div className='w-full  flex justify-center flex-col items-center'>
              <p>Skill</p>
              <p>Javascript</p>
              <p>Typescript</p>
              <p>Dart</p>
              <p>Php</p>
              <p>Python</p>
              <p>Java</p>
            </div>
            <div className='w-full  flex justify-center flex-col items-center whitespace-nowrap'>
              <p>Database</p>
              <p>MongoDB</p>
              <p>MySQL</p>
              <p>MariaDB</p>
              <p>SQLite</p>
            </div>
          </div>
        </div>
        <svg ref={svgRefdiv1} height="100%" className='absolute inset-y-0 right-0 w-24 md:w-48'>
          <path className='theLine2' d="M 50 0 L 50 800" stroke="#E30B5C" strokeWidth="5" fill="none" />
        </svg>
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
                <p>Tailwinds</p>
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
                <p>Tailwinds</p>
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
        <svg ref={svgRef} height="100%" className='absolute inset-y-0 right-0 w-24 md:w-48'>
          <path className='theLine' d="M 50 0 L 50 640" stroke='white' strokeWidth="5" fill="none" />
          <path className='theLine' d="M 50 0 L 50 320 C 50 440, 150 440, 150 520 C 150 600, 50 600, 50 640" stroke='#E30B5C' strokeWidth="5" fill="none" />
        </svg>
        <svg ref={svgRef} height="100%" className='absolute inset-y-0 left-0 w-[40%]'>
          <path className='theLine' d="M 0 50 H 640" stroke='white' strokeWidth="5" fill="none" />
        </svg>
      </div>

      <div id='Contact' className='h-[40rem] bg-black flex justify-center items-center relative text-black px-10 py-10'>
        <div className='bg-white w-[40rem] flex md:flex-row flex-col h-[30rem] items-center rounded-3xl shadow-2xl shadow-pink-500 '>
          <div className='w-full  h-full flex justify-center items-center'>
            <div className='h-44 w-44 rounded-full overflow-hidden relative'>
              <Image src={'/image/53e98f5701d854bc1f9295cc7fbb25f6.jpg'} alt='proflie' fill className='h-full w-full object-fit' />
            </div>
          </div>
          <div className='w-full h-full  flex flex-col justify-center items-center'>
            <a>Github : flukejaja</a>
            <a>Facebook : Pakkapong Sittiporn</a>
          </div>
        </div>
        <svg ref={svgRefdiv4} height="100%" className='absolute inset-y-0 right-0 w-24 md:w-48'>
          <path className='theLine1 md:bg-white bg-black' d="M 50 0 L 50 640" stroke='#E30B5C' strokeWidth="5" fill="none" />
        </svg>
      </div>

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
