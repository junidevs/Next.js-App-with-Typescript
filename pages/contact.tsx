import type { NextPage } from 'next'
import Head from 'next/head'
import GoogleMapsViewer from "../components/contact/googleMapsViewer";
import ContactForm from "../components/contact/contactForm";
import AdditionalInfo from "../components/contact/additionalInfo";
import PhotosContent from "../components/PhotosContent";
import { useAppSelector} from "../store/store";
import { pathValueReader } from '../slices/pathSlice';

const Contact: NextPage = () => {
    const path = useAppSelector(pathValueReader);

  return (
   <>
       <Head>
           <title>{path}</title>
           <meta name="viewport" content="initial-scale=1.0, width=device-width" />
           <link rel="preconnect" href="https://fonts.googleapis.com" />
           <link rel="preconnect" href="https://fonts.gstatic.com" />
           <link href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                 rel="stylesheet" />
       </Head>
    <div className="contact_Container">
        <GoogleMapsViewer />
        <ContactForm path={path} />
        <AdditionalInfo />
        <PhotosContent />
    </div>
   </>
  )
}

export default Contact
