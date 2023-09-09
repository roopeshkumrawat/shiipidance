import React, { Components } from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import phone from '../../images/PhoneCall.png'
import mail from '../../images/mailIcon.png'
import facebook from '../../images/Facebook.png'
import twiter from '../../images/twiterIcon.png'
import insta from '../../images/instaIcon.png'
import logo from '../../images/logo.png'
export default function Header() {
    return (
        <>
            <div className={` ${styles.topBar} container-fluid`}>
                <div className="container">
                    <div className="row">
                        <div className={`col ${styles.callMail}`}>

                            <Link to="tel:+1-256-355-2484"><img className={`${styles.phoneImg}`} src={phone} />+1-256-355-2484</Link>
                            <Link to="mailto:shilpinikhil@dance.com"><img className={`${styles.mailImg}`} src={mail} />shilpinikhil@dance.com</Link>
                        </div>
                        <div className={`col ${styles.socialIcons}`}>
                            <Link to="/"><img className={`${styles.socialIconsImg}`} src={facebook} /></Link>
                            <Link to="/"><img className={`${styles.socialIconsImg}`} src={twiter} /></Link>
                            <Link to="/"><img className={`${styles.socialIconsImg}`} src={insta} /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <Link className="navbar-brand" to="#"><img className={`${styles.logo}`} src={logo} alt="logo" /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${styles.navbarSupportedContent}`} id="navbarSupportedContent">
                            <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles.navbarNav}`}>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="#">HOME</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">ABOUT</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        CLASSES
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="#">Action</Link></li>
                                        <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        PAGES
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="#">Action</Link></li>
                                        <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-disabled="true">CONTACT</Link>
                                </li>
                            </ul>
                            <button className="btn btn-outline-dark rounded-1">REGISTRATION</button>
                        </div>
                    </div>
                </nav>
            </div >
        </>
    )
}
