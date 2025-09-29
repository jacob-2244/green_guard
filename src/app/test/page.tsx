

// import ServiceCard from '@/components/ServiceCard'
// import ProgressBar from '@/components/ProgressBar'
// import React from 'react'
// import ProcessCard from '@/components/ProcessCard'
// import DeveloperCard from '@/components/DeveloperCard'
// import {
//   CarouselComponent,
//   CarouselItemsDirective,
//   CarouselItemDirective,
// } from "@syncfusion/ej2-react-navigations";


// const page = () => {
//   return (
//     <div className='w-full max-w-screen-sm min-h-200'>

//       <ServiceCard


//         image='/images/service-thumb.png'
//         icon='/images/service-icon1.png'
//         title='Tree Plantation'

//       />

//       <ProgressBar percentage={90} />


//       <div className="flex gap-4 justify-end w-full">
//         {/* up arrow  */}
//         <div className="group flex h-12 w-12 items-center justify-center rounded-full bg-app_primary text-white transition-colors duration-300 hover:bg-white hover:text-app_primary hover:cursor-pointer">
//           <div className="relative h-6 w-6 rotate-90">
//             <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
//               <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
//               <g id="SVGRepo_iconCarrier">
//                 <path fillRule="evenodd" clipRule="evenodd" d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z" fill="currentColor"></path>
//               </g>
//             </svg>
//           </div>
//         </div>

//       </div>

//       <ProcessCard
//       image='/images/project-img.png'
//       title='Climate'
//       heading='Cleaning Forest'
//       spinImage='/images/project-shape.png'



 

      
//       />


//       <DeveloperCard image='/images/testi-profile.png'

//       name='Angelina Watson'
//       position='Web Developer'
      
      
//       />



// <div className='control-container'>
//       <CarouselComponent>
//         <CarouselItemsDirective>
//           <CarouselItemDirective template='<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/cardinal.png" alt="cardinal" style="height:100%;width:100%;" /><figcaption class="img-caption">Cardinal</figcaption></figure>' interval={3000}/>
//           <CarouselItemDirective template='<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/hunei.png" alt="kingfisher" style="height:100%;width:100%;" /><figcaption class="img-caption">Kingfisher</figcaption></figure>' interval={1000}/>
//           <CarouselItemDirective template='<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/costa-rica.png" alt="keel-billed-toucan" style="height:100%;width:100%;" /><figcaption class="img-caption">Keel-billed-toucan</figcaption></figure>' interval={2000}/>
//           <CarouselItemDirective template='<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/kaohsiung.png" alt="yellow-warbler" style="height:100%;width:100%;" /><figcaption class="img-caption">Yellow-warbler</figcaption></figure>' interval={5000}/>
//           <CarouselItemDirective template='<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/bee-eater.png" alt="bee-eater" style="height:100%;width:100%;" /><figcaption class="img-caption">Bee-eater</figcaption></figure>' interval={6000}/>
//         </CarouselItemsDirective>
//       </CarouselComponent>
//     </div>


//     </div>
//   )
// }

// export default page














import ServiceCard from '@/components/ServiceCard'
import ProgressBar from '@/components/ProgressBar'
import React from 'react'
import ProcessCard from '@/components/ProcessCard'
import DeveloperCard from '@/components/DeveloperCard'
import dynamic from 'next/dynamic'
import DeveloperCarousel from '@/components/DeveloperCarousel'
import MemberCard from '@/components/MemberCard'
import WorkerTeam from '@/components/WorkerTeam'
import Footer from '@/components/Footer'



const developers = [
    {
      image: '/images/testi-profile.png',
      name: 'Angelina Watson',
      position: 'Web Developer'
    },
    {
      image: '/images/testi-profile2.png', // Add more developer images
      name: 'John Smith',
      position: 'UI/UX Designer'
    },
      {
      image: '/images/testi-profile.png', // Add more developer images
      name: 'John Smith',
      position: 'UI/UX Designer'
    },

      {
      image: '/images/testi-profile.png', // Add more developer images
      name: 'John Smith',
      position: 'UI/UX Designer'
    },
  ]

const SyncfusionCarousel = dynamic(() => import('@/components/SyncfusionCarousel'), {
  ssr: false
});

const page = () => {
  return (
    <>    <div className='w-full max-w-screen-sm min-h-200'>
      <ServiceCard
        image='/images/service-thumb.png'
        icon='/images/service-icon1.png'
        title='Tree Plantation'
      />

      <ProgressBar percentage={90} />

      <div className="flex gap-4 justify-end w-full">
        <div className="group flex h-12 w-12 items-center justify-center rounded-full bg-app_primary text-white transition-colors duration-300 hover:bg-white hover:text-app_primary hover:cursor-pointer">
          <div className="relative h-6 w-6 rotate-90">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z" fill="currentColor"></path>
              </g>
            </svg>
          </div>
        </div>
      </div>

      <ProcessCard
        image='/images/project-img.png'
        title='Climate'
        heading='Cleaning Forest'
        spinImage='/images/project-shape.png'
      />

      <DeveloperCard 
        image='/images/testi-profile.png'
        name='Angelina Watson'
        position='Web Developer'
      />

      <SyncfusionCarousel />


        <DeveloperCarousel developers={developers} />

        <MemberCard
        image='/images/team-thumb.png'
        name='Connie Diaz'
        position='CEO & Founder'
        />


        <WorkerTeam
        image='/images/blog-thumb1.jpg'
        title='top 10'
        supervisor='John D. Alexon'
        />

      
    
    </div>



  <Footer/>
    </>

  )
}

export default page