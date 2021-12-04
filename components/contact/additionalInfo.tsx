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
                    mainText="Phone"
                    altTextOne="+0 320 422 4254"
                    altTextTwo="+0 342 552 523"
                />
                <ContactField
                    src={geoIcon}
                    alt="emailIcon"
                    mainText="Location"
                    altTextOne="Main Str Chicago Ilinois"
                    altTextTwo="Main Street New York City"
                />
            </div>
        </>
    )
}

export default AdditionalInfo;
