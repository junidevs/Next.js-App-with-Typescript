import type { NextPage, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form';
// exception with next 12 https://stackoverflow.com/questions/69792558/react-hook-form-build-problem-when-upgrading-nextjs-to-version-12
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { notifySchema } from '../../schemas/notifySchema';

interface objectSchema<T> {
    prop: T;
}
interface Props{
    path:string;
}
const ContactForm: NextPage<Props> = ({ path }) => {
    const router = useRouter()
    // errors object would be usefull to see something like a modal when we won't fill one of the fields for example :D
    const { register, handleSubmit, formState:{ errors } } = useForm({
        mode:'onChange',
        resolver: yupResolver(notifySchema)
    });

    const onSubmit = async (data:objectSchema<string>) => {
        await fetch('/api/email', {
            method: 'post',
            body: JSON.stringify(data)
        })
    alert(`Email has been send with these data: ${JSON.stringify(data)}`)
        router.push('/thank_you');
    };

    return (
        <>
                <div className="contactForm">
                    <h5>{path}</h5>
                    <h2>{`${path} us to get `}</h2>
                    <h2>free support</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="formProvider">
                        <textarea className="inputField" {...register("message")} placeholder="Description" />
                        <div className="inputFields">
                            <input className="inputField" {...register("subject")} type="text" placeholder="Subject" />
                            <input className="inputField" {...register("name")} type="text" placeholder="Name / Surname" />
                            <input className="inputField" {...register("email")} type="text" placeholder="Email" />
                            <input className="inputField inputField--button" type="submit" value="Send" />
                        </div>

                    </div>
                    </form>
                </div>

        </>
    )
}
export const getStaticProps:GetStaticProps = async (ctx) => {

    return {
        props: {}, // if message from mail would be saved in db we could get this via this function and pass as a prop to <ContactForm />
    }
}
export default ContactForm;
