'use client'

import { Pointer } from '@/components/Cursor'
import { Syne } from 'next/font/google'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

 const MyCursor = () => (
  <div className={'flex h-[700px] w-full flex-col justify-between rounded-lg bg-black text-white'}>
    <div className="flex h-full w-full flex-col justify-center px-4 text-start sm:items-center sm:text-center">
      <div className="text-6xl font-bold">Users Love Interactions.</div>
      <div className="text-lg text-neutral-400">Hover over the illustration and you gonna see</div>
    </div>
    <Pointer name="Tony" className={'relative flex h-fit w-full items-end justify-center'}>
      <div className={'relative h-[400px] w-full overflow-hidden'}>
        <div className="relative flex h-full w-full justify-end pt-4">
          <AnimatedCursor text="Niko" />
          <div className="relative z-[1] h-full w-3/4 rounded-tl-xl bg-white px-6 pt-6 shadow-xl md:w-7/12">
            <div className="flex w-full items-center justify-start gap-4 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={30}
                height={30}
                color={'#000000'}
                fill={'none'}>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5 6C5 4.58579 5 3.87868 5.43934 3.43934C5.87868 3 6.58579 3 8 3H12.5789C15.0206 3 17 5.01472 17 7.5C17 9.98528 15.0206 12 12.5789 12H5V6Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.4286 12H13.6667C16.0599 12 18 14.0147 18 16.5C18 18.9853 16.0599 21 13.6667 21H8C6.58579 21 5.87868 21 5.43934 20.5607C5 20.1213 5 19.4142 5 18V12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={30}
                height={30}
                color={'#000000'}
                fill={'none'}>
                <path d="M12 4H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path
                  d="M8 20L16 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path d="M5 20H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={30}
                height={30}
                color={'#000000'}
                fill={'none'}>
                <path
                  d="M5.5 3V11.5C5.5 15.0899 8.41015 18 12 18C15.5899 18 18.5 15.0899 18.5 11.5V3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M3 21H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div className="mt-10 text-7xl font-thin text-black">
              <div className="relative max-w-sm border-[1.5px] border-cyan-300 px-0.5">
                Hi, it&apos;s my first page.
                <div className="absolute bottom-0 right-0 h-1 w-1 translate-x-1/2 translate-y-1/2 rounded-full bg-cyan-300" />
                <div className="absolute bottom-0 left-0 h-1 w-1 -translate-x-1/2 translate-y-1/2 rounded-full bg-cyan-300" />
                <div className="absolute right-0 top-0 h-1 w-1 -translate-y-1/2 translate-x-1/2 rounded-full bg-cyan-300" />
                <div className="absolute left-0 top-0 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0  h-full w-3/4 rounded-full bg-gradient-to-br from-red-500 via-fuchsia-500 to-red-500 opacity-[0.3] blur-3xl" />
    </Pointer>
  </div>
)

const AnimatedCursor: React.FC<{ className?: string; text: string }> = ({ className, text }) => (
  <motion.div
    initial={{ translateX: '0', translateY: '0' }}
    animate={{ translateX: ['0', '20px', '0'], translateY: ['0', '40px', '0'] }}
    transition={{ duration: 4, repeat: Infinity, bounce: true }}
    className={'relative z-[2] flex items-center gap-4'}>
    <div
      className={cn(
        'w-fit rounded-full border border-red-500 bg-red-500 px-2 py-1 text-white',
        className
      )}>
      {text}
    </div>
    <svg fill="none" height="18" viewBox="0 0 17 18" width="17">
      <path
        d="M15.5036 3.11002L12.5357 15.4055C12.2666 16.5204 10.7637 16.7146 10.22 15.7049L7.4763 10.6094L2.00376 8.65488C0.915938 8.26638 0.891983 6.73663 1.96711 6.31426L13.8314 1.65328C14.7729 1.28341 15.741 2.12672 15.5036 3.11002ZM7.56678 10.6417L7.56645 10.6416C7.56656 10.6416 7.56667 10.6416 7.56678 10.6417L7.65087 10.4062L7.56678 10.6417Z"
        fill="var(--red-500)"
        stroke="var(--red-400)"
        strokeWidth="1.5"
      />
    </svg>
  </motion.div>
)

export default MyCursor;