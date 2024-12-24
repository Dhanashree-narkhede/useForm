import * as Yup from "yup";

export const formSchema = Yup.object({
  name:Yup.string().required("Please enter name"),
  email:Yup.string().email().required("Please enter email"),
  password:Yup.string().required("Generate password"),
  confirm:Yup.string().required().oneOf([Yup.ref('password')], "Password does not match")
})
