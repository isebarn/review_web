import React, { useState, useEffect } from "react";
import InputField from "@/components/InputField";
import Button from "@/components/Button";
import Link from "next/link";
import userIcon from "../../public/images/icon/user-icon.png";
import keyPassIcon from "../../public/images/icon/keypass-icon.png";
import { Form, Formik } from "formik";
import { login } from "@/services/AuthServices";
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';


const validateSchema = Yup.object().shape({
  email:Yup.string().email('Invalid Email').required("Email Required"),
  password: Yup.string()
  .required('Please provide a valid password.') 
  .min(8, 'Password is too short - should be 8 chars minimum.')
  .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
})

const initValue = {
  email: "",
  password: "",
};

export default function Login() {
  const [initialValue, setInitialValue] = useState(initValue);
  const router = useRouter();

  const submitHandle = async (values) => {
      const data = values
      const response = await login(data.email, data.password)
      if(response && response.token){
          router.push('/')
      }
  };

  return (
    <div className="login">
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
                <h3 className="text-1000">Sign In</h3>
                <p className="text-700">Get access to your account</p>
              </div>
              <Button
                btnTxt="Sign in With google"
                className="mb-3 btn-phoenix-secondary"
              />
              <Button
                btnTxt="Sign in with facebook"
                className=" btn-phoenix-secondary"
              />
              <div className="position-relative">
                <hr className="bg-200 mt-5 mb-4" />
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
                    <InputField
                      type="password"
                      name="password"
                      label="Password"
                      placeholder="Password"
                      icon={keyPassIcon}
                      value={values.password}
                    />
                    <div className="row flex-between-center mb-7">
                      <div className="col-auto">
                        <div className="form-check mb-0">
                          <input
                            className="form-check-input"
                            id="basic-checkbox"
                            type="checkbox"
                            checked="checked"
                          />
                          <label
                            className="form-check-label mb-0"
                            for="basic-checkbox"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                      <div className="col-auto">
                        <Link
                          type="button"
                          className="fs--1 fw-semi-bold"
                          href="/forgot-password"
                        >
                          Forgot Password?
                        </Link>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                      Sign In
                    </button>
                  </Form>
                )}
              </Formik>
              <div className="text-center">
                <Link className="fs--1 fw-bold" href="/sign-up">
                  Create an account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
