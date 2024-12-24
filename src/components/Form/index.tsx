import { SubmitHandler, useForm } from "react-hook-form";

interface FormValues {
    name:string,
    email:string,
    phone:number
}
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit:SubmitHandler<FormValues> = async(data: any)=> {
    await new Promise((resolve)=> setTimeout(resolve, 3000));
    console.log(data);
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name</label>
          <input {...register("name", 
            { 
                required: true,
            })} />
        </div>
        <div>
          <label>Email</label>
          <input {...register("email", 
            { 
                required: true,
                pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  }
            })} />
             {errors.email && <span>{errors.email.message}</span>} 
        </div>
        <div>
          <label>Phone</label>
          <input {...register("phone", 
            { 
                required: true,
                pattern: {value:/^[0-9]{10}$/, message:"Please enter a valid phone number" }
            })} />
                {errors.phone && <span>{errors.phone.message}</span>} 
        </div>
        <input type="submit" disabled={isSubmitting} value={isSubmitting? "Submitting" : "Submit"}/>
      </form>
    </div>
  );
};

export default Form;
