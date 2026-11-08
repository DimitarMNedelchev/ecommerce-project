import { Header } from "../components/Header";
import "./PageNotFound.css";

export function PageNotFound() {
  return (
    <>
      <Header />
      <div className="page-not-found-container">
        <p className="page-not-found-text">404 Page not found</p>
      </div>
    </>
  );
}
