import { ErrorMessage } from "@hookform/error-message";
import { Github, Linkedin } from "lucide-react";
import { useFormContext } from "react-hook-form";

export function SocialMediaForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="grid grid-cols-2 grid-rows-[auto, auto, auto] gap-7">
      <header className="mb-10 col-span-2">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">
          Redes sociais
        </h2>
        <p className="text-lg text-neutral-500">
          Por favor, preencha os dados das suas redes sociais, caso tenha.
        </p>
      </header>
      <main className="col-span-2">
        <label
          htmlFor="linkedin"
          className="font-medium text-lg text-slate-800 block mb-5"
        >
          Linkedin
        </label>
        <div className="relative w-full">
          <input
            type="url"
            title="Digite a url do seu perfil no Linkedin"
            className="shadow-input rounded-[2.875rem] p-5 w-full"
            {...register("linkedin")}
          />
          <Linkedin
            className="absolute top-1/2 right-5 -translate-y-1/2"
            color="#a3a3a3"
            size={30}
          />
        </div>
      </main>

      <div className="col-span-2">
        <label
          htmlFor="github"
          className="font-medium text-lg text-slate-800 block mb-5"
        >
          Github
        </label>
        <div className="relative w-full">
          <input
            type="url"
            title="Digite a url do seu perfil no Github"
            className="shadow-input rounded-[2.875rem] p-5 w-full"
            {...register("github")}
          />
          <Github
            className="absolute top-1/2 right-5 -translate-y-1/2"
            color="#a3a3a3"
            size={30}
          />
        </div>
        <ErrorMessage
          errors={errors}
          name="role"
          render={({ message }) => (
            <p className="text-red-500 text-sm mt-2">{message}</p>
          )}
        />
      </div>
    </div>
  );
}
