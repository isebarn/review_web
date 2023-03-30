import React, { useState } from "react";
import Link from "next/link";
import Button from "@/components/Button";
import { Form, Formik } from "formik";
import InputField from "@/components/InputField";
import userIcon from "../../public/images/icon/user-icon.png";
import keyPassIcon from "../../public/images/icon/keypass-icon.png";
import facebookIcon from "../../public/images/icon/facebook.png";
import googleIcon from "../../public/images/icon/google.png";
import { signUp } from "@/services/api";
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';

const initValue = {
  email: "",
  password: "",
};

const validateSchema = Yup.object().shape({
    email:Yup.string().email('Invalid Email.').required("Email is Required."),
    password: Yup.string()
    .required('Password is Requried.') 
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    retypePassword: Yup
    .string()
    .required('Please retype your password.')
    .oneOf([Yup.ref('password')], 'Your passwords do not match.')
  })

export default function SignUp() {
  const [initialValue, setInitialValue] = useState(initValue);
  const router = useRouter();

  const submitHandle = async (values) => {
    const data = values;
    const response = await signUp(data.email, data.password);
    if(response && response.message){
        router.push('/login')
    }
  };
  return (
    <div>
      <div className="main" id="top">
        <div className="container-fluid px-0">
          <div className="container">
            <div className="row flex-center min-vh-100 py-5">
              <div className="col-sm-10 col-md-8 col-lg-5 col-xl-5 col-xxl-3">
                <Link
                  className="d-flex flex-center text-decoration-none mb-4"
                  href="/"
                >
                  <div className="d-flex align-items-center fw-bolder fs-5 d-inline-block">
                    Summary
                  </div>
                </Link>
                <div className="text-center mb-7">
                  <h3 className="text-1000">Sign Up</h3>
                  <p className="text-700">Create your account today</p>
                </div>
                <Button
                icon={googleIcon}
                  btnTxt="Sign up with google"
                  className="btn-phoenix-secondary mb-3"
                />
                <Button
                  icon={facebookIcon}
                  btnTxt="Sign up with facebook"
                  className="btn-phoenix-secondary mb-3"
                />
                <div className="position-relative mt-4">
                  <hr className="bg-200" />
                  <div className="divider-content-center">or use email</div>
                </div>
                <Formik initialValues={initialValue} onSubmit={submitHandle} validationSchema={validateSchema}>
                  {({ values }) => (
                    <Form>
                      <InputField
                        type="email"
                        name="email"
                        label="Email Address"
                        placeholder="name@example.com"
                        icon={userIcon}
                        value={values.email}
                      />
                      <div className="row g-3 mb-3">
                        <div className="col-md-6">
                          <InputField
                            type="password"
                            name="password"
                            label="Password"
                            placeholder="Password"
                            icon={keyPassIcon}
                            value={values.password}
                          />
                        </div>
                        <div className="col-md-6">
                          <InputField
                            type="password"
                            name="retypePassword"
                            label="Confirm Password"
                            placeholder="Confirm Password"
                            icon={keyPassIcon}
                          />
                        </div>
                      </div>
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                        />
                        <label
                          className="form-label fs--1 text-none"
                        >
                          I accept the <Link href="#!">terms </Link>and{" "}
                          <Link href="#!">privacy policy</Link>
                        </label>
                      </div>
                      <button className="btn btn-primary w-100 mb-3">
                        Sign up
                      </button>
                      <div className="text-center">
                        <Link
                          className="fs--1 fw-bold"
                          href="/login"
                        >
                          Sign in to an existing account
                        </Link>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
