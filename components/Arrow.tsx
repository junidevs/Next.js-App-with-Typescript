import type { NextPage } from 'next';

interface Props {
    src?:any;
    alt?:string;
}
const SquareBoxArrow:NextPage<Props> = ({ src, alt }) => {

    return (
        <>
            <div className="boxArrow_Container">
                <img src={src} alt={alt} />
            </div>
        </>
    )
}

export default SquareBoxArrow;
