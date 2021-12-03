import axios from 'axios';


interface Props {
    methods?: any;
}

export const useSendMessage = (props?: Props): any => {

    const submitHandler = async (
        data: any,
    ): Promise<void> => {
        console.log('Email has beeen send with these data :',data)

    };

    return { submitHandler };
};
