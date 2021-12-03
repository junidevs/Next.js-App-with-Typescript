import type { NextPage } from 'next'

interface Props {
    src: any;
    alt?:string;
    mainText:string;
    altTextOne?:string;
    altTextTwo?:string;
}
const ContactField: NextPage<Props> = ({src, alt, mainText,altTextOne, altTextTwo}) => {
    return (
        <>
            <div className="contactBox">
                <img src={src} alt={alt} />
                <h2>{mainText}</h2>
                <h4>{altTextOne}</h4>
                <h4>{altTextTwo}</h4>
            </div>
        </>
    )
}

export default ContactField;
