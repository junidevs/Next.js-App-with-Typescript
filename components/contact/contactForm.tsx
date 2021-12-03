import type { NextPage } from 'next'
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

    const { register, handleSubmit, formState:{ errors } } = useForm({
        mode:'onChange',
        resolver: yupResolver(notifySchema)
    });

    const onSubmit = (data:objectSchema<string>) => console.log(data);
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

export default ContactForm
