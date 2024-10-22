import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDown } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const RoleFormDataSchema = z.object({
  role: z.string().refine((value) => value !== "", {
    message: "Selecione o cargo pretendido",
  }),
});

type RoleFormData = z.infer<typeof RoleFormDataSchema>;

export function RoleForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RoleFormData>({
    resolver: zodResolver(RoleFormDataSchema),
  });

  function handleSubmitForm(data: RoleFormData) {
    console.log(data);
  }

  return (
    <div>
      <header className="mb-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">
          Cargo pretendido
        </h2>
        <p className="text-lg text-neutral-500">
          Por favor, selecione o cargo que você pretende se candidatar.
        </p>
      </header>
      <form
        className="flex flex-col gap-7"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <label
          htmlFor="role"
          className="font-medium text-lg text-slate-800 flex col-span-2"
        >
          Cargo pretendido
        </label>
        <div className="relative w-full lg:w-1/2 flex flex-col">
          <select
            title="Selecione o cargo pretendido"
            className="appearance-none font-medium text-lg text-neutral-500 block w-full shadow-input rounded-full p-5 bg-white cursor-pointer"
            {...register("role")}
          >
            <option value="">Selecione</option>
            <option value="front-end-developer">Desenvolvedor Front-end</option>
            <option value="back-end-developer">Desenvolvedor Back-end</option>
            <option value="full-stack-developer">
              Desenvolvedor Full-stack
            </option>
            <option value="mobile-developer">Desenvolvedor Mobile</option>
            <option value="software-developer">
              Desenvolvedor de Software
            </option>
            <option value="software-engineer">Engenheiro de Software</option>
            <option value="software-architect">Arquiteto de Software</option>
            <option value="ux-ui-designer">UX/UI Designer</option>
            <option value="system-analyst">Analista de Sistemas</option>
            <option value="programmer-analyst">Analista Programador</option>
            <option value="devops-engineer">DevOps Engineer</option>
            <option value="data-engineer">Engenheiro de Dados</option>
            <option value="qa-engineer">QA Engineer</option>
            <option value="scrum-master">Scrum Master</option>
            <option value="product-owner">Product Owner</option>
          </select>
          <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
            <ChevronDown color="#737373" />
          </div>
          {errors.role && (
            <span className="text-red-500 mt-2 text-sm">
              {errors.role.message}
            </span>
          )}
        </div>

        <div className="col-span-2 flex justify-between items-center mt-4">
          <button className="text-lg text-indigo-600 border border-indigo-600  hover:text-white hover:bg-indigo-600 transition-all duration-200 px-6 py-2 lg:px-10 lg:py-5 rounded-full cursor-pointer">
            Anterior
          </button>
          <button
            type="submit"
            className="text-lg text-white bg-indigo-600 hover:bg-indigo-800 transition-all duration-200 border px-6 py-2 lg:px-10 lg:py-5 rounded-full cursor-pointer"
          >
            Próximo
          </button>
        </div>
      </form>
    </div>
  );
}
