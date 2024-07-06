import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
import './ArrowButton.css';

function ArrowButton({ direction, handler }) {

    if (direction === "left") {
        return <span className="arrow-btn left-arrow" onClick={handler}><IoIosArrowBack className="arrow-btn__icon"/></span>
    }
    else if (direction === "right") {
        return <span className="arrow-btn right-arrow" onClick={handler}><IoIosArrowForward className="arrow-btn__icon"/></span>
    }
    console.log("ArrowButton: Define correct direction(left or right)");
    return <></>
}
export default ArrowButton;