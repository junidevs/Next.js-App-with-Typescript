import type { NextPage } from 'next';
import SquareBoxGallery from '../../components/squareBoxGallery';
import image1 from '../../styles/images/geoIcon.svg';
import arrowRight from '../../styles/images/rightArrowIcon.svg';
import arrowLeft from '../../styles/images/leftArrowIcon.svg';
import SquareBoxArrow from '../../components/Arrow';

interface Props {
    path?:string;
}
const AboutUsOffer:NextPage<Props> = ({ path }) => {
    return (
        <>
            <div className="aboutOffer_Container">
                <div className="layer">
                    <div className="typography_Container">
                        <h5>{path}</h5>
                        <h2>We bring you the</h2>
                        <h2>finest details</h2>
                    </div>
                    <div className="galleryInfo_Container">
                        <SquareBoxArrow src={arrowLeft} alt="arrowLeft" />
                            <SquareBoxGallery
                                src={image1}
                                alt="image1"
                                mainTxt="Free WiFi to stay connected"
                                altTxt="Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum"
                            />
                        <SquareBoxGallery
                            src={image1}
                            alt="image1"
                            mainTxt="Free WiFi to stay connected"
                            altTxt="Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum"
                        />
                        <SquareBoxGallery
                            src={image1}
                            alt="image1"
                            mainTxt="Free WiFi to stay connected"
                            altTxt="Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum"
                        />
                        <SquareBoxGallery
                            src={image1}
                            alt="image1"
                            mainTxt="Free WiFi to stay connected"
                            altTxt="Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum"
                        />
                        <SquareBoxArrow src={arrowRight} alt="arrowRight" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUsOffer;
