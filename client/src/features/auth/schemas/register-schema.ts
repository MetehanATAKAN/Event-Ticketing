import * as Yup from "yup";

export const registerSchema = Yup.object({
  name: Yup.string().trim().required("Ad soyad gerekli."),
  email: Yup.string().trim().email("Gecerli bir e-posta gir.").required("E-posta gerekli."),
  password: Yup.string().min(6, "Sifre en az 6 karakter olmali.").required("Sifre gerekli."),
  confirmPassword: Yup.string()
    .required("Sifre tekrar gerekli.")
    .oneOf([Yup.ref("password")], "Sifreler eslesmiyor."),
  acceptedTerms: Yup.boolean().oneOf([true], "Devam etmek icin kosullari onaylamalisin."),
});
