import logo from '../assets/logo.png';
import background from '../assets/Footer_img.png';
import messenger from '../assets/025-messenger.png';
import linkedin from '../assets/052-linkedin.png';
import twitter from '../assets/096-twitter.png';
import vector from '../assets/Vector.png';


export default function Footer () {





    return (

        <footer className=" flex flex-col items-center bg-cover " style={{ 
            backgroundImage: `url(${background})` ,

            }}>
            <div className="flex mt-40 gap-20 h-[300px] flex-wrap">
                <div className="flex flex-col mt-[-60px]">
                    <img className='h-20 w-40' src={logo} alt="" />
                    <p className="text-left" style={{color: '#757095'}} >Travel helps companies <br />
                        manage payments easily</p>
                    <div className='flex gap-5 mt-10'>
                        <img src={linkedin} alt="" />
                        <img src={messenger} alt="" />
                        <img src={twitter} alt="" />
                        <img src={vector} alt="" />
                    </div>
                </div>
                <div className="flex flex-col gap-5 items-start">
                    <p className='font-bold text-xl'>Company</p>
                    <a style={{color: '#181433'}}  href="">About Us</a>
                    <a style={{color: '#181433'}} href="">Careers</a>
                    <a style={{color: '#181433'}} href="">Blog</a>
                    <a style={{color: '#181433'}} href="">Pricing</a>
                </div>
                <div className="flex flex-col gap-5 items-start">
                <p className='font-bold text-xl'>Destinations</p>
                    <a style={{color: '#181433'}} href="">Maldives</a>
                    <a style={{color: '#181433'}} href="">Los Angeles</a>
                    <a style={{color: '#181433'}} href="">Las Vegas</a>
                    <a style={{color: '#181433'}} href="">Toronto</a>
                </div>
                <div className='flex'>
                    <div className='flex flex-col' >
                    <p className='font-bold text-xl text-left '>Join Our Newsletter</p>
                    <div>
                        <input className='rounded-lg border-none' style={{backgroundColor: '#EEEEFF', color: '18143'}} type="text" placeholder="Your email address" />
                        <button className='rounded-lg border-none mt-5' style={{backgroundColor: '#DF6951', color: 'white'}}>Subscribe</button>
                    </div>
                    <p className="mt-5 text-left" style={{color: '#181433'}}>* Will send you weekly updates for your better<br/> tour packages</p>
                    </div>
                </div>
            </div>
            <div className=' border-t w-[63%] '>
                <p className='mt-10'>Copyright @ Xpro 2022. All Rights Reserved.</p>
            </div>
        </footer>

    )
}