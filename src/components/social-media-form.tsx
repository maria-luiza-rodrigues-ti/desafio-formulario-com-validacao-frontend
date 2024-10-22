import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Github, Linkedin } from "lucide-react";
import { useForm } from "react-hook-form";

const SocialMediaFormSchema = z.object({
  linkedin: z.string().url("Url inválida").optional(),
  github: z.string().url("Url inválida").optional(),
});

type SocialMediaFormData = z.infer<typeof SocialMediaFormSchema>;

export function SocialMediaForm() {
  const { register, handleSubmit } = useForm<SocialMediaFormData>({
    resolver: zodResolver(SocialMediaFormSchema),
  });

  function handleSubmitSocialMediaForm(data: SocialMediaFormData) {
    console.log(data);
  }

  return (
    <form
      className="grid grid-cols-2 grid-rows-[auto, auto, auto] gap-7"
      onSubmit={handleSubmit(handleSubmitSocialMediaForm)}
    >
      <div className="col-span-2">
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
      </div>

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
      </div>

      <div className="col-span-2 flex justify-between items-center mt-4">
        <button className="text-lg text-indigo-600 border border-indigo-600  hover:text-white hover:bg-indigo-600 transition-all duration-200 px-6 py-2 lg:px-10 lg:py-5 rounded-full cursor-pointer">
          Anterior
        </button>
        <button className="text-lg text-white bg-indigo-600 hover:bg-indigo-800 transition-all duration-200 border px-6 py-2 lg:px-10 lg:py-5 rounded-full cursor-pointer">
          Próximo
        </button>
      </div>
    </form>
  );
}
