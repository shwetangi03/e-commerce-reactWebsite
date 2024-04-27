import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://react-rest-api-1dc04-default-rtdb.firebaseio.com/movies.json",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "content-type": "application/json",
          },
        }
      );
      const data = res.json;
      console.log(data);

      if (!res.ok) {
        throw new Error("Failed to submit data");
      }
      setFormData({
        name: "",
        email: "",
        phone: "",
      });
    } catch (error) {
      console.error("Error while submitting data", error);
    }
  };

  return (
    <div className="flex justify-center p-10">
      <div className="h-96 w-2/5 bg-zinc-800 rounded-lg">
        <h1 className="text-white flex justify-center p-5 text-2xl">
          Contact Us
        </h1>
        <div className="grid gap-3 px-20">
          <label className="text-white" htmlFor="name">
            Name:
          </label>
          <input
            className="rounded-md "
            type="text"
            id="name"
            value={formData.name}
            onChange={changeHandler}
          />

          <label className="text-white" htmlFor="email">
            Email-id:
          </label>
          <input
            className="rounded-md"
            type="email"
            name=""
            id="email"
            value={formData.email}
            onChange={changeHandler}
          />

          <label className="text-white " htmlFor="phone">
            Phone no:
          </label>
          <input
            className="rounded-md"
            type="number"
            id="phone"
            value={formData.phone}
            onChange={changeHandler}
          />

          <div className="flex justify-center">
            <button
              type="button"
              onClick={submitHandler}
              className="bg-pink-800 p-2 rounded-lg text-white"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
