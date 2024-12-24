import {SubmitHandler, useForm} from 'react-hook-form'

interface FormValue {
    name:string,
    email:string,
    password:string,
    confirm:string,
}
const PForm = () => {
  const {handleSubmit, watch, register, reset, formState:{errors, isSubmitting}} = useForm<FormValue>()
  const confirmPassword = watch('password')
  const onSubmit:SubmitHandler<FormValue>=(data:any)=>{
    console.log(data,"data");
    reset()
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label>Name</label>
            <input {...register('name',{
                required:true,
            })}/>
        </div>
        <div>
            <label>Email</label>
            <input {...register('email',{
                required:true,
                pattern:{
                    value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message:"Enter a valid email"
                },
            })}/>
            {errors.email && <p>{errors.email?.message}</p>}
        </div>
        <div>
            <label>Password</label>
            <input {...register('password',{
                required:true,
                pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, message:"Create strong password"}
            })}/>
            {errors.password && <p>{errors.password.message}</p>}

        </div>
        <div>
            <label>Confirm Password</label>
            <input {...register('confirm',{
                required:true,
                validate:(value)=> value===confirmPassword || 'Password does not match'
            })}/>
        </div>
        <input
        type='submit'
        value={isSubmitting? "submitting" : "submit"}
        />
      </form>
    </div>
  )
}

export default PForm
