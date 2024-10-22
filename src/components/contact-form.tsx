import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, User } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const ContactFormSchema = z.object({
  name: z.string(),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone inválido"),
});

type ContactFormData = z.infer<typeof ContactFormSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
  });

  function handleSubmitForm(data: ContactFormData) {
    console.log(data);
  }

  return (
    <div>
      <header className="mb-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Contato</h2>
        <p className="text-lg text-neutral-500">
          Por favor, preencha suas informações para contato.
        </p>
      </header>

      <form
        className="space-y-7 lg:space-y-0 lg:grid lg:grid-cols-2 lg:grid-rows-3 lg:gap-7"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <div>
          <label
            htmlFor="name"
            className="font-medium text-lg text-slate-800 block mb-5"
          >
            Nome completo
          </label>
          <div className="relative w-full">
            <input
              type="text"
              title="Nome completo"
              className="shadow-input rounded-[2.875rem] p-5 w-full"
              required
              {...register("name")}
            />
            <User
              className="absolute top-1/2 right-5 -translate-y-1/2"
              color="#a3a3a3"
              size={30}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="phone"
            className="font-medium text-lg text-slate-800 block mb-5"
          >
            Telefone
          </label>
          <div className="relative w-full">
            <input
              type="tel"
              title="Telefone"
              className="shadow-input rounded-[2.875rem] p-5 w-full"
              required
              {...register("phone")}
            />
            <Phone
              className="absolute top-1/2 right-5 -translate-y-1/2"
              color="#a3a3a3"
              size={30}
            />
          </div>
          {errors.phone && (
            <p className="text-red-500 text-sm mt-2">{errors.phone.message}</p>
          )}
        </div>

        <div className="col-span-2">
          <label
            htmlFor="email"
            className="font-medium text-lg text-slate-800 block mb-5"
          >
            E-mail
          </label>
          <div className="relative w-full">
            <input
              type="email"
              title="E-mail"
              className="shadow-input rounded-[2.875rem] p-5 w-full"
              required
              {...register("email")}
            />
            <Mail
              className="absolute top-1/2 right-5 -translate-y-1/2"
              color="#a3a3a3"
              size={30}
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>
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
