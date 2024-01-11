'use client'
import { GiAnubis } from "react-icons/gi";
import { useForm } from "react-hook-form"

export default  function Login() {
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm()

   const onSubmit = (data) => {
      console.log(data);
      //login(data)

   }


   const login = async (data) =>{

         try {
            const response = await fetch("http://localhost:8200/login/",{
               method: "POST",
               mode: 'cors',
               headers: {
                  "Content-Type": "application/json",
               },
               body:JSON.stringify(data)
            });

         const result =  await response.json();
         console.log(result);

         } catch (error) {
            console.log(error);
         }
   }



   //console.log(watch("telefono"))
   return (
      <div className="w-full h-screen bg-slate-800 flex justify-center items-center flex-col"> 

         <div><GiAnubis className="w-[100px] h-[100px]" /> </div>

         <div> 
            <form 
               className="w-[500px] flex flex-col"
               onSubmit={handleSubmit(onSubmit)} >

               <input className="my-5 p-3 rounded" {...register("username",{required: true})}   />

              
               <input className="my-5 p-3 rounded" {...register("password", { required: true })} />


       
               {errors.nombre && <span className="text-red-600 text-2xl">este campo es requerido</span>}
               {errors.apellido && <span className="text-red-600 text-2xl">este campo es requerido</span>}

               
               <button 
                  className="w-full h-10 bg-emerald-500 text-white hover:bg-emerald-600" 
                  type="submit" > 
                     envia datos
               </button>

            </form>
         </div>
 
      </div>
   );
}