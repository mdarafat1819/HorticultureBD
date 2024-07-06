import { GiFlowerEmblem,GiFruitTree,GiPalmTree,GiBonsaiTree,GiBurningTree} from "react-icons/gi";
import { FaAppleAlt } from "react-icons/fa";

import './Categories.css';
import CatalogueHeader from './CatalogueHeader';

function Categories() {

    const categories = [
        {
            icon: <GiFlowerEmblem className="categories__icon"/>,
            description: "ফুল গাছ"
        },
        {
            icon: <FaAppleAlt className="categories__icon"/>,
            description: "ফল গাছ"
        },
        {
            icon: <GiFruitTree className="categories__icon"/>,
            description: "ঔষধি গাছ"
        },
        {
            icon: <GiPalmTree className="categories__icon"/>,
            description: "বর্ষাকালিন"
        },
        {
            icon: <GiBurningTree className="categories__icon"/>,
            description: "গ্রীষ্মকালিন"
        },
        {
            icon: <GiBonsaiTree className="categories__icon"/>,
            description: "ছাদ বাগান"
        },
    ];
    return (
        <>
            <div className='categories'>
                <CatalogueHeader title={"Categories"} description={"Browse By Category"} />
                <div className='categories__items'>
                    {categories.map((item, index) => {
                        return <div className="categories__item"> 
                        {item.icon}
                        <span className="categories__description" >{item.description}</span>
                        </div>
                    })}
                </div>
            </div>
        </>
    );
}
export default Categories;