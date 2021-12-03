import type { NextPage } from 'next';
import arrowIcon from '../../styles/images/leftArrowIcon.svg'
interface Props {
    images: any;
    path:any;
}
const AboutUsDescription: NextPage<Props> = ({ images,path}) => {
    const galleryRenderer = images && images.map(({ key, src }:any) => <img className={"customBox"} key={key} src={src} alt={key} />);

    return (
        <>
            <div className="about_Container">
                <div className="aboutDescription_Container">
                    <h5>{path}</h5>
                    <h2>Trust and quanity</h2>
                    <h2>are our atuus</h2>
                    <h4>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                        ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</h4>
                    <h6>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                        ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</h6>
                    <div className="button_Link">
                        <h3>Read more</h3>
                        <img src={arrowIcon} alt="arrowIcon" />
                    </div>
                </div>
                <div className="aboutGallery_Container">
                    {galleryRenderer}
                </div>
            </div>
        </>
    )
}

export default AboutUsDescription;
