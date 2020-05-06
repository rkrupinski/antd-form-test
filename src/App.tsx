import React from "react";
import { AntForm } from "./AntForm";

export const App: React.FC = () => {
  const onSubmit = (values: any) => {
    alert(JSON.stringify(values, null, 2));
  };

  return <AntForm onSubmit={onSubmit} />;
};
