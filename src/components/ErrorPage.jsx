import React from 'react'
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
  return (
    <div>ErrorPage The error given by the libarary is {error.statusText} , {error.message}</div>
  )
}

export default ErrorPage;