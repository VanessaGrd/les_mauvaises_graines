"use client";

import { useFormik } from "formik";
import { toast } from "sonner";
import * as Yup from "yup";
import Button from "../components/Button";
import TooltipIcon from "../components/TooltipIcon";
import supabase from "../config/supabaseClient";

interface AuthError {
  status: number;
  message: string;
}

export default function Home() {
  const formik = useFormik({
    initialValues: {
      mailLog: "",
      passwordLog: "",
    },
    validationSchema: Yup.object({
      mailLog: Yup.string()
        .email("Adresse mail invalide")
        .required("Veuillez entrer votre adresse mail"),
      passwordLog: Yup.string().required("Veuillez entrer votre mot de passe"),
    }),
    onSubmit: async (values) => {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: values.mailLog,
          password: values.passwordLog,
        });
        if (error) throw error;
        else {
          toast.success("Bonjour Les mauvaises graines !");
        }
      } catch (error: AuthError | any) {
        if (error.status === 400)
          await toast.error(
            "L'adresse mail et le mot de passe ne correspondent pas"
          );
        else
          await toast.error(
            "Une erreur s'est produite, veuillez réessayer plus tard"
          );
        console.error(error);
      }
    },
  });
  return (
    <div className="min-h-[80vh] flex items-center justify-center flex-col">
      <h2 className="mb-8">Connexion</h2>
      <form
        onSubmit={formik.handleSubmit}
        method="post"
        className="max-w-sm mx-auto"
      >
        <div className="mb-5">
          <label
            aria-label="email"
            className="block mb-2 text-sm font-medium text-primary-50"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="mailLog"
            className="bg-gray-50 border border-primary-50 text-primary-50 text-sm rounded-lg focus:primary-50 focus:border-primary-50 block w-full p-2.5"
            placeholder="name@gmail.com"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mailLog}
          />
          {formik.touched.mailLog && formik.errors.mailLog ? (
            <TooltipIcon
              tooltip={formik.errors.mailLog}
              top="0"
              left="120px"
              color="red"
            />
          ) : null}
        </div>
        <div className="mb-8">
          <label
            aria-label="password"
            className="block mb-2 text-sm font-medium"
          >
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            name="passwordLog"
            className="bg-gray-50 border border-primary-50 text-primary-50 text-sm rounded-lg w-full p-2.5"
            placeholder="Entrez votre mot de passe"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.passwordLog}
          />
          {formik.touched.passwordLog && formik.errors.passwordLog ? (
            <TooltipIcon
              tooltip={formik.errors.passwordLog}
              top="0"
              left="120px"
              color="red"
            />
          ) : null}
        </div>
        <Button buttonTitle="Connexion" />
      </form>
    </div>
  );
}
