// ReactArrowFunctionComponentES7
import React from 'react'
import playStore from "../../../images/playstore.png"
import appStore from "../../../images/Appstore.png"
import Logo from "../../../images/Logo1.jpg"
import "./Footer.css"

const Footer = () => {
    return (
        <footer id="footer">
            <div className="leftFooter">
                <h4><u>DOWNLOAD OUR APP</u></h4>
                <p>Download App for Android and IOS</p>
                <img src={playStore} alt="playstore" />
                <img src={appStore} alt="appstore" />
            </div>
            <div className="midFooter">
                <a href="/"><img src={Logo} alt="logo" class="Logo" /></a>
                <p>Crafted Passionately</p>
                <p>Copyrights 2022 &copy; MePratikMaru</p>
            </div>
            <div className="rightFooter">
                <h4><u>Follow us on</u></h4>
                <a href="https://www.instagram.com/patrick.__01/">Instagram</a>
                {/* FIXME: here i didnt mentioned my facebook profile */}
                <a href="https://www.instagram.com/patrick.__01/">Facebook</a>
                <a href="https://twitter.com/pratikmaru01">Twitter</a>
            </div>
        </footer>
    )
}

export default Footer