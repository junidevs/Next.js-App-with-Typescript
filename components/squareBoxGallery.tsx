import type { NextPage } from 'next';

const SquareBoxGallery = ({src ,alt,  mainTxt, altTxt} : any) => {

    return (
        <>
            <div className="box_Container">
                <img src={src} alt={alt} />
                <h3>{mainTxt}</h3>
                <h5>{altTxt}</h5>
            </div>
        </>
    )
}

export default SquareBoxGallery;
