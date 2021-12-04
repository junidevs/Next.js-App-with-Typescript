import { useState, useEffect } from "react";
import { PlaceNames } from '../types/placeTypes'
import DynamicList from '../components/dynamicList'
import HeaderLabel from "../components/header-Label";
import BurgerNav from '../components/burgerNav';
const Header = () => {

    const [isMobile, setIsMobile ] = useState<boolean>(false);
    const [ open, setOpen ] = useState<boolean>(false);

    const checkResolution = () => {
        if (window.innerWidth < 1300) setIsMobile(true)
         else setIsMobile(false)
    }

    useEffect(() => {
        "resize,load".split(",").map(name => window.addEventListener(name, checkResolution, false))
    })

    return(
        <>
            <header className="header_mainPage">
            <div className="layer"></div>
                <nav>
                    <h1>Zetta Hotels</h1>
                    {
                        isMobile
                        ? <BurgerNav setOpen={setOpen} open={open} />
                        : <ul> <DynamicList names={PlaceNames} /> </ul>
                    }
                </nav>
                <HeaderLabel />
            </header>
        </>
    );
}
export default Header;