import {useState, useMemo } from 'react';
import DynamicList from "../components/dynamicList";
import {PlaceNames} from "../types/placeTypes";

const BurgerNav = ({open, setOpen}:any) => {

    const bodyStyleObj = document.body;
    useMemo(()=> open
            ? bodyStyleObj.classList.add("blocked")
            : (bodyStyleObj.classList.add("scrollable"),bodyStyleObj.classList.remove("blocked"))
        ,[open]);

    return(
        <>
            <div onClick={() => setOpen(!open)} className={open ? 'burgerMenu open' : 'burgerMenu'}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={open ? 'menuOverlay' : "menuOverlay unvisible"}>
                 <DynamicList setOpen={setOpen} names={PlaceNames} />
            </div>
        </>
    );
}
export default BurgerNav;