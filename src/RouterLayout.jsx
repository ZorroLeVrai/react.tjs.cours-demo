import { Outlet } from "react-router-dom";
import LinkElement from './LinkElement';

const RouterLayout = () => {
  return (
    <>
      <div>
        <LinkElement to="/" text="Home" />
        <LinkElement to="/etape1" text="etape 1" />
        <LinkElement to="/etape2" text="etape 2" />
        <LinkElement to="/exercice1" text="ex 1" />
        <LinkElement to="/exercice2" text="ex 2" />
        <LinkElement to="/exercice3" text="ex 3" />
        <LinkElement to="/exercice3_et2" text="ex 3'" />
        <LinkElement to="/exercice4" text="ex 4" />
        <LinkElement to="/exercice5" text="ex 5" />
        <LinkElement to="/exercice6" text="ex 6" />
        <LinkElement to="/Alert" text="Alert" />
      </div>
      <div className="mt-4 mx-2">
        <Outlet />
      </div>
    </>
  )
}

export default RouterLayout;