import { FormProvider, useForm } from "react-hook-form";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { NewRegistrationProvider } from "../context/member-registration-context";

export function DefaultLayout() {
  const methods = useForm();
  const location = useLocation();
  const isContactDetails = location.pathname === "/";
  const isRoleDetails = location.pathname === "/role-details";
  const isSocialMedia = location.pathname === "/social-media";

  return (
    <main className="bg-tone-200 w-full px-4 lg:px-0 lg:max-w-[70%] mx-auto my-20">
      <h1 className="text-3xl font-bold text-center text-slate-800 mb-3">
        Cadastro membros
      </h1>
      <p className="text-lg text-center text-neutral-500 mb-11 max-w-xl mx-auto">
        Por favor, preencha o formulário abaixo para se cadastrar como membro do
        projeto Frontend Fusion.
      </p>

      <section className="shadow-container rounded-[34px] p-9">
        <div className="mb-16 pb-8 border-b-2 border-neutral-100 flex items-center gap-4">
          <NavLink
            to="/"
            className="bg-indigo-600 text-white px-4 py-2 rounded-full"
          >
            1
          </NavLink>
          <div className="h-2 bg-neutral-200 w-full block rounded">
            <span
              className={`h-2 bg-indigo-600  block rounded ${
                isRoleDetails ? "w-full" : "w-1/2"
              }
                ${isSocialMedia && "w-full"}`}
            ></span>
          </div>

          <NavLink
            to="/role-details"
            className={` px-4 py-2 rounded-full ${
              isSocialMedia || isRoleDetails
                ? "bg-indigo-600 text-white"
                : "bg-neutral-200 text-neutral-600"
            }`}
          >
            2
          </NavLink>
          <div className="h-2 bg-neutral-200 w-full block rounded">
            <span
              className={`h-2 bg-indigo-600 block rounded ${
                isContactDetails && "w-0"
              } ${isRoleDetails && "w-1/2"} ${isSocialMedia && "w-full"}`}
            ></span>
          </div>
          <NavLink
            to="/social-media"
            className="bg-neutral-200 text-neutral-600 px-4 py-2 rounded-full"
          >
            3
          </NavLink>
        </div>
        <FormProvider {...methods}>
          <NewRegistrationProvider>
            <Outlet />
          </NewRegistrationProvider>
        </FormProvider>
      </section>
    </main>
  );
}
