import { Route, Routes } from "react-router-dom";
import { ContactForm } from "./components/contact-form";
import { RoleForm } from "./components/role-form";
import { SocialMediaForm } from "./components/social-media-form";
import { DefaultLayout } from "./layouts/default-layout";

export function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<ContactForm />} />
        <Route path="/role-details" element={<RoleForm />} />
        <Route path="/social-media" element={<SocialMediaForm />} />
      </Route>
    </Routes>
  );
}
