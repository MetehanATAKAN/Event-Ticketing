"use client";

import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { startTransition, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/features/auth/schemas/login-schema";
import { loginUser } from "@/features/auth/services/auth.service";
import { ApiError } from "@/lib/api/client";
import { APP_ROUTES } from "@/lib/constants/routes";

export function LoginForm({ nextPath = APP_ROUTES.dashboard }: { nextPath?: string }) {
  const router = useRouter();
  const [generalError, setGeneralError] = useState("");
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    validateOnBlur: true,
    validateOnChange: false,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      setGeneralError("");

      try {
        await loginUser({
          email: values.email.trim().toLowerCase(),
          password: values.password,
        });

        startTransition(() => {
          router.push(nextPath);
        });
      } catch (error) {
        if (error instanceof ApiError) {
          setErrors(error.fieldErrors);
          setGeneralError(error.message);
          return;
        }

        const message =
          error instanceof Error
            ? error.message
            : "Giris sirasinda beklenmeyen bir hata olustu.";
        setGeneralError(message);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="grid min-h-[calc(100vh-5rem)] items-center py-10">
      <div className="container-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <section className="space-y-6">
          <div className="inline-flex rounded-full border border-orange-300/20 bg-orange-300/8 px-4 py-2 text-sm text-orange-100">
            Hesabina gir ve biletlerini yonet
          </div>

          <div className="space-y-4">
            <h1 className="font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Hesabina gir, etkinliklerini kolayca takip et.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-slate-300">
              Favori etkinliklerini goruntulemek, biletlerini yonetmek ve hesabina hizlica ulasmak icin giris yap.
            </p>
          </div>
        </section>

        <section className="panel glow-ring rounded-[2rem] p-4 sm:p-6">
          <div className="rounded-[1.5rem] border border-white/8 bg-[rgba(6,14,26,0.76)] p-6 sm:p-8">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.25em] text-sky-300">Giris Yap</p>
              <h2 className="font-display text-3xl font-semibold text-white">Tekrar hos geldin</h2>
            </div>

            <form className="mt-8 space-y-5" onSubmit={formik.handleSubmit} noValidate>
              <Input
                label="E-posta"
                name="email"
                type="email"
                placeholder="ornek@mail.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email ? formik.errors.email : undefined}
                disabled={formik.isSubmitting}
              />
              <Input
                label="Sifre"
                name="password"
                type="password"
                placeholder="••••••••"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password ? formik.errors.password : undefined}
                disabled={formik.isSubmitting}
              />

              {generalError ? (
                <div className="rounded-2xl border border-rose-400/25 bg-rose-400/10 p-4 text-sm text-rose-100">
                  {generalError}
                </div>
              ) : null}

              <Button type="submit" className="w-full justify-center" disabled={formik.isSubmitting}>
                {formik.isSubmitting ? "Giris yapiliyor..." : "Giris Yap"}
              </Button>

              <div className="rounded-2xl border border-white/8 bg-white/4 p-4 text-sm text-slate-300">
                Hesabin yok mu?{" "}
                <Link href={APP_ROUTES.register} className="font-semibold text-orange-300">
                  Simdi kayit ol
                </Link>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
