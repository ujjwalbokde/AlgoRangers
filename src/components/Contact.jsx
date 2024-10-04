import React from 'react'
import { useForm } from 'react-hook-form';
const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data.name,data.email,data.message);
    alert("@ujjwalbokde will contact you soon .....")
    reset()
  };
  return (
    <div>
    {/* contacts */}
      <div className="bg-hero-simple bg-cover bg-no-repeat min-h-screen w-full pt-36 pb-4 text-black element" name="contact">
        <h1 className="text-5xl font-bold mb-5 text-center text-white">Contact Us</h1>
        
        <div className="px-32 flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
          <div className="p-16 mx-12 rounded-lg  w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  {...register("name", { required: true })}
                  className="mt-1 block w-full px-3 py-2 border border-sky-700 rounded-md shadow-sm bg-transparent focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">Name is required</p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  {...register("email", { required: true })}
                  className="mt-1 block w-full px-3 py-2 border border-sky-700 rounded-md shadow-sm bg-transparent focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">Email is required</p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  {...register("message", { required: true })}
                  className="mt-1 block w-full px-3 py-2 border border-sky-700 rounded-md shadow-sm bg-transparent focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">Message is required</p>
                )}
              </div>

              <button
                type="submit"
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-sky-700 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Send
                </span>
              </button>
            </form>
          </div>

          <div className=" p-6 rounded-lg  w-full md:w-1/2 h-[440px]">
            <h2 className="text-2xl font-bold mb-10">Contact Information</h2>
            <p className="mb-5 border border-sky-700 w-[400px] p-5 text-center rounded-md flex" >
              <strong><img src="/telephone.png" className="w-10 mr-5" alt="" /></strong> +91 9764624075
            </p>

           
            <p className="mb-5 border border-sky-700 w-[400px] p-5 text-center rounded-md flex">
              <strong><img src="/gmail.png" className="w-10 mr-5" alt="" /></strong> careconnect@gmail.com
            </p>
          </div>
        </div>
      </div></div>
  )
}

export default Contact