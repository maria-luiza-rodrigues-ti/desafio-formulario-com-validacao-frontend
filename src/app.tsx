import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import * as z from "zod";
import { toast, Toaster } from "sonner";
import { useForm, FormProvider } from "react-hook-form";

import { ContactForm } from "./components/contact-form";
import { ProgressionBarSteps } from "./components/progression-bar-steps";
import { RoleForm } from "./components/role-form";
import { SocialMediaForm } from "./components/social-media-form";
import { MemberRegistrationContext } from "./context/member-registration-context";
import { useStepForm } from "./hooks/useStepForm";

const newMemberRegistrationSchema = z.object({
  name: z.string(),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone inválido"),
  role: z.string().refine((value) => value !== "", {
    message: "Selecione o cargo pretendido",
  }),
  linkedin: z.string().url("Url inválida").optional(),
  github: z.string().url("Url inválida").optional(),
});

type NewMemberFormData = z.infer<typeof newMemberRegistrationSchema>;

const steps = [<ContactForm />, <RoleForm />, <SocialMediaForm />];

export function App() {
  const { setMemberRegistrationData } = useContext(MemberRegistrationContext);
  const methods = useForm<NewMemberFormData>({
    resolver: zodResolver(newMemberRegistrationSchema),
  });
  const { handleSubmit, getValues } = methods;
  const { currentStep, nextStep, previousStep, goToStep } = useStepForm(
    steps.length
  );

  function handlePreviousStep(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    previousStep();
  }

  function handleNextStep() {
    const data = getValues();

    if (currentStep < steps.length - 1) {
      nextStep();
    } else if (data.name && data.email && data.phone) {
      setMemberRegistrationData(data);
      toast.success("Cadastro realizado com sucesso!");
    } else {
      toast.error("Falha ao cadastrar. Verifique os dados informados.");
    }
  }

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
        <ProgressionBarSteps setCurrentStep={goToStep} />
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(handleNextStep)}>
            {currentStep === 0 && <ContactForm />}
            {currentStep === 1 && <RoleForm />}
            {currentStep === 2 && <SocialMediaForm />}
            <div className="col-span-2 flex justify-between items-center mt-10">
              <button
                onClick={handlePreviousStep}
                className="text-lg text-indigo-600 border border-indigo-600 disabled:text-neutral-400 disabled:border-neutral-400 disabled:bg-neutral-100 disabled:cursor-not-allowed hover:text-white hover:bg-indigo-600 transition-all duration-200 px-6 py-2 lg:px-10 lg:py-5 rounded-full cursor-pointer"
                disabled={currentStep === 0}
              >
                Anterior
              </button>
              <button
                type="submit"
                onClick={handleNextStep}
                className="text-lg text-white bg-indigo-600 hover:bg-indigo-800 transition-all duration-200 border px-6 py-2 lg:px-10 lg:py-5 rounded-full cursor-pointer"
              >
                {currentStep === 2 ? "Cadastrar" : "Próximo"}
              </button>
            </div>
          </form>
        </FormProvider>
        <Toaster richColors />
      </section>
    </main>
  );
}
