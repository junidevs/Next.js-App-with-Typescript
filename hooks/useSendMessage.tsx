interface Props {
    methods?: any;
}

// alternate to move piece of logic to hook which will be responsible for data fetching instead of in the UI
export const useSendMessage = (props?: Props): any => {

    const submitHandler = async (
        data: any,
    ): Promise<void> => {
        console.log('Email has beeen send with these data :',data)

    };

    return { submitHandler };
};
