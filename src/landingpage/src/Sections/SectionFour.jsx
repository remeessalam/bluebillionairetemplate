import { Link, useNavigate } from "react-router-dom";
import Button from "../Components/Button/Buttton";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SectionFour = () => {
  const companyDetails = {
    email: "abc@example.com",
  };
  const [spinner, setSpinner] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    console.log(data);
    setSpinner(true);

    var emailBody = "Name: " + data.name + "\n\n";
    emailBody += "Email: " + data.email + "\n\n";
    emailBody += "Phone: " + data.phone + "\n\n";
    emailBody += "Subject: " + data.subject + "\n\n";
    emailBody += "Message:\n" + data.message;

    // Construct the request payload
    var payload = {
      to: companyDetails.email,
      // to: "remeesreme4u@gmail.com",
      subject: "You have a new message from Velandirch",
      body: emailBody,
    };

    await fetch("https://smtp-api-tawny.vercel.app/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then(() => {
        toast.success("Email sent successfully");
        reset();
        navigate("/thank-you");
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setSpinner(false));
  };

  return (
    <div className="flex justify-center items-center mt-28">
      <div className="flex flex-col gap-6 w-full md:w-1/2 px-5 md:px-0">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="w-full lg:w-1/2">
              <h3>Full name</h3>
              <div className="border border-[#505362] rounded-lg mt-2">
                <input
                  type="text"
                  placeholder="John Carter"
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                  className="py-4 w-full pl-4 bg-transparent border-none focus:outline-none focus:ring-0"
                />
              </div>
              {errors.fullName && (
                <span className="text-red-500">{errors.fullName.message}</span>
              )}
            </div>
            <div className="w-full lg:w-1/2">
              <h3>Email address</h3>
              <div className="border border-[#505362] rounded-lg mt-2">
                <input
                  type="email"
                  placeholder="example@youremail.com"
                  {...register("email", {
                    required: "Email address is required",
                  })}
                  className="py-4 w-full pl-4 bg-transparent border-none focus:outline-none focus:ring-0"
                />
              </div>
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-5">
            <div className="w-full lg:w-1/2">
              <h3>Phone number</h3>
              <div className="border border-[#505362] rounded-lg mt-2">
                <input
                  type="text"
                  placeholder="(123) 456 - 7890"
                  {...register("phoneNumber", {
                    required: "Phone number is required",
                  })}
                  className="py-4 w-full pl-4 bg-transparent border-none focus:outline-none focus:ring-0"
                />
              </div>
              {errors.phoneNumber && (
                <span className="text-red-500">
                  {errors.phoneNumber.message}
                </span>
              )}
            </div>
            <div className="w-full lg:w-1/2">
              <h3>Company</h3>
              <div className="border border-[#505362] rounded-lg mt-2">
                <input
                  type="text"
                  placeholder="ex. Google"
                  {...register("company", {
                    required: "Company name is required",
                  })}
                  className="py-4 w-full pl-4 bg-transparent border-none focus:outline-none focus:ring-0"
                />
              </div>
              {errors.company && (
                <span className="text-red-500">{errors.company.message}</span>
              )}
            </div>
          </div>

          <div className="">
            <div className="w-full">
              <h3>Message</h3>
              <div className="border border-[#505362] min-h-40 rounded-lg mt-2">
                <textarea
                  {...register("message", { required: "Message is required" })}
                  className="py-4 w-full pl-4 bg-transparent border-none focus:outline-none focus:ring-0 resize-none"
                  rows="4"
                />
              </div>
              {errors.message && (
                <span className="text-red-500">{errors.message.message}</span>
              )}
            </div>
          </div>

          <div className="flex flex-col mt-4 lg:flex-row items-center lg:justify-between gap-4 lg:gap-0">
            <div>
              <Button buttonName="Send Message" border={true} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
