import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().trim().email("Gecerli bir e-posta gir.").required("E-posta gerekli."),
  password: Yup.string().trim().required("Sifre gerekli."),
});
