import { useFormik } from "formik"
import { formSchema } from "../Schemas";

const initialValues ={
    name:"",
    email:"",
    password:"",
    confirm:"",
}
const Formik = () => {
    const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues:initialValues,
        validationSchema:formSchema,
        onSubmit:(values, action)=>{
            console.log(values, "values")
            action.resetForm()
        }
    })
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Name</label>
            <input
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            />
             {errors.name && touched.name && <p>{errors.name}</p>}
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            />
            {errors.email && touched.email && <p>{errors.email}</p>}
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            />
             { errors.password && touched.password && <p>{errors.password}</p>}
        </div>
        <div>
            <label htmlFor="confirm">Confirm Password</label>
            <input
            name="confirm"
            value={values.confirm}
            onChange={handleChange}
            onBlur={handleBlur}
            />
            {errors.confirm && touched.confirm ?  <p>{errors.confirm}</p> : null}
        </div>
        <button type="submit">
            Submit
        </button>

      </form>
    </div>
  )
}

export default Formik
