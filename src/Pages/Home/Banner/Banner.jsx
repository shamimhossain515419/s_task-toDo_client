import Lottie from 'react-lottie';
import animationData from '../../../assets/animation_lkvcqeb4.json'
import Container from '../../../Component/Container';
import { MdOutlineAdd } from 'react-icons/md';
import './Banner.css'
import { Link } from 'react-router-dom'
const Banner = () => {

     const defaultOptions = {
          loop: true,
          autoplay: true,
          animationData: animationData,
          rendererSettings: {
               preserveAspectRatio: 'xMidYMid slice'
          }
     };
     return (
          <div className='bannerBody my-14  '>
               {/* Lottie animation image  */}
               <Container>
                    <div className=' max-h-[400px] mx-auto  max-w-[400px]'>
                         <Lottie options={defaultOptions}
                              
                         />

                    </div>

                    <div className='  max-w-[900px] mx-auto my-8'>
                         <div>
                              <h1 className=' text-center text-4xl font-bold my-6'> S-task-ToDo</h1>
                         </div>

                         <h2 className=' text-center      text-xl  font-normal  my-7'>S Task ToDo List App is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom. It is helpful in planning our daily schedules. </h2>

                         {/* getStart buttton  */}
                         <div className='max-w-[250px]  mx-auto'>
                              <Link className='getStart BgColor my-5'>

                                   <MdOutlineAdd size={24}></MdOutlineAdd>
                                   <span className=' uppercase    text-lx font-bold'> add your ToDo new </span>

                              </Link>
                         </div>
                    </div>
               </Container>

          </div>
     );
};

export default Banner;