import { useState } from "react";
import Swal from "sweetalert2";

function ContactForm() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    // Check for internet connection
    if (!navigator.onLine) {
      Swal.fire({
        title: "No Internet!",
        text: "Please check your network connection and try again.",
        icon: "warning",
        confirmButtonText: "OK",
        confirmButtonColor: "#f59e0b", // Orange color
      });
      return;
    }

    setLoading(true);
    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setLoading(false);

      if (data.success) {
        Swal.fire({
          title: "Success!",
          text: "Your message has been sent successfully.",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#2563eb", // Blue color
          
        });
        event.target.reset();
      } else {
        Swal.fire({
          title: "Error!",
          text: data.message,
          icon: "error",
          confirmButtonText: "Try Again",
          confirmButtonColor: "#dc2626", // Red color
        });
      }
    } catch (error) {
      setLoading(false);
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <>
      <div
        id="contact"
        className="relative w-full h-max bg-black flex flex-col gap-6 md:gap-0 md:flex-row justify-center items-center font-saira py-16 md:px-10"
      >
        <h1 className="text-center text-[2rem] sm:text-[2.9rem] md:text-[3.2rem] lg:text-[3.5rem] xl:text-[3.7rem] 2xl:text-[3.9rem] text-blue-700 font-bold md:rotate-90 w-[20]">
          Contact Me
        </h1>
        <div className="w-[80%] max-w-lg bg-transparent border border-white p-6 rounded-lg shadow-lg">
          <form className="flex flex-col gap-4" onSubmit={onSubmit}>
            <div className="flex flex-col gap-0.5">
              <label htmlFor="name" className="text-gray-300">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="py-2 px-3 w-full border border-gray-600 rounded bg-gray-800 text-white outline-none"
              />
            </div>

            <div className="flex flex-col gap-0.5">
              <label htmlFor="email" className="text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="py-2 px-3 w-full border border-gray-600 rounded bg-gray-800 text-white outline-none"
              />
            </div>

            <div className="flex flex-col gap-0.5">
              <label htmlFor="message" className="text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                required
                placeholder="Type your message here"
                maxLength="700"
                className="py-2 px-3 w-full border border-gray-600 rounded bg-gray-800 text-white outline-none h-32 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="py-2 px-3 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Loading Spinner */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <div className="w-16 h-16 border-4 border-white border-dashed rounded-full animate-spin"></div>
        </div>
      )}
    </>
  );
}

export default ContactForm;
