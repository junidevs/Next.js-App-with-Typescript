import type { NextPage } from 'next';
import Link from 'next/link';
import facebookIcon from '../styles/images/facebookIcon.svg';
import twitterIcon from '../styles/images/twitterIcon.svg';
import googleIcon from '../styles/images/googleIcon.svg';
import emailIcon from '../styles/images/emailIcon.svg';
import phoneIcon from '../styles/images/phoneIcon.svg';
import geoIcon from '../styles/images/geoIcon.svg';

const PhotosContent: NextPage = () => {

    const images = [
        {
            src: '/imgGallery1.jpg',
            key:'imgGallery1',
        },
        {
            src: '/imgGallery2.jpg',
            key:'imgGallery2',
        },
        {
            src: '/imgGallery3.jpg',
            key:'imgGallery3',
        },
        {
            src: '/imgGallery4.jpg',
            key:'imgGallery4',
        }
    ]
    const galleryRenderer = images && images.map(({ key, src }:any) => <img className="squareBoxes" key={key} src={src} alt={key} />);

    return (
        <>
            <section className="photos_Container">
                <h5>Photos</h5>
                <h2>See our late photos</h2>
                <h2>from restaurant and hotel</h2>
                <section className="gallery_Container">
                    {galleryRenderer}
                </section>
                <footer className="footer_Container">
                    <div className="main_Footer_Info">
                    <div className="typography_Container">
                        <h2>Zetta Hotels</h2>
                        <h4>Our hotel is an image of quality and
                            professionalism combined with hard work
                            and precision. You can expect only the
                            best services from our stuff
                        </h4>
                            <img src={facebookIcon} alt="facebookLink" />
                            <img src={twitterIcon} alt="twitterLink" />
                            <img src={googleIcon} alt="GoogleLink" />
                    </div>
                    <div className="usefullLinks_Container">
                        <h2>Usefull links</h2>
                        <ul>
                            <li>Blog</li>
                            <li>Rooms</li>
                            <li>Gift Card</li>
                            <li>Testimonials</li>
                        </ul>
                    </div>
                    <div className="privacy_Container">
                        <h2>Privacy</h2>
                        <ul>
                            <li>Carreer</li>
                            <li>About us</li>
                            <li>Contact us</li>
                            <li>Services</li>
                        </ul>
                    </div>
                    <div className="contactInfo_Container">
                        <h2>Contact Info</h2>
                        <ul>
                            <li><img src={emailIcon} alt={"icon"} />example@yahoo.com</li>
                            <li><img src={phoneIcon} alt={"icon"} />+0 320 422 4254</li>
                            <li><img src={geoIcon} alt={"icon"} />Main Str Chicago Ilinois</li>
                        </ul>
                    </div>
                    </div>
                    <div className="extraInfo_Container">
                        <div className="copyright_Container">
                            Copyright ©2020 All rights reserved | This template is made with love by <span>Marian</span>
                        </div>
                        <Link href="https://www.portfolioname.com">www.portfolioname.com</Link>
                    </div>
                </footer>
            </section>
        </>
    )
}

export default PhotosContent;
