import React, { useState } from "react";
import { Field, Form } from "formik-antd";
import { FaCheckSquare } from "react-icons/fa";
import { Formik } from "formik";
import FormContainer from "@/components/FormContainer";
import InputField from "@/components/InputField";
import NavigationBar from "@/components/NavigationBar";
import formData from "@/page-components/Signup/formSettings/formData";
import formInitialValues from "@/page-components/Signup/formSettings/formInitialValues";
import validationSchema from "@/page-components/Signup/formSettings/validationSchema";
import Button from "@/components/Button";
import { useRouter } from "next/router";

type Props = {};

const Signup = (props: Props) => {
  const [checkTerms, setCheckTerms] = useState(false);
  const [checkTermsErrMsg, setCheckTermsErrMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <div className="w-full h-screen bg-primary relative flex flex-col items-center justify-center">
      <NavigationBar />
      <div className="bg-primary px-4 w-full items-center pt-[100px] lg:pt-[150px] justify-center h-full">
        <FormContainer>
          <div className="w-full  overscroll-y-hidden">
            <Formik
              initialValues={formInitialValues.signup}
              validationSchema={validationSchema.signUp}
              onSubmit={(values) => {
                setLoading(true);
                console.log(values);
                setTimeout(() => {
                  setLoading(false);
                  router.push("/dashboard");
                }, 1500);
              }}
            >
              {() => (
                <Form className="flex flex-col gap-2" layout="vertical">
                  <InputField
                    name={formData.fields.firstname.name}
                    placeholder={formData.fields.firstname.placeholder}
                    label={formData.fields.firstname.label}
                    type="text"
                    disabled={loading}
                  />

                  <InputField
                    name={formData.fields.lastname.name}
                    placeholder={formData.fields.lastname.placeholder}
                    label={formData.fields.lastname.label}
                    type="text"
                    disabled={loading}
                  />

                  <InputField
                    name={formData.fields.phone.name}
                    placeholder={formData.fields.phone.placeholder}
                    label={formData.fields.phone.label}
                    type="number"
                    disabled={loading}
                  />

                  <InputField
                    name={formData.fields.email.name}
                    placeholder={formData.fields.email.placeholder}
                    label={formData.fields.email.label}
                    type="text"
                    disabled={loading}
                  />

                  <InputField
                    name={formData.fields.password.name}
                    placeholder={formData.fields.password.placeholder}
                    label={formData.fields.password.label}
                    type="password"
                    disabled={loading}
                  />

                  <div className="mt-3">
                    <Button
                      type="submit"
                      variant="primary"
                      className=" w-full py-6"
                      disabled={loading}
                      isLoading={loading}
                    >
                      Create Account
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </FormContainer>
      </div>
    </div>
  );
};

export default Signup;
