import type { NextPage } from 'next';
import arrowRight from '../../styles/images/rightArrowIcon.svg';
import arrowLeft from '../../styles/images/leftArrowIcon.svg';

const Testimonials: NextPage = () => {

    return (
        <>
            <div className="testimonials_Container">
                <div className="customerFeedback_Container">
                    <h5>Testimonials</h5>
                    <h2>We trust our customers</h2>
                    <h2>and they trust us too</h2>
                    <div className="customerProfile_Container">
                        <img src='/profileImage.png' alt="customer Profile Image" />
                        <div className="customerProfile_Description">
                            <h2>Marius Ciocirlan</h2>
                            <h6>IT Engineer</h6>
                        </div>
                    </div>
                        <h3>I'm very glad I had the opportunity to visit this hotel. The stuff is very friendly and I will definetly visit the hotel again next year.</h3>
                        <div className="dotMenu">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                    <div className="customerProfile_LeftArrow">
                        <div className="squareArrow">
                        <img src={arrowLeft} alt="customer Profile Image Arrom" />
                    </div>
                    </div>
                </div>
                <div className="customerGallery_Container">
                    <img src='/imgGallery3.jpg' alt="customer Profile Image" />
                    <div className="squareArrow">
                        <img src={arrowRight} alt="customer Profile Image Arrow right" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials;
