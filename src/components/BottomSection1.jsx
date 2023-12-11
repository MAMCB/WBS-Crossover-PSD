import background from '../assets/h1-background-img.png';
import portrait from '../assets/Ellipse 624.png'
import calender from '../assets/calender.png'
import avatar from '../assets/avatar.png'
import stars from '../assets/stars.png'
import switzerlandPic from '../assets/switzerland-pic.png'
import switzerlandIcon from '../assets/switzerland-icon.png'
import location from '../assets/location.png'
import bird from '../assets/bird.png'
import egypt from '../assets/Egypt-icon.png'
import pyramid from '../assets/pyramid.png'
import brasilien from '../assets/Brasilien-icon.png'




export default function BottomSection1 () {





    return (
        <div className="flex flex-col items-center" >
            <p style={{color: "#DF6951"}}>TRENDY</p>
            <h2 className='text-5xl font-bold mb-12'>Our Trending Tour <br /> Packages</h2>
            <div className='flex gap-10 w-[80%] flex-wrap sm:flex-nowrap'>
                <div>
                    <div>
                        <img src={switzerlandPic} alt="" />
                        <img className="mt-[-30px] mb-[-40px] ml-2 h-20" src={switzerlandIcon} alt="" />
                    </div>
                    <div className='flex mt-5'>
                        <img className='pr-2 h-5' src={calender} alt="" />
                        <p className='pr-5 text-sm'>8 Days</p>
                        <img className='pr-2 h-5' src={avatar} alt="" />
                        <p className='text-sm'>25 People Going</p>
                    </div>
                    <div className='flex justify-between mt-2'>
                        <p className='text-3xl font-bold'>Switzerland</p>
                        <img className=" h-4 items-center" src={stars} alt="" />
                    </div>
                    <div className='flex mt-2'>
                        <img src={location} alt="" />
                        <p>Europe</p>
                    </div>
                    <div className='flex mt-2'>
                        <span className='text-2xl font-semibold pr-5' style={{color: "#DF6951"}}>1,000 $ </span>
                        <span className=' flex line-through text-lg items-end font-semibold' style={{color: "#7D7D7D"}}>1,200 $</span>
                    </div>
                    
                    <p className='text-left mt-2'>Nam exercitationem commodi et ducimus quia in dolore 
                        animi sit mollitia amet id quod eligendi. Et labore 
                        harum non nobis ipsum eum molestias mollitia et corporis 
                        praesentium a laudantium internos.</p>
                        <button className='flex justify-start mt-10' style={{backgroundColor: "#DF6951", color:"white"}}>
                        Explore Now
                        </button>
                
                </div>

                <div>
                    <div>
                        <img src={bird} alt="" />
                        <img className="mt-[-30px] mb-[-40px] ml-2 h-20" src={brasilien} alt="" />
                    </div>
                    <div className='flex mt-5'>
                        <img className='pr-2 h-5' src={calender} alt="" />
                        <p className='pr-5 text-sm'>8 Days</p>
                        <img className='pr-2 h-5' src={avatar} alt="" />
                        <p className='text-sm'>25 People Going</p>
                    </div>
                    <div className='flex justify-between mt-2'>
                        <p className='text-3xl font-bold'>Amazon</p>
                        <img className=" h-4 items-center" src={stars} alt="" />
                    </div>
                    <div className='flex mt-2'>
                        <img src={location} alt="" />
                        <p>Brazil</p>
                    </div>
                    <div className='flex mt-2'>
                        <span className='text-2xl font-semibold pr-5' style={{color: "#DF6951"}}>1,000 $ </span>
                        <span className=' flex line-through text-lg items-end font-semibold' style={{color: "#7D7D7D"}}>1,200 $</span>
                    </div>
                    
                    <p className='text-left mt-2'>Nam exercitationem commodi et ducimus quia in dolore 
                        animi sit mollitia amet id quod eligendi. Et labore 
                        harum non nobis ipsum eum molestias mollitia et corporis 
                        praesentium a laudantium internos.</p>
                        <button className='flex justify-start mt-10' style={{backgroundColor: "#DF6951", color:"white"}}>
                        Explore Now
                        </button>
                
                </div>

                <div>
                    <div>
                        <img src={pyramid} alt="" />
                        <img className="mt-[-30px] mb-[-40px] ml-2 h-20" src={egypt} alt="" />
                    </div>
                    <div className='flex mt-5'>
                        <img className='pr-2 h-5' src={calender} alt="" />
                        <p className='pr-5 text-sm'>8 Days</p>
                        <img className='pr-2 h-5' src={avatar} alt="" />
                        <p className='text-sm'>25 People Going</p>
                    </div>
                    <div className='flex justify-between mt-2'>
                        <p className='text-3xl font-bold'>Giza</p>
                        <img className=" h-4 items-center" src={stars} alt="" />
                    </div>
                    <div className='flex mt-2'>
                        <img src={location} alt="" />
                        <p>Egypt</p>
                    </div>
                    <div className='flex mt-2'>
                        <span className='text-2xl font-semibold pr-5' style={{color: "#DF6951"}}>1,000 $ </span>
                        <span className=' flex line-through text-lg items-end font-semibold' style={{color: "#7D7D7D"}}>1,200 $</span>
                    </div>
                    
                    <p className='text-left mt-2'>Nam exercitationem commodi et ducimus quia in dolore 
                        animi sit mollitia amet id quod eligendi. Et labore 
                        harum non nobis ipsum eum molestias mollitia et corporis 
                        praesentium a laudantium internos.</p>
                        <button className='flex justify-start mt-10' style={{backgroundColor: "#DF6951", color:"white"}}>
                        Explore Now
                        </button>
                
                </div>
            </div>
            
        </div>
    )
}
