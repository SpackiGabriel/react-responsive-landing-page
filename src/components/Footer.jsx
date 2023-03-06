import {FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare} from 'react-icons/fa'

import FooterColumn from './FooterColumn'

const Footer = () => {
    return(
        <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 mt-6">
            <div>
                <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
                <p className='py-4'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Libero, assumenda quo! Magni, ipsa laudantium error.
                </p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaFacebookSquare size={30} />
                    <FaInstagram size={30} />
                    <FaTwitterSquare size={30} />
                    <FaGithubSquare size={30} />
                    <FaDribbbleSquare size={30} />
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between'>
                <FooterColumn
                    title={"Solutions"}
                    list={['Analytics', 'Marketing', 'Commerce', 'Insights']}
                />
                <FooterColumn
                    title={"Suport"}
                    list={['Pricing', 'Documentation', 'Guide', 'API Status']}
                />
                <FooterColumn
                    title={"Company"}
                    list={['About', 'Blog', 'Jobs', 'Press', 'Carrers']}
                />
                <FooterColumn
                    title={"Legal"}
                    list={['Claim', 'Policy', 'Terms']}
                />
            </div>
        </div>
    )
}

export default Footer