import { AppCxt } from "@/context/app.context";
import React from "react";

export default function useAppCxt() {
  const value = React.useContext(AppCxt);
  return value
}
