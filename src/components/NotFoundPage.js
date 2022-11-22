import { useRouteError } from "react-router-dom";

export default function NotFoundPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="text-center">
      <h1>Oops!</h1>
      <p>Sorry, the page you were looking for could not be found..</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}