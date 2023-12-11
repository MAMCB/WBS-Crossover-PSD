import background from '../assets/h1-background-img.png';
import portrait from '../assets/Ellipse 624.png'

export default function BottomSection2 () {





    return (
        <div className="h-[700px] flex flex-col items-center bg-cover" 
            style={{ 
            backgroundImage: `url(${background})` ,
            // backgroundSize: 'cover',
            }}>
            <p style={{color: "#DF6951"}} className='mt-40'>PROMOTION</p>
            <h2 className='text-5xl font-bold'>See What Our Clients Say <br /> About Us</h2>
            <div className="flex flex-col items-center bg-white w-[35%] h-[40%] mt-20 rounded-lg p-8">
                <img className="h-40 w-40 mt-[-100px]"src={portrait} alt="" />
                <p>Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et 
                    recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt provident 
                    quo possimus impedit vel doloremque obcaecati qui ullam consectetur et ipsum omnis.
                </p>
                <p className='font-bold'>Christine Beckam - Designer</p>
                <button></button>
                <button></button>
            </div>
        </div>
    )
}