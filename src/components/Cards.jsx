import Card from './Card'

import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
    return(
        <div className="w-full py-[10rem] px-4 bg-white">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                <Card 
                    image={Single} 
                    title="Single User"
                    price="49" 
                    texts={["1 Granted User", "Send up to 1 GB", "100 GB Storage"]}
                />
                <Card 
                    image={Double} 
                    title="Partnership"
                    price="99" 
                    texts={["2 Granted Users", "Send up to 2 GB", "250 GB Storage"]}
                />
                <Card 
                    image={Triple} 
                    title="Group Account"
                    price="149" 
                    texts={["3 Granted Users", "Send up to 3 GB", "500 GB Storage"]}
                />
            </div>
        </div>
    )
}

export default Cards