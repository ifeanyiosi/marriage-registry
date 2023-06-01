import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const FormContainer = ({ children }: Props) => {
  return (
    <div className="flex flex-col justify-center mx-auto items-center sm:max-w-[341px] md:max-w-[417px] w-full p-6 rounded-[16px] bg-white lg:shadow">
      {children}
    </div>
  );
};

export default FormContainer;
