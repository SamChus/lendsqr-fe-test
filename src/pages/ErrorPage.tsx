import { isRouteErrorResponse, useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError()
  return (
    <div>
        <h1>Error Page</h1>
        <p>{isRouteErrorResponse(error) ? "Page not found" : "Unexpected Error Occured"}</p>
    </div>
  )
}

export default ErrorPage