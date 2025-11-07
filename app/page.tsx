'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';

export default function HomePage() {

  const desktopRef = useRef(null);
  const mobileRef = useRef(null);

  const { scrollYProgress: desktopScroll } = useScroll({
    target: desktopRef,
    offset: ["start start", "end end"]
  });

  // MOBILE scroll
  const { scrollYProgress: mobileScroll } = useScroll({
    target: mobileRef,
    offset: ["start start", "end end"]
  });



  // Animate sun
  const sunY = useTransform(desktopScroll, [0, 0.35], [0, 200]);
  const sunOpacity = useTransform(desktopScroll, [0, 0.25], [1, 0]);

  const mobileElementsOpacity = useTransform(mobileScroll, [0, 0.25], [1, 0]);

  const raysOpacity = useTransform(desktopScroll, [0, 0.1], [0.3, 0]);

  // Ashtrang text
  const ashtrangOpacity = useTransform(desktopScroll, [0.20, 0.30], [0, 1]);
  const ashtrangY = useTransform(desktopScroll, [0.35, 0.55], [40, 0]);

  // Elements disappear on 3rd screen
  const elementsOpacity = useTransform(desktopScroll, [0, 0.75], [1, 0]);
  const elementsY = useTransform(desktopScroll, [0.7, 1], [0, -300]);

  return (
    <>
      <div ref={desktopRef} className="md:hidden hidden lg:flex bg-black text-white relative overflow-x-hidden pb-12">
        {/* elements.svg as background */}
        <div>
          <motion.div
            className="fixed -top-32 inset-0 z-15"
            style={{ opacity: elementsOpacity, y: elementsY }}
          >
            <Image src="/elements.svg" alt="bg" layout="fill" objectFit="cover" />
          </motion.div>

          {/* sun.svg centered */}
          <motion.div
            style={{ y: sunY, opacity: sunOpacity }}
            className="fixed top-2/3 left-[825px] z-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          >
            <Image src="/sun.svg" alt="sun" width={500} height={500} />
          </motion.div>
          <motion.div
            style={{ opacity: raysOpacity }}
            className="fixed top-0 left-0 w-screen z-5 pointer-events-none"
          >
            <Image src="/rays.svg" alt="sun" width={1000} height={500} className='w-full' />
          </motion.div>

          <motion.div
            className="fixed top-[375px] left-[550px] z-20"
            style={{ opacity: elementsOpacity, y: elementsY }}
          >
            <Image src="/birds.svg" alt="plane" width={200} height={200} />
          </motion.div>
          <motion.div
            className="fixed top-[325px] left-[850px] z-20"
            style={{ opacity: elementsOpacity, y: elementsY }}
          >
            <Image src="/plane.svg" alt="plane" width={300} height={200} />
          </motion.div>


          {/* First screen - 8th Mile */}
          <section className="h-screen relative z-0 p-10">
            <h1 className="pl-16 z-0 text-[150px] font-bold font-sans pt-16 delagothic">8<sup>th</sup> MILE</h1>
            <p className='delagothic font-bold pl-[370px] -mt-8 tracking-wider text-2xl'>TECHNO-CULTURAL FESTIVAL</p>
          </section>

          {/* Second screen - Ashtrang reveal */}
          <section className="min-h-screen py-36 z-10 relative flex flex-col justify-center items-center">
            {/* <motion.div
          className="text-[150px] text-[#f9dd9c] font-semibold samarkan px-4"
          style={{ opacity: ashtrangOpacity, y: ashtrangY }}
        >
          Ashtrang{' '}
        </motion.div>
        <motion.div className="text-xl text-[#f9dd9c] poppins tracking-widest"
          style={{ opacity: ashtrangOpacity, y: ashtrangY }}>
          ROOTS OF CULTURE | WINGS OF TECHNOLOGY
        </motion.div> */}
            <motion.div style={{ opacity: ashtrangOpacity, y: ashtrangY }}>
              <Image src={'/ashtrang.svg'} alt='ashtrang' width={800} height={200} />
            </motion.div>
          </section>

          {/* Third screen - Hide all elements and show welcome */}
          <section className="min-h-screen mt-56 flex flex-col items-center justify-center z-10 relative">
            <div className="flex flex-col px-24">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0 }}
                className="font-sans font-bold text-[#f9dd9c] text-4xl md:text-6xl w-fit mb-4">About RVCE</motion.div>
              <div className="flex flex-col md:flex-row gap-4">
                <motion.div initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0 }} className="fraunces text-sm md:text-xl md:w-3/5">
                  Rashtreeya Vidyalaya College of Engineering, founded in 1963 by Late Sri M.C. Shivananda Sharma, was established to provide quality education to all. Over the past 60 years, it has grown into a hub of academic excellence and holistic development. As one of the nation’s leading institutions, RVCE continues to empower students in science, technology, culture, and sports—upholding a legacy of progress for over half a century.
                </motion.div>
                <motion.div initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0 }} className="md:w-2/5 flex justify-center items-center">
                  <Image src={'/rvce.png'} alt="rvce college pic" width={500} height={200} className="rounded-xl" />
                </motion.div>
              </div>
            </div>
            <div className="flex flex-col px-24 py-10">
              <div className="flex justify-end w-full">
                <motion.div initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0 }} className="font-sans font-bold text-[#f9dd9c] text-4xl md:text-6xl w-fit mb-4">
                  About 8<sup>th</sup> Mile
                </motion.div>
              </div>
              <div className="flex md:flex-row flex-col gap-4">
                <motion.div initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0 }} className="hidden md:flex w-2/5 justify-center items-center">
                  <Image src={'/amaal.png'} alt="rvce college pic" width={500} height={200} className="rounded-xl" />
                </motion.div>
                <motion.div initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0 }} className="fraunces text-sm md:text-xl md:w-3/5">
                  R V College of Engineering, Bangalore, hosts the renowned 8th Mile techno-cultural festival, bringing together students from across India to showcase their talents in technical and cultural events. The fest promotes healthy competition, camaraderie, and mutual respect among participants. Known for its strong legacy in academics, sports, and extracurriculars, RVCE continues to set benchmarks of excellence nationwide.
                </motion.div>
                <motion.div initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0 }}
                  className="md:hidden flex justify-center items-center mx-">
                  <Image src={'/amaal.png'} alt="rvce college pic" width={500} height={200} className="rounded-xl" />
                </motion.div>
              </div>
            </div>
            <div><a href='/events' className='bg-[#f9dd9c] text-black font-bold py-2 px-4 rounded'>Explore our Events</a></div>
          </section>
        </div>
      </div>
      <div ref={mobileRef} className="min-h-screen bg-black text-white lg:hidden relative overflow-x-hidden pb-12">
        {/* Fixed Background Waves */}
        <Image
          src="/waves.svg"
          width={480}
          height={1080}
          alt="background waves"
          className="fixed top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Concentric Images */}
        <motion.div className="relative w-full h-screen flex items-center justify-center z-10" >
          <div className="relative w-[400px] h-[400px]">
            {/* Green Ring */}
            <div className="absolute inset-0 mx-auto my-auto z-10 w-[320px] h-[320px]">
              <Image
                src="/green.svg"
                alt="green ring"
                fill
                className="object-contain animate-[spin_30s_linear_infinite_reverse]"
              />
            </div>

            {/* Human Layer */}
            <div className="absolute inset-0 z-20 w-[400px] h-[400px]">
              <Image
                src="/human.svg"
                alt="human"
                fill
                className="object-contain"
                style={{ transform: 'translateX(-15px) translateY(-15px)' }}
              />
            </div>

            {/* Orange Ring */}
            <div className="absolute inset-0 mx-auto my-auto z-30 w-[275px] h-[275px]">
              <Image
                src="/orange.svg"
                alt="orange ring"
                fill
                className="object-contain translate-x-[0px] translate-y-[0px] animate-[spin_30s_linear_infinite]"
              />
            </div>

            <div className="absolute inset-0 mx-auto my-auto z-30 w-[240px] h-[240px]">
              <Image
                src="/centre.svg"
                alt="orange ring"
                fill
                className="object-contain"
                style={{ transform: 'translateX(1px) translateY(0px)' }}
              />
            </div>
            <motion.div className='fixed top-56 right-0 -mr-12'
              initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} style={{ opacity: mobileElementsOpacity }}>
              <Image src={'/flower1.svg'} width={100} height={50} alt='flower1' />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} style={{ opacity: mobileElementsOpacity }} className='fixed bottom-52 left-0 -ml-10'>
              <Image src={'/flower2.svg'} width={100} height={50} alt='flower2' />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} style={{ opacity: mobileElementsOpacity }} className='fixed bottom-2 right-0 -mr-18'>
              <Image src={'/dance.svg'} width={200} height={100} alt='dance' />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} style={{ opacity: mobileElementsOpacity }} className='fixed bottom-2 left-0 -ml-12 '>
              <Image src={'/musician.svg'} width={250} height={200} alt='musician' />
            </motion.div>
            <motion.div style={{ opacity: mobileElementsOpacity }} className='fixed bottom-2 left-0 -ml-12 '>
              <Image src={'/endstrip.svg'} width={600} height={200} alt='endstrip' />
            </motion.div>
          </div>
        </motion.div>
        <section className="min-h-screen mt-40 flex flex-col items-center justify-center z-10 relative px-6">
          <div className="flex flex-col gap-4">
            {/* About RVCE */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="font-sans font-bold text-[#f9dd9c] text-3xl mb-4"
            >
              About RVCE
            </motion.div>

            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="fraunces text-sm"
            >
              Rashtreeya Vidyalaya College of Engineering, founded in 1963 by Late Sri M.C. Shivananda Sharma, was established to provide quality education to all. Over the past 60 years, it has grown into a hub of academic excellence and holistic development. As one of the nation’s leading institutions, RVCE continues to empower students in science, technology, culture, and sports—upholding a legacy of progress for over half a century.
            </motion.div>

            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center items-center my-4"
            >
              <Image src="/rvce.png" alt="RVCE College" width={300} height={200} className="rounded-xl" />
            </motion.div>

            {/* About 8th Mile */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="font-sans font-bold text-[#f9dd9c] text-3xl mb-4 text-right"
            >
              About 8<sup>th</sup> Mile
            </motion.div>

            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center items-center my-4"
            >
              <Image src="/amaal.png" alt="8th Mile Festival" width={300} height={200} className="rounded-xl" />
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="fraunces text-sm"
            >
              R V College of Engineering, Bangalore, hosts the renowned 8th Mile techno-cultural festival, bringing together students from across India to showcase their talents in technical and cultural events. The fest promotes healthy competition, camaraderie, and mutual respect among participants. Known for its strong legacy in academics, sports, and extracurriculars, RVCE continues to set benchmarks of excellence nationwide.
            </motion.div>
            <div className='flex justify-center items-center'>
              <a href='/events' className='mt-10 bg-[#f9dd9c] text-black font-bold py-1 px-2 rounded'>Explore our Events</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
