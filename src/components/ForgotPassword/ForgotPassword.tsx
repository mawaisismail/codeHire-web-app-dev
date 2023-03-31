import React from 'react'
import styled from './ForgotPassword.module.scss'

import Image from "next/image";

const ForgotPassword = () => {
    return (
        <div className={styled.wrapper}>
            <div className={styled.card}>
                <div className={styled.cardLeft}>
                    <Image width={100} height={100}  src={"/static/images/codeHire-logo.png"} alt='forget'/>
                    <Image width={400} height={400} src={"/static/images/forget.png"} alt='forget'/>
                </div>
                <div className={styled.cardRight}>
                    <section>
                        <h2>Reset Password</h2>
                        <p>Reset your password with Codehire.</p>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
