import { motion } from "framer-motion"
// import me from "/Users/krishnasharma/Desktop/Portfolio/src/assets/Me.png"
import me from '../assets/Me.png';

const HERO_CONTENT = `I am an enthusiastic college student with a solid understanding of full-stack development, including front-end technologies like React and Next.js, as well as back-end technologies such as Node.js, MySQL, PostgreSQL, and MongoDB. While I am still building on my practical experience, I am eager to apply my knowledge to develop innovative web applications and gain hands-on experience that can contribute to creating exceptional user experiences. `;

const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5
        }
    }
}
const childVarints = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,

        }
    }
}
const Hero = () => {
    return (
        <div className='pb-4 lg:mb-36'>
            <div className='flex flex-wrap lg:flex-row-reverse'>
                <div className='w-full lg:w-1/2'>

                    <div className='flex justify-center lg:p-10'>
                        <motion.img className=' rounded-3xl  'src={me}
                        alt="Krishna Sharma"
                        width={550}
                        height={50}
                        initial={{x:100, opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration: 1,delay:1.5}} />
                        
                    </div>

                </div>
                <div className='w-full lg:w-1/2'>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className='flex flex-col lg:items-start mt-10'>
                        <motion.h2
                            variants={childVarints}
                            className='pb-2 text-4xl tracking-tighter lg:text-8xl '>Krishna</motion.h2>
                        <motion.span
                            variants={childVarints}
                            className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent'>FullStack Developer</motion.span>
                        <motion.p
                            variants={childVarints}
                            className='my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter'>
                            {HERO_CONTENT}
                        </motion.p>
                        <motion.a 
                        variants={childVarints}
                        href='/12216438.pdf'
                            target="_blank"
                            rel="noopener noreferrer"
                            download={true}
                            className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10"
                        >Download Resume</motion.a>
                    </motion.div>

                </div>
            </div>

        </div>
    )
}

export default Hero
