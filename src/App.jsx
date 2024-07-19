import './App.css'
import travels from './travels'
export function Navbar(){
  return (
    <>
    <nav className='bg-[#F55A5A] h-[55px] flex items-center justify-center gap-2'>
      <img src="./Fill 213.svg" alt="web" className='w-[24px] h-[24px]'/>
      <p className='font-medium text-[15px] text-white'>my travel journal</p>
    </nav>
    </>
  )
}

export function Travels(props){
  return (
    <>
    <div className= {`flex gap-5 items-center mt-8 w-[470px] h-[168px] mx-auto ${props.id !== travels.length && 'pb-10 border-b'}`}>
      <img src = {props.img} className='rounded-lg'/>
      <div className='flex flex-col gap-2 px-2 borderb'>
        <div className='flex items-center gap-2'>
          <img src='./Fill 220.svg' className='w-[7px] h-[10px]'/>
          <p className='text-[10.24px]'>{props.country}</p>
          <p className='border-b-2 border-[#918E9B] text-[#918E9B] text-[10.24px]'>View on Google Maps</p>
        </div>
        <p className='text-[25px] font-bold'>{props.location}</p>
        <p className='text-[10.24px] font-bold'>{props.date.start} - {props.date.end}</p>
        <p className='text-[10.24px]'>{props.description}</p>
      </div>
    </div>
    </>
  )
}

export default function App() {
  console.log(travels)
  const travelJournal = travels.map(travel => <Travels 
    key = {travel.id}
    {...travel}/>)
  return (
    <>
    <div className='w-[550px] h-[704px] mx-auto bg-white shadow-lg'>
      <Navbar />
      <div className='flex flex-col gap-2'>
      {travelJournal}
      </div>
      </div>
    </>
  )
}


