import { useState, useEffect } from "react";

import './Slider.css';
import ArrowButton from "./ArrowButton";

function Slider() {
    const images = [
        "https://www.w3schools.com/howto/img_nature_wide.jpg",
        "https://www.w3schools.com/howto/img_snow_wide.jpg",
        "https://www.w3schools.com/howto/img_mountains_wide.jpg"
    ];
    const [slideIndex, slideIndexUpdate] = useState(1);
    useEffect(() => {
        showSlides(slideIndex);

        // const interval = setInterval(() => {
        //     slideIndexUpdate(prevIndex => prevIndex + 1);
        // }, 3000); // Change slide every 3 seconds

        // return () => clearInterval(interval); // Clean
    }, [slideIndex]);
    function showSlides(n) {

        //slideIndexUpdate(n);
        let slides = document.getElementsByClassName("slides");
        let dots = document.getElementsByClassName("dot");
        if (slideIndex > slides.length) {
            slideIndexUpdate(1)
            console.log("Show Slide Called " + slideIndex);
            return;
        }
        else if (slideIndex < 1) {
            slideIndexUpdate(slides.length);
            return;
        }
        console.log("Show Slide Called " + slideIndex);

        let i;
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
    return (
        <>
            <div className="slideshow-container">
                {images.map((image, index) => {
                    return <div className="slides fade" key={index}>
                        <img src={image} />
                    </div>
                })}
                <ArrowButton direction={"left"} handler = {() => slideIndexUpdate(slideIndex - 1)} />
                <ArrowButton direction={"right"} handler={() => slideIndexUpdate(slideIndex + 1)} />
                <div className="dot-container">
                    {
                        images.map(
                            (_, index) => {
                                return <span className="dot" key={index} onClick={() => {
                                    console.log(index);
                                    slideIndexUpdate(index + 1);
                                }}></span>
                            })
                    }
                </div>
            </div>
        </>
    );
}
export default Slider;