import React, {useEffect, useState} from 'react';
import {Icon} from "../icon/Icon";
import {animateScroll as scroll} from "react-scroll";
import {S} from "./GoToTopBtn_Styles"

export const GoToTopBtn = () => {

    const [showBtn, setShowBtn] = useState(false);

    useEffect(()=> {
        window.addEventListener("scroll", ()=>{
            window.scrollY > 200 ? setShowBtn(true) : setShowBtn(false)
        })
    }, [])

    return (

        <>
            {showBtn && (
            <S.StyledGoToTopBtn onClick={()=>scroll.scrollToTop()}>
                <Icon iconID={"arrow"} width={"26"} height={"26"} viewBox={"0 0 16 16"}/>
            </S.StyledGoToTopBtn>

            )}
</>
    );
};