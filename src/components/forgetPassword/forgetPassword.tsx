import React from 'react'
import styled from './forgetPassword.module.scss'
import Image from "next/image";
import {routes} from "../../../constants/routes";
import {useRouter} from "next/router";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, useFormik} from "formik";
// export const forgetValidationSchemas = Yup.object({
//     email:Yup.string()
//         .email("Please Enter Valid Email")
//         .required("Email is Required"),
// });

const ForgetPassword = () => {
    const {push} = useRouter();
    return (
        <div className={styled.wrapper}>
            <div className={styled.card}>
                <div className={styled.cardLeft}>
                    <a href="/">
                    <Image width={100} height={60} src={"/static/images/codeHire-logo.png"} alt='forget'/>
                    </a>
                    <Image width={400} height={400}  src={"/static/images/forget.png"} alt='forget'/>
                </div>
                <div className={styled.cardRight}>
                    <div className={styled.cardContent}>
                    <section className={styled.cardTitle}>
                        <h2>Reset Password</h2>
                        <p>Reset your password with Codehire.</p>
                    </section>

                    <form onSubmit={e=>(e.preventDefault())}>
                        <div className={styled.alert_warning}>
                            Enter your Email and instructions will be sent to you!
                        </div>

                        <div className={styled.formGroup}>
                            <label htmlFor="email">Username/Email</label>
                            <input type="email" name="email" placeholder="Enter username or email" />
                            {/*<ErrorMessage name="email" className={styled.errorMessage} component="div"/>*/}
                        </div>
                        <button type="submit" className={styled.submitButton}>Send Request</button>
                    </form>
                        <div className={styled.logIn}>
                            <p>Remember It ?
                                <a  onClick={()=>push(routes.user.login)} className={styled.loginLink}>Go to Login</a>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ForgetPassword
