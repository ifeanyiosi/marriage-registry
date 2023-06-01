import Button from "@/components/Button";
import InputField from "@/components/InputField";
import formData from "@/page-components/Login/formSettings/formData";
import formInitialValues from "@/page-components/Login/formSettings/formInitialValues";
import validationSchema from "@/page-components/Login/formSettings/validationSchema";
import { Formik } from "formik";
import { Form } from "formik-antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  
  return (
    <div className="w-full h-screen  relative flex flex-col items-center justify-center">
      <div className="bg-primary w-full h-[50%] py-[80px] pb-[80px] flex flex-col gap-[50px] ">
        <Link href="/" className="text-white text-[32px] font-[400] font-Syne ">
          LOML
        </Link>
      </div>
      <div className="bg-choiceTwo w-full h-[50%]" />
      <div className="absolute translate-x-[-50%] max-w-[350px] md:max-w-[500px] w-full  left-[50%] flex items-center justify-center rounded-[16px] bg-white px-6  py-4 ">
        <Formik
          initialValues={formInitialValues}
          validationSchema={validationSchema.login}
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
            <Form
              layout="vertical"
              className="flex items-center max-w-[400px] w-full justify-center flex-col gap-8 rouned-[16px]"
            >
              <div className="flex rouned-[16px] flex-col w-full items-center justify-center gap-6">
                <InputField
                  name={formData.fields.email.name}
                  label={formData.fields.email.name}
                  placeholder={formData.fields.email.name}
                  type="text"
                  required={formData.fields.email.required}
                  disabled={loading}
                />
                <InputField
                  name={formData.fields.password.name}
                  label={formData.fields.password.label}
                  placeholder={formData.fields.password.placeholder}
                  type="password"
                  required={formData.fields.password.required}
                  disabled={loading}
                />
              </div>
              <div className="w-full">
                <Button
                  isLoading={loading}
                  disabled={loading}
                  variant="primary"
                  className="w-full py-6"
                >
                  SIGN IN
                </Button>
                <div className="pt-6">
                  <Link className="text-[14px] text-gray-600 " href="/">
                    Forgot Password?
                  </Link>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
