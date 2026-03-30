"use client";

import { useFormik } from "formik";
import Link from "next/link";
import { startTransition, useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { registerSchema } from "@/features/auth/schemas/register-schema";
import { registerUser } from "@/features/auth/services/auth.service";
import { ApiError } from "@/lib/api/client";

type RegisterFormState = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptedTerms: boolean;
};

export function RegisterForm() {
  const router = useRouter();
  const [generalError, setGeneralError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const formik = useFormik<RegisterFormState>({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptedTerms: false,
    },
    validationSchema: registerSchema,
    validateOnBlur: true,
    validateOnChange: false,
    onSubmit: async (values, { resetForm, setErrors, setSubmitting }) => {
      setSuccessMessage("");
      setGeneralError("");

      try {
        await registerUser({
          name: values.name.trim(),
          email: values.email.trim().toLowerCase(),
          password: values.password,
        });

        setSuccessMessage("Hesabin olusturuldu. Birazdan giris sayfasina yonlendiriliyorsun.");
        resetForm();

        window.setTimeout(() => {
          startTransition(() => {
            router.push("/login");
          });
        }, 1200);
      } catch (error) {
        if (error instanceof ApiError) {
          setErrors(error.fieldErrors);
          setGeneralError(error.message);
        } else {
          setGeneralError("Beklenmeyen bir hata olustu. Lutfen tekrar dene.");
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="grid min-h-[calc(100vh-5rem)] items-center py-10">
      <div className="container-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <section className="space-y-6">
          <div className="inline-flex rounded-full border border-sky-300/20 bg-sky-300/8 px-4 py-2 text-sm text-sky-100">
            Yeni hesap olustur ve etkinlik dunyasina katil
          </div>

          <div className="space-y-4">
            <h1 className="font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Hesabini olustur, etkinlikleri kacirma.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-slate-300">
              Kayit olduktan sonra etkinliklerini takip edebilir, biletlerini daha hizli yonetebilir ve hesabina tek yerden ulasabilirsin.
            </p>
          </div>
        </section>

        <section className="panel glow-ring rounded-[2rem] p-4 sm:p-6">
          <div className="rounded-[1.5rem] border border-white/8 bg-[rgba(6,14,26,0.76)] p-6 sm:p-8">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.25em] text-orange-300">Kayit Ol</p>
              <h2 className="font-display text-3xl font-semibold text-white">PulsePass hesabini olustur</h2>
            </div>

            <form className="mt-8 space-y-5" onSubmit={formik.handleSubmit} noValidate>
              <Input
                label="Ad Soyad"
                name="name"
                type="text"
                placeholder="Melisa Kaya"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name ? formik.errors.name : undefined}
                disabled={formik.isSubmitting}
                autoComplete="name"
              />
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
                autoComplete="email"
              />
              <div className="grid gap-5 sm:grid-cols-2">
                <Input
                  label="Sifre"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  hint="En az 6 karakter."
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.password ? formik.errors.password : undefined}
                  disabled={formik.isSubmitting}
                  autoComplete="new-password"
                />
                <Input
                  label="Sifre Tekrar"
                  name="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  hint="Ayni sifreyi tekrar gir."
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.confirmPassword ? formik.errors.confirmPassword : undefined}
                  disabled={formik.isSubmitting}
                  autoComplete="new-password"
                />
              </div>

              <label className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/4 p-4 text-sm text-slate-300">
                <input
                  type="checkbox"
                  name="acceptedTerms"
                  className="mt-1 h-4 w-4 rounded border-white/12 bg-white/6"
                  checked={formik.values.acceptedTerms}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={formik.isSubmitting}
                />
                <span>Kullanim kosullarini ve gizlilik politikasini okudum, onayliyorum.</span>
              </label>
              {formik.touched.acceptedTerms && formik.errors.acceptedTerms ? (
                <p className="-mt-2 text-sm text-rose-300">{formik.errors.acceptedTerms}</p>
              ) : null}

              {generalError ? (
                <div className="rounded-2xl border border-rose-400/25 bg-rose-400/10 p-4 text-sm text-rose-100">
                  {generalError}
                </div>
              ) : null}

              {successMessage ? (
                <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-sm text-emerald-100">
                  {successMessage}
                </div>
              ) : null}

              <Button type="submit" className="w-full justify-center" disabled={formik.isSubmitting}>
                {formik.isSubmitting ? "Hesap olusturuluyor..." : "Hesap Olustur"}
              </Button>

              <div className="rounded-2xl border border-white/8 bg-white/4 p-4 text-sm text-slate-300">
                Zaten hesabin var mi?{" "}
                <Link href="/login" className="font-semibold text-sky-300">
                  Giris yap
                </Link>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
