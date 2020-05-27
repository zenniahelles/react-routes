import React from 'react';
import Styles from "./Footer.module.scss";

export default function Footer(props) {
    return (
        <footer className={Styles.sitefooter}>
            <h3>En Footer</h3>
            {props.children}
        </footer>
    )
}