import { useRouteError } from "react-router-dom";
import Footer from "./Footer";
import Header2 from "./Header2";

export default function NotFoundPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
    <Header2/>
    <div className="text-center">
      <h1>Oops!</h1>
      <p>Sorry, the page you were looking for could not be found..</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
    <div  className="fixed-bottom">
    <Footer/>
    </div>
    </>
  );
}