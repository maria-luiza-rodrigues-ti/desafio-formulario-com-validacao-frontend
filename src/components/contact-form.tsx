import { Mail, Phone, User } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export function ContactForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <header className="mb-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Contato</h2>
        <p className="text-lg text-neutral-500">
          Por favor, preencha suas informações para contato.
        </p>
      </header>

      <main className="space-y-7 lg:space-y-0 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-7">
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
          <ErrorMessage
            errors={errors}
            name="name"
            render={({ message }) => (
              <p className="text-red-500 text-sm mt-2">{message}</p>
            )}
          />
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
              {...register("phone")}
            />
            <Phone
              className="absolute top-1/2 right-5 -translate-y-1/2"
              color="#a3a3a3"
              size={30}
            />
          </div>
          <ErrorMessage
            errors={errors}
            name="phone"
            render={({ message }) => (
              <p className="text-red-500 text-sm mt-2">{message}</p>
            )}
          />
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
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => (
              <p className="text-red-500 text-sm mt-2">{message}</p>
            )}
          />
        </div>
      </main>
    </div>
  );
}
