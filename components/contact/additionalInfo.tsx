import type { NextPage } from 'next'
import ContactField from './contactField';
import emailIcon from '../../styles/images/emailIcon.svg';
import phoneIcon from '../../styles/images/phoneIcon.svg';
import geoIcon from '../../styles/images/geoIcon.svg';

const AdditionalInfo: NextPage = () => {
    return (
        <>
            <div className="additionalInfo_Container">
                <ContactField
                    src={emailIcon}
                    alt="emailIcon"
                    mainText="Email"
                    altTextOne="email@gmail.com"
                    altTextTwo="emailemail@gmail.com"
                />
                <ContactField
                    src={phoneIcon}
                    alt="emailIcon"
                    mainText="Email"
                    altTextOne="email@gmail.com"
                    altTextTwo="emailemail@gmail.com"
                />
                <ContactField
                    src={geoIcon}
                    alt="emailIcon"
                    mainText="Email"
                    altTextOne="email@gmail.com"
                    altTextTwo="emailemail@gmail.com"
                />
            </div>
        </>
    )
}

export default AdditionalInfo;
