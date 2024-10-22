import { createContext, useEffect, useState } from "react";

interface MemberRegistrationProps {
  name?: string;
  email?: string;
  phone?: string;
  role?: string;
  linkedin?: string;
  github?: string;
}

interface MemberRegistrationContextType {
  newMemberData?: MemberRegistrationProps;
  setMemberRegistrationData: (newData: MemberRegistrationProps) => void;
}

interface MemberRegistrationProviderProps {
  children: React.ReactNode;
}

export const MemberRegistrationContext = createContext(
  {} as MemberRegistrationContextType
);

export function NewRegistrationProvider({
  children,
}: MemberRegistrationProviderProps) {
  const [newMemberData, setNewMemberData] = useState<MemberRegistrationProps>();

  function setMemberRegistrationData(newData: MemberRegistrationProps) {
    setNewMemberData((prevData) => ({ ...prevData, ...newData }));
  }

  useEffect(() => {
    if (newMemberData) {
      const memberDataAsJSON = JSON.stringify(newMemberData);

      localStorage.setItem("memberData", memberDataAsJSON);
    }
  }, [newMemberData]);

  return (
    <MemberRegistrationContext.Provider
      value={{ newMemberData, setMemberRegistrationData }}
    >
      {children}
    </MemberRegistrationContext.Provider>
  );
}
