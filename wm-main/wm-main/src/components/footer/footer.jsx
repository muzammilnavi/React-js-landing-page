import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./footer.scss"

export default function Footer() {
    return (
        <>
        <footer>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="logo-about col-xl-4 col-md-12">
                            <svg xmlns="http://www.w3.org/2000/svg" className="wm-icon wm-logo" preserveAspectRatio="xMidYMid slice" viewBox="0 0 150 36" height="46px" width="192px"><g fill="none"><path fill="#00cdbe" d="M15.02 21.96L12.3 11.75h-.06l-2.6 10.2H5.35L.51 6.76h4.42l2.79 10.32h.06l2.53-10.32h4.06l2.59 10.3h.06l2.79-10.3h4.3l-4.8 15.2m13.53-11.62c-.5-.55-1.26-.82-2.28-.82a3.7 3.7 0 00-1.66.33 3.08 3.08 0 00-1.62 1.89c-.1.37-.17.7-.19 1h6.8a4.8 4.8 0 00-1.05-2.41m-4.72 8c.63.6 1.53.9 2.7.9.85 0 1.57-.2 2.18-.62.61-.42.98-.87 1.12-1.34h3.68c-.6 1.82-1.5 3.13-2.7 3.9a7.97 7.97 0 01-4.42 1.18 8.72 8.72 0 01-3.23-.57 6.7 6.7 0 01-2.44-1.64 7.44 7.44 0 01-1.54-2.53 9.37 9.37 0 01-.54-3.24c0-1.14.2-2.2.56-3.18a7.43 7.43 0 017.21-4.86 6.8 6.8 0 015.75 2.76c.62.84 1.06 1.8 1.34 2.88.28 1.07.38 2.2.3 3.38h-11c.06 1.35.41 2.33 1.03 2.94m20.94-8c-.5-.55-1.26-.82-2.28-.82-.66 0-1.22.1-1.66.33a3.09 3.09 0 00-1.62 1.9c-.1.37-.17.7-.19 1h6.8a4.8 4.8 0 00-1.04-2.42m-4.72 8c.63.6 1.53.9 2.71.9.85 0 1.57-.2 2.18-.62.61-.42.98-.87 1.12-1.34h3.68c-.59 1.82-1.49 3.13-2.7 3.9a7.89 7.89 0 01-4.4 1.19c-1.2 0-2.29-.2-3.25-.58a6.8 6.8 0 01-3.98-4.16 9.33 9.33 0 01-.54-3.24c0-1.14.19-2.2.56-3.18a7.43 7.43 0 017.21-4.86 6.8 6.8 0 015.75 2.76c.62.84 1.07 1.8 1.34 2.88.28 1.08.37 2.2.3 3.38h-11c.05 1.36.4 2.34 1.02 2.94m21.9-5.83a4.42 4.42 0 00-.61-1.53 3.46 3.46 0 00-1.1-1.07 3.27 3.27 0 00-1.7-.4c-.7 0-1.27.13-1.74.4-.47.28-.85.64-1.13 1.1-.28.45-.5.96-.62 1.54a7.6 7.6 0 00.02 3.57c.14.59.36 1.11.66 1.57.3.46.69.83 1.15 1.12.46.28 1.02.43 1.66.43.69 0 1.26-.14 1.72-.41.46-.27.83-.64 1.1-1.1.29-.46.48-1 .6-1.58a9.13 9.13 0 000-3.63zm.17 7.53a4.31 4.31 0 01-1.93 1.78c-.8.36-1.69.55-2.69.55a6.5 6.5 0 01-3-.66 6 6 0 01-2.13-1.8 8.13 8.13 0 01-1.27-2.6 11.08 11.08 0 01.01-6c.3-.96.71-1.8 1.27-2.53a6.21 6.21 0 015.05-2.41c.9 0 1.76.19 2.58.57.82.38 1.46.95 1.93 1.69h.06V.96h4.18v21H66.5v-1.94h-.06zm41.91-7.49a4.4 4.4 0 00-.6-1.53c-.29-.44-.65-.8-1.1-1.07-.46-.27-1.03-.4-1.72-.4s-1.27.13-1.74.4c-.47.28-.85.64-1.14 1.1-.29.44-.49.96-.62 1.54a8.22 8.22 0 00.01 3.58c.13.59.36 1.11.66 1.57.3.46.68.84 1.14 1.12.46.28 1.01.43 1.66.43.68 0 1.26-.13 1.72-.4.46-.28.83-.65 1.1-1.1.27-.47.47-.99.6-1.58a9.87 9.87 0 000-3.63zm.17 7.54a4.32 4.32 0 01-1.93 1.78c-.8.36-1.69.54-2.69.54a6.5 6.5 0 01-3-.66 5.96 5.96 0 01-2.13-1.79 8.23 8.23 0 01-1.27-2.6 10.72 10.72 0 010-6 7.6 7.6 0 011.25-2.52 6.32 6.32 0 012.1-1.75 6.25 6.25 0 012.94-.66c.9 0 1.76.19 2.57.57.81.38 1.45.94 1.92 1.69h.05V6.7h4.18v15.28h-3.97v-1.94h-.06zM77.06 6.77v2.06h.06a5.4 5.4 0 014.65-2.47c.96 0 1.83.19 2.63.56a3.69 3.69 0 011.8 1.97 6.4 6.4 0 011.84-1.76c.77-.51 1.69-.77 2.75-.77.8 0 1.55.1 2.23.3.68.2 1.27.51 1.76.94.49.44.87 1 1.15 1.7a7 7 0 01.4 2.52V22h-4.16v-8.63c0-.5-.02-.99-.06-1.44a3.03 3.03 0 00-.33-1.18c-.18-.33-.44-.6-.78-.8-.34-.2-.81-.3-1.4-.3-.6 0-1.07.12-1.43.35-.37.22-.65.52-.86.88-.21.36-.35.77-.41 1.23-.07.46-.11.92-.11 1.4v8.47h-4.17v-8.53c0-.45-.01-.9-.03-1.34a3.95 3.95 0 00-.25-1.22 1.9 1.9 0 00-.74-.9 2.76 2.76 0 00-1.52-.34 2.98 2.98 0 00-1.72.63c-.31.24-.57.6-.78 1.06a4.21 4.21 0 00-.33 1.8v8.83H73.1V6.77h3.94zm47.16 12.06c.47-.28.84-.63 1.12-1.07.29-.45.49-.96.6-1.55a8.98 8.98 0 000-3.58 4.97 4.97 0 00-.64-1.57 3.19 3.19 0 00-2.82-1.53 3.16 3.16 0 00-2.83 1.53 4.7 4.7 0 00-.6 1.56 9.13 9.13 0 00.02 3.6c.13.6.34 1.1.62 1.55a3.22 3.22 0 002.84 1.48c.7 0 1.26-.14 1.72-.41zM118.8 6.77v1.94h.06a4.6 4.6 0 011.94-1.8 5.95 5.95 0 012.59-.55c1.2 0 2.22.22 3.08.67a6.37 6.37 0 012.15 1.8c.57.75 1 1.61 1.27 2.6.27 1 .4 2.03.4 3.1 0 1.03-.13 2-.41 2.95a7.62 7.62 0 01-1.25 2.5 6.28 6.28 0 01-2.1 1.73 6.3 6.3 0 01-2.92.65c-.94 0-1.81-.2-2.61-.58a4.87 4.87 0 01-1.96-1.7H119v7.2h-4.18V6.78h3.98zm16.5 11.43c.18.32.42.59.71.8.3.2.64.35 1.02.45a4.75 4.75 0 002.1.05c.33-.07.62-.18.89-.33.26-.14.48-.34.66-.58.17-.24.26-.55.26-.93 0-.62-.42-1.09-1.25-1.4-.84-.32-2-.64-3.5-.95-.6-.13-1.2-.3-1.77-.48a6 6 0 01-1.55-.73 3.19 3.19 0 01-1.51-2.83c0-.98.19-1.78.57-2.4a4.2 4.2 0 011.5-1.49 6.7 6.7 0 012.12-.76 12.86 12.86 0 014.8.02 6.5 6.5 0 012.08.8 4.8 4.8 0 011.52 1.48c.4.62.64 1.4.72 2.34h-3.97c-.06-.8-.37-1.35-.92-1.63a4.24 4.24 0 00-1.94-.43c-.24 0-.5.02-.77.04-.27.03-.52.1-.75.2-.22.1-.41.23-.57.42-.16.2-.24.44-.24.75 0 .38.14.68.4.91.28.24.64.43 1.08.58.44.15.94.28 1.5.4l1.74.38c.6.14 1.2.3 1.78.5.58.2 1.1.46 1.54.78.45.32.81.72 1.1 1.2.26.48.4 1.07.4 1.78a4.74 4.74 0 01-2.18 4.15 6.6 6.6 0 01-2.22.87 12.77 12.77 0 01-5.14 0 7 7 0 01-2.25-.89 5.09 5.09 0 01-1.6-1.64 5.1 5.1 0 01-.7-2.54h4c0 .45.1.84.28 1.16"></path><path fill="#000" d="M72.82 31.03c9.03 0 13.6-3.42 13.6-3.42l1.94 2.62s-6.74 5.72-15.54 5.72c-8.8 0-15.54-5.72-15.54-5.72l1.95-2.63s4.57 3.43 13.6 3.43"></path><path fill="#00cdbe" d="M146.92 8.3h.19c.26 0 .42 0 .48-.03a.25.25 0 00.14-.1.34.34 0 00.05-.17.25.25 0 00-.06-.17.42.42 0 00-.15-.11 2.29 2.29 0 00-.48-.03h-.18v.6zm-.45 1.26V7.35h1.16c.15.02.27.05.35.1.1.04.15.11.21.2a.6.6 0 01-.06.73.7.7 0 01-.44.21l.16.09a.8.8 0 01.15.17l.16.27.26.44h-.55l-.18-.35a1.37 1.37 0 00-.3-.45.5.5 0 00-.32-.09h-.1v.91h-.46zm.95-2.79c-.3 0-.57.08-.83.22a1.72 1.72 0 00-.63 2.31c.15.27.35.48.62.62a1.65 1.65 0 002.28-.6 1.64 1.64 0 00-.01-1.68 1.57 1.57 0 00-.63-.62 1.73 1.73 0 00-.83-.2zm-.01-.4a2.03 2.03 0 011.8 1.04 2.12 2.12 0 010 2.08c-.2.33-.44.6-.77.77-.33.2-.68.28-1.04.28s-.71-.09-1.04-.27a1.9 1.9 0 01-.77-.77 2.12 2.12 0 01.77-2.86c.33-.18.67-.27 1.03-.27z"></path></g></svg>
                            <p>A community connecting cannabis consumers, patients, retailers, doctors, and brands since 2008.</p>
                            <div className="fo-btn">
                                <div className="img-set">
                                    <a href="#">
                                        <StaticImage
                                            src="../../images/appstore.png"
                                            placeholder="blurred"
                                            quality={95}
                                            formats={["AUTO", "WEBP", "AVIF"]}
                                            alt="appstore"
                                        />
                                    </a>
                                </div>
                                <div className="img-set img-space">
                                    <a href="#">
                                        <StaticImage
                                            src="../../images/playstore.png"
                                            placeholder="blurred"
                                            quality={95}
                                            formats={["AUTO", "WEBP", "AVIF"]}
                                            alt="playstore"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="social-icon">
                                <a href="#"><svg className="wm-icon-facebook-standard" width="24px" height="24px" viewBox="0 0 24 24"><path fill="#4A4A4A" fill-rule="nonzero" d="M14.3 8.6V6.8v-.6l.3-.4.4-.3h3V2h-3.3c-1.9 0-3.2.4-4 1.1-.9.8-1.3 2-1.3 3.4v2H7V12h2.4v10h5V12h3.2l.4-3.4h-3.7z"></path></svg></a>

                                <a href="#"><svg className="wm-icon wm-instagram-standard" width="20px" height="20px" viewBox="0 0 24 24"><path fill="#4A4A4A" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"></path></svg></a>

                                <a href="#"><svg className="wm-icon-twitter-standard" width="24px" height="24px" viewBox="0 0 21 21"><g transform="translate(-1 -2)"><path fill="#4A4A4A" d="M22 6.8l-2.4.6c1-.5 1.5-1.2 1.8-2.1-.8.4-1.6.7-2.6.9a4.1 4.1 0 0 0-3-1.2c-1 0-2 .4-2.9 1.1a3.5 3.5 0 0 0-1 3.6 12.2 12.2 0 0 1-8.5-4 3.5 3.5 0 0 0 0 3.7c.3.6.7 1 1.3 1.4-.7 0-1.3-.2-1.9-.5 0 1 .3 1.7 1 2.4.6.7 1.4 1.2 2.3 1.3a4.6 4.6 0 0 1-1.9.1A4.2 4.2 0 0 0 8 16.7a8.5 8.5 0 0 1-6 1.6 12.9 12.9 0 0 0 10.4 1 10.7 10.7 0 0 0 5.6-4.1 10.6 10.6 0 0 0 2-6.5c.7-.5 1.4-1.2 2-2z"></path></g></svg></a>

                                <a href="#"><svg width="20px" height="20px" fill="#4A4A4A" viewBox="0 0 310 310"><path d="M72.16 99.73H9.927a5 5 0 0 0-5 5v199.928a5 5 0 0 0 5 5H72.16a5 5 0 0 0 5-5V104.73a5 5 0 0 0-5-5zM41.066.341C18.422.341 0 18.743 0 41.362 0 63.991 18.422 82.4 41.066 82.4c22.626 0 41.033-18.41 41.033-41.038C82.1 18.743 63.692.341 41.066.341zM230.454 94.761c-24.995 0-43.472 10.745-54.679 22.954V104.73a5 5 0 0 0-5-5h-59.599a5 5 0 0 0-5 5v199.928a5 5 0 0 0 5 5h62.097a5 5 0 0 0 5-5V205.74c0-33.333 9.054-46.319 32.29-46.319 25.306 0 27.317 20.818 27.317 48.034v97.204a5 5 0 0 0 5 5H305a5 5 0 0 0 5-5V194.995c0-49.565-9.451-100.234-79.546-100.234z" fill-rule="evenodd"></path></svg></a>

                                <a href="#"><svg width="24px" height="24px" viewBox="0 0 235 166"><path d="M229.763 25.817c-2.699-10.162-10.65-18.165-20.747-20.881C190.716 0 117.333 0 117.333 0S43.951 0 25.651 4.936C15.554 7.652 7.602 15.655 4.904 25.817 0 44.237 0 82.667 0 82.667s0 38.43 4.904 56.85c2.698 10.162 10.65 18.164 20.747 20.881 18.3 4.935 91.682 4.935 91.682 4.935s73.383 0 91.683-4.935c10.097-2.717 18.048-10.72 20.747-20.88 4.904-18.422 4.904-56.851 4.904-56.851s0-38.43-4.904-56.85" fill="#4A4A4A"></path><path d="M93.333 117.558l61.334-34.89-61.334-34.893z" fill="#fff"></path></svg></a>

                                <a href="#"><svg width="24px" height="24px" viewBox="0 0 195 195"><g fill-rule="nonzero" fill="none"><path fill="#4A4A4A" d="M0 0h195v195H0z"></path><path d="M46.534 65.216a5.074 5.074 0 00-1.651-4.28L32.65 46.2V44h37.98l29.355 64.381L125.795 44H162v2.201l-10.458 10.027a3.057 3.057 0 00-1.162 2.935v73.674a3.057 3.057 0 001.162 2.935l10.213 10.027V148h-51.372v-2.201l10.58-10.272c1.04-1.04 1.04-1.345 1.04-2.934V73.042l-29.417 74.713H88.61L54.362 73.042v50.074a6.908 6.908 0 001.896 5.747l13.76 16.691v2.201H31v-2.2l13.76-16.692a6.663 6.663 0 001.774-5.747v-57.9z" fill="#fff"></path></g></svg></a>
                            </div>
                        </div>
                        <div className="col-xl-8 col-md-12">
                            <div className="row menu-list">
                                <div className="m-space col-space col-xl-3 col-md-6 col-sm-12">
                                    <h3>About</h3>
                                    <ul>
                                        <li><a href="#">Company</a></li>
                                        <li><a href="#">Investors</a></li>
                                        <li><a href="#">Careers</a></li>
                                        <li><a href="#">Help center</a></li>
                                        <li><a href="#">Advocacy</a></li>
                                        <li><a href="#">Download the app</a></li>
                                    </ul>
                                </div>
                                <div className="m-space col-space col-xl-3 col-md-6 col-sm-12">
                                    <h3>Discover</h3>
                                    <ul>
                                        <li><a href="#">Dispensaries</a></li>
                                        <li><a href="#">Deliveries</a></li>
                                        <li><a href="#">Doctors</a></li>
                                        <li><a href="#">Nearby deals</a></li>
                                        <li><a href="#">Brands</a></li>
                                        <li><a href="#">Strains</a></li>
                                        <li><a href="#">News</a></li>
                                        <li><a href="#">Gear</a></li>
                                        <li><a href="#">Recently viewed</a></li>
                                    </ul>
                                </div>
                                <div className="m-space col-space col-xl-3 col-md-6 col-sm-12">
                                    <h3>Legal</h3>
                                    <ul>
                                        <li><a href="#">Terms of use</a></li>
                                        <li><a href="#">Privacy policy</a></li>
                                        <li><a href="#">Careers</a></li>
                                        <li><a href="#">Cookie policy</a></li>
                                        <li><a href="#">Referral program</a></li>
                                    </ul>
                                </div>
                                <div className="m-space last-col col-xl-3 col-md-6 col-sm-12">
                                    <div className="last-col-inner">
                                        <svg viewBox="0 0 269 48" width="164"><title>Weedmaps Business Logo</title><g fill="none" aria-hidden="true"><path d="M105.4 11.4c1.8 2.2 2.6 5.1 2.6 8.6a15 15 0 01-2.6 9 8.3 8.3 0 01-7.2 3.6c-1.9 0-3.5-.4-4.7-1.2-.7-.5-1.5-1.3-2.3-2.4v3h-6V.4h6.1v11.3a8.8 8.8 0 012.6-2.5 7.7 7.7 0 014.2-1.1c3.1 0 5.5 1.1 7.3 3.3zm-5.2 14.3c.9-1.3 1.3-3 1.3-5 0-1.7-.2-3-.6-4.1a4.4 4.4 0 00-4.5-3.1c-2.2 0-3.8 1-4.6 3-.4 1.1-.6 2.5-.6 4.2 0 2 .4 3.7 1.3 5a4.7 4.7 0 007.7 0zm16.5-17.1v14.1c0 1.3.2 2.3.5 3 .6 1.2 1.6 1.8 3.3 1.8 2.1 0 3.5-.8 4.3-2.5a9 9 0 00.6-3.6V8.6h6.2V32h-6v-3.3l-.4.6c-.2.4-.5.7-.8.9a10 10 0 01-2.8 1.8c-.9.4-1.9.5-3.1.5-3.5 0-5.8-1.2-7-3.7a14 14 0 01-1-6.1V8.6h6.2zm25.4 15.9c.1 1.1.4 1.9.8 2.3.8.8 2.2 1.2 4.2 1.2 1.2 0 2.2-.2 2.9-.5.7-.4 1.1-.9 1.1-1.6 0-.7-.3-1.2-.9-1.6-.6-.4-2.7-1-6.4-1.8-2.7-.7-4.5-1.5-5.6-2.5-1.1-1-1.6-2.4-1.6-4.2 0-2.2.8-4 2.6-5.6 1.7-1.6 4.1-2.3 7.2-2.3 2.9 0 5.3.6 7.2 1.8 1.8 1.2 2.9 3.2 3.2 6h-6.1c-.1-.8-.3-1.4-.7-1.9-.7-.8-1.8-1.2-3.4-1.2-1.3 0-2.3.2-2.9.6-.6.4-.9.9-.9 1.5 0 .7.3 1.2.9 1.5.6.3 2.7.9 6.4 1.7 2.4.6 4.3 1.4 5.5 2.6a5.9 5.9 0 011.8 4.4c0 2.3-.9 4.2-2.6 5.7-1.7 1.5-4.4 2.2-8 2.2-3.7 0-6.4-.8-8.2-2.3a7.3 7.3 0 01-2.6-5.9h6.1v-.1zm25.6-18.7h-6.2V.1h6.2v5.7zm-6.3 2.8h6.2V32h-6.2V8.6zm30.8 1.3c1.5 1.3 2.3 3.4 2.3 6.3V32h-6.3V17.8c0-1.2-.2-2.2-.5-2.8-.6-1.2-1.7-1.8-3.4-1.8-2.1 0-3.5.9-4.2 2.6a9 9 0 00-.6 3.6V32h-6.1V8.6h5.9V12c.8-1.2 1.5-2.1 2.2-2.6a8 8 0 014.8-1.4c2.4 0 4.4.7 5.9 1.9zm22.6-.8a9 9 0 014 3.5c1 1.4 1.6 3 1.9 4.8.2 1.1.2 2.6.2 4.6h-17.1c.1 2.3.9 4 2.4 4.9.9.6 2.1.9 3.4.9 1.4 0 2.5-.4 3.4-1.1.5-.4.9-.9 1.3-1.6h6.3a7.4 7.4 0 01-2.3 4.2c-2.1 2.3-5 3.4-8.8 3.4-3.1 0-5.9-1-8.2-2.9-2.4-1.9-3.6-5-3.6-9.4 0-4.1 1.1-7.2 3.2-9.3 2.2-2.2 4.9-3.2 8.4-3.2 2 .1 3.9.4 5.5 1.2zm-9.1 5.2a6 6 0 00-1.6 3.6h10.5a5.3 5.3 0 00-1.6-3.7 5.5 5.5 0 00-3.6-1.3c-1.7.1-2.9.6-3.7 1.4zm23.4 10.2c.1 1.1.4 1.9.8 2.3.8.8 2.2 1.2 4.2 1.2 1.2 0 2.2-.2 2.9-.5.7-.4 1.1-.9 1.1-1.6 0-.7-.3-1.2-.9-1.6-.6-.4-2.7-1-6.4-1.8-2.7-.7-4.5-1.5-5.6-2.5-1.1-1-1.6-2.4-1.6-4.2 0-2.2.8-4 2.6-5.6 1.7-1.6 4.1-2.3 7.2-2.3 2.9 0 5.3.6 7.2 1.8 1.8 1.2 2.9 3.2 3.2 6h-6.1c-.1-.8-.3-1.4-.7-1.9-.7-.8-1.8-1.2-3.4-1.2-1.3 0-2.3.2-2.9.6-.6.4-.9.9-.9 1.5 0 .7.3 1.2.9 1.5.6.3 2.7.9 6.4 1.7 2.4.6 4.3 1.4 5.5 2.6a5.9 5.9 0 011.8 4.4c0 2.3-.9 4.2-2.6 5.7-1.7 1.5-4.4 2.2-8 2.2-3.7 0-6.4-.8-8.2-2.3a7.3 7.3 0 01-2.6-5.9h6.1v-.1zm24.5 0c.1 1.1.4 1.9.8 2.3.8.8 2.2 1.2 4.2 1.2 1.2 0 2.2-.2 2.9-.5.7-.4 1.1-.9 1.1-1.6 0-.7-.3-1.2-.9-1.6-.6-.4-2.7-1-6.4-1.8-2.7-.7-4.5-1.5-5.6-2.5-1.1-1-1.6-2.4-1.6-4.2 0-2.2.8-4 2.6-5.6 1.7-1.6 4.1-2.3 7.2-2.3 2.9 0 5.3.6 7.2 1.8 1.8 1.2 2.9 3.2 3.2 6H262c-.1-.8-.3-1.4-.7-1.9-.7-.8-1.8-1.2-3.4-1.2-1.3 0-2.3.2-2.9.6-.6.4-.9.9-.9 1.5 0 .7.3 1.2.9 1.5.6.3 2.7.9 6.4 1.7 2.4.6 4.3 1.4 5.5 2.6a5.9 5.9 0 011.8 4.4c0 2.3-.9 4.2-2.6 5.7-1.7 1.5-4.4 2.2-8 2.2-3.7 0-6.4-.8-8.2-2.3a7.3 7.3 0 01-2.6-5.9h6.3v-.1z" fill="currentColor"></path><path fill="#00CDBE" d="M22.1 30.6L18 15.1h-.1L14 30.6H7.4L0 7.6h6.7L11 23.2h.1L15 7.6h6.2l4 15.6h.1l4.3-15.6H36l-7.3 23h-6.6zm23-23v3.2h.1c.9-1.2 1.9-2.1 3.1-2.8a9.5 9.5 0 018.2-.1c1.2.6 2.2 1.6 2.8 3 .7-1 1.6-1.9 2.8-2.7A7.5 7.5 0 0166.4 7c1.2 0 2.4.2 3.5.5a7 7 0 012.7 1.4 6 6 0 011.8 2.6c.4 1.1.6 2.4.6 3.9V31h-6.5V17.8l-.1-2.2c-.1-.7-.2-1.3-.5-1.8s-.7-.9-1.2-1.2c-.5-.3-1.3-.5-2.2-.5-.9 0-1.6.2-2.2.5A3 3 0 0061 14a6 6 0 00-.6 1.9 15 15 0 00-.2 2.1v13h-6.5V15.8c0-.7-.2-1.3-.4-1.9a3 3 0 00-1.1-1.4c-.5-.3-1.3-.5-2.3-.5l-1.2.2c-.5.1-1 .4-1.5.8a4 4 0 00-1.2 1.6 7 7 0 00-.5 2.8V31H39V7.6h6.1z"></path><path d="M37.5 40.9c13.1 0 19.7-4.9 19.7-4.9l2.8 3.8S50.2 48 37.5 48 15 39.8 15 39.8l2.8-3.8s6.6 4.9 19.7 4.9" fill="currentColor"></path></g></svg>
                                        <ul>
                                            <li><a href="#">Get started</a></li>
                                            <li><a href="#">Add a business</a></li>
                                            <li><a href="#">For retailers</a></li>
                                            <li><a href="#">For brands</a></li>
                                            <li><a href="#">For advertisers</a></li>
                                            <li><a href="#">For developers</a></li>
                                        </ul>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

            <div className="footer-copyright">
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <p>Copyright © 2021 Weedmaps.<svg xmlns="http://www.w3.org/2000/svg" className="wm-icon wm-logo" preserveAspectRatio="xMidYMid slice" viewBox="0 0 150 36" height="16px"><g fill="none"><path fill="#00cdbe" d="M15.02 21.96L12.3 11.75h-.06l-2.6 10.2H5.35L.51 6.76h4.42l2.79 10.32h.06l2.53-10.32h4.06l2.59 10.3h.06l2.79-10.3h4.3l-4.8 15.2m13.53-11.62c-.5-.55-1.26-.82-2.28-.82a3.7 3.7 0 00-1.66.33 3.08 3.08 0 00-1.62 1.89c-.1.37-.17.7-.19 1h6.8a4.8 4.8 0 00-1.05-2.41m-4.72 8c.63.6 1.53.9 2.7.9.85 0 1.57-.2 2.18-.62.61-.42.98-.87 1.12-1.34h3.68c-.6 1.82-1.5 3.13-2.7 3.9a7.97 7.97 0 01-4.42 1.18 8.72 8.72 0 01-3.23-.57 6.7 6.7 0 01-2.44-1.64 7.44 7.44 0 01-1.54-2.53 9.37 9.37 0 01-.54-3.24c0-1.14.2-2.2.56-3.18a7.43 7.43 0 017.21-4.86 6.8 6.8 0 015.75 2.76c.62.84 1.06 1.8 1.34 2.88.28 1.07.38 2.2.3 3.38h-11c.06 1.35.41 2.33 1.03 2.94m20.94-8c-.5-.55-1.26-.82-2.28-.82-.66 0-1.22.1-1.66.33a3.09 3.09 0 00-1.62 1.9c-.1.37-.17.7-.19 1h6.8a4.8 4.8 0 00-1.04-2.42m-4.72 8c.63.6 1.53.9 2.71.9.85 0 1.57-.2 2.18-.62.61-.42.98-.87 1.12-1.34h3.68c-.59 1.82-1.49 3.13-2.7 3.9a7.89 7.89 0 01-4.4 1.19c-1.2 0-2.29-.2-3.25-.58a6.8 6.8 0 01-3.98-4.16 9.33 9.33 0 01-.54-3.24c0-1.14.19-2.2.56-3.18a7.43 7.43 0 017.21-4.86 6.8 6.8 0 015.75 2.76c.62.84 1.07 1.8 1.34 2.88.28 1.08.37 2.2.3 3.38h-11c.05 1.36.4 2.34 1.02 2.94m21.9-5.83a4.42 4.42 0 00-.61-1.53 3.46 3.46 0 00-1.1-1.07 3.27 3.27 0 00-1.7-.4c-.7 0-1.27.13-1.74.4-.47.28-.85.64-1.13 1.1-.28.45-.5.96-.62 1.54a7.6 7.6 0 00.02 3.57c.14.59.36 1.11.66 1.57.3.46.69.83 1.15 1.12.46.28 1.02.43 1.66.43.69 0 1.26-.14 1.72-.41.46-.27.83-.64 1.1-1.1.29-.46.48-1 .6-1.58a9.13 9.13 0 000-3.63zm.17 7.53a4.31 4.31 0 01-1.93 1.78c-.8.36-1.69.55-2.69.55a6.5 6.5 0 01-3-.66 6 6 0 01-2.13-1.8 8.13 8.13 0 01-1.27-2.6 11.08 11.08 0 01.01-6c.3-.96.71-1.8 1.27-2.53a6.21 6.21 0 015.05-2.41c.9 0 1.76.19 2.58.57.82.38 1.46.95 1.93 1.69h.06V.96h4.18v21H66.5v-1.94h-.06zm41.91-7.49a4.4 4.4 0 00-.6-1.53c-.29-.44-.65-.8-1.1-1.07-.46-.27-1.03-.4-1.72-.4s-1.27.13-1.74.4c-.47.28-.85.64-1.14 1.1-.29.44-.49.96-.62 1.54a8.22 8.22 0 00.01 3.58c.13.59.36 1.11.66 1.57.3.46.68.84 1.14 1.12.46.28 1.01.43 1.66.43.68 0 1.26-.13 1.72-.4.46-.28.83-.65 1.1-1.1.27-.47.47-.99.6-1.58a9.87 9.87 0 000-3.63zm.17 7.54a4.32 4.32 0 01-1.93 1.78c-.8.36-1.69.54-2.69.54a6.5 6.5 0 01-3-.66 5.96 5.96 0 01-2.13-1.79 8.23 8.23 0 01-1.27-2.6 10.72 10.72 0 010-6 7.6 7.6 0 011.25-2.52 6.32 6.32 0 012.1-1.75 6.25 6.25 0 012.94-.66c.9 0 1.76.19 2.57.57.81.38 1.45.94 1.92 1.69h.05V6.7h4.18v15.28h-3.97v-1.94h-.06zM77.06 6.77v2.06h.06a5.4 5.4 0 014.65-2.47c.96 0 1.83.19 2.63.56a3.69 3.69 0 011.8 1.97 6.4 6.4 0 011.84-1.76c.77-.51 1.69-.77 2.75-.77.8 0 1.55.1 2.23.3.68.2 1.27.51 1.76.94.49.44.87 1 1.15 1.7a7 7 0 01.4 2.52V22h-4.16v-8.63c0-.5-.02-.99-.06-1.44a3.03 3.03 0 00-.33-1.18c-.18-.33-.44-.6-.78-.8-.34-.2-.81-.3-1.4-.3-.6 0-1.07.12-1.43.35-.37.22-.65.52-.86.88-.21.36-.35.77-.41 1.23-.07.46-.11.92-.11 1.4v8.47h-4.17v-8.53c0-.45-.01-.9-.03-1.34a3.95 3.95 0 00-.25-1.22 1.9 1.9 0 00-.74-.9 2.76 2.76 0 00-1.52-.34 2.98 2.98 0 00-1.72.63c-.31.24-.57.6-.78 1.06a4.21 4.21 0 00-.33 1.8v8.83H73.1V6.77h3.94zm47.16 12.06c.47-.28.84-.63 1.12-1.07.29-.45.49-.96.6-1.55a8.98 8.98 0 000-3.58 4.97 4.97 0 00-.64-1.57 3.19 3.19 0 00-2.82-1.53 3.16 3.16 0 00-2.83 1.53 4.7 4.7 0 00-.6 1.56 9.13 9.13 0 00.02 3.6c.13.6.34 1.1.62 1.55a3.22 3.22 0 002.84 1.48c.7 0 1.26-.14 1.72-.41zM118.8 6.77v1.94h.06a4.6 4.6 0 011.94-1.8 5.95 5.95 0 012.59-.55c1.2 0 2.22.22 3.08.67a6.37 6.37 0 012.15 1.8c.57.75 1 1.61 1.27 2.6.27 1 .4 2.03.4 3.1 0 1.03-.13 2-.41 2.95a7.62 7.62 0 01-1.25 2.5 6.28 6.28 0 01-2.1 1.73 6.3 6.3 0 01-2.92.65c-.94 0-1.81-.2-2.61-.58a4.87 4.87 0 01-1.96-1.7H119v7.2h-4.18V6.78h3.98zm16.5 11.43c.18.32.42.59.71.8.3.2.64.35 1.02.45a4.75 4.75 0 002.1.05c.33-.07.62-.18.89-.33.26-.14.48-.34.66-.58.17-.24.26-.55.26-.93 0-.62-.42-1.09-1.25-1.4-.84-.32-2-.64-3.5-.95-.6-.13-1.2-.3-1.77-.48a6 6 0 01-1.55-.73 3.19 3.19 0 01-1.51-2.83c0-.98.19-1.78.57-2.4a4.2 4.2 0 011.5-1.49 6.7 6.7 0 012.12-.76 12.86 12.86 0 014.8.02 6.5 6.5 0 012.08.8 4.8 4.8 0 011.52 1.48c.4.62.64 1.4.72 2.34h-3.97c-.06-.8-.37-1.35-.92-1.63a4.24 4.24 0 00-1.94-.43c-.24 0-.5.02-.77.04-.27.03-.52.1-.75.2-.22.1-.41.23-.57.42-.16.2-.24.44-.24.75 0 .38.14.68.4.91.28.24.64.43 1.08.58.44.15.94.28 1.5.4l1.74.38c.6.14 1.2.3 1.78.5.58.2 1.1.46 1.54.78.45.32.81.72 1.1 1.2.26.48.4 1.07.4 1.78a4.74 4.74 0 01-2.18 4.15 6.6 6.6 0 01-2.22.87 12.77 12.77 0 01-5.14 0 7 7 0 01-2.25-.89 5.09 5.09 0 01-1.6-1.64 5.1 5.1 0 01-.7-2.54h4c0 .45.1.84.28 1.16"></path><path fill="#000" d="M72.82 31.03c9.03 0 13.6-3.42 13.6-3.42l1.94 2.62s-6.74 5.72-15.54 5.72c-8.8 0-15.54-5.72-15.54-5.72l1.95-2.63s4.57 3.43 13.6 3.43"></path><path fill="#00cdbe" d="M146.92 8.3h.19c.26 0 .42 0 .48-.03a.25.25 0 00.14-.1.34.34 0 00.05-.17.25.25 0 00-.06-.17.42.42 0 00-.15-.11 2.29 2.29 0 00-.48-.03h-.18v.6zm-.45 1.26V7.35h1.16c.15.02.27.05.35.1.1.04.15.11.21.2a.6.6 0 01-.06.73.7.7 0 01-.44.21l.16.09a.8.8 0 01.15.17l.16.27.26.44h-.55l-.18-.35a1.37 1.37 0 00-.3-.45.5.5 0 00-.32-.09h-.1v.91h-.46zm.95-2.79c-.3 0-.57.08-.83.22a1.72 1.72 0 00-.63 2.31c.15.27.35.48.62.62a1.65 1.65 0 002.28-.6 1.64 1.64 0 00-.01-1.68 1.57 1.57 0 00-.63-.62 1.73 1.73 0 00-.83-.2zm-.01-.4a2.03 2.03 0 011.8 1.04 2.12 2.12 0 010 2.08c-.2.33-.44.6-.77.77-.33.2-.68.28-1.04.28s-.71-.09-1.04-.27a1.9 1.9 0 01-.77-.77 2.12 2.12 0 01.77-2.86c.33-.18.67-.27 1.03-.27z"></path></g></svg> & <svg className="wm-icon wm-logo-mini" xmlns="http://www.w3.org/2000/svg" width="23px" height="15px" viewBox="0 0 33 19"><g fill="none"><path d="M.46.893v9.35h29.645V.893H.46z"></path><path fill="#00CDBE" d="M18 .373v1.232h.035c.332-.47.73-.833 1.2-1.092.465-.258 1-.387 1.605-.387.58 0 1.11.11 1.59.334.478.223.842.617 1.09 1.18.272-.4.642-.75 1.11-1.057.468-.305 1.02-.457 1.66-.457.485 0 .935.06 1.35.176.414.117.768.305 1.064.563.296.258.527.596.692 1.013.166.417.25.92.25 1.506v6.092h-2.522v-5.16c0-.304-.012-.59-.036-.86-.023-.272-.088-.506-.194-.707-.107-.2-.264-.36-.47-.48-.208-.12-.49-.18-.844-.18-.355 0-.642.07-.86.2-.22.132-.392.31-.516.53-.124.212-.207.46-.25.74-.04.27-.06.55-.06.832v5.07h-2.52v-5.1c0-.27-.007-.54-.02-.8-.01-.267-.06-.51-.15-.733-.09-.224-.237-.4-.443-.537-.2-.13-.51-.2-.91-.2-.12 0-.27.03-.47.08-.19.05-.38.15-.57.3-.18.15-.34.36-.47.637-.13.28-.19.64-.19 1.086v5.28h-2.52V.373H18zM8.752 9.476l-1.634-6.11h-.035L5.52 9.476H2.91L0 .373h2.663l1.686 6.18h.03L5.91.373h2.452l1.562 6.163h.035L11.64.373h2.592L11.34 9.476H8.75z" transform="translate(.46 .767)"></path><path d="M31.72 3.01h1.204V.604h-2.41V3.01h1.205z"></path><path fill="#000" d="M15.39 15.578c5.448 0 8.206-2.052 8.206-2.052l1.172 1.573s-4.068 3.42-9.38 3.42-9.38-3.42-9.38-3.42l1.174-1.58s2.758 2.05 8.208 2.05"></path></g></svg> are registered trademarks of Ghost Management Group, LLC. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}