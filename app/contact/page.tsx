"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import React, { FormEvent, useRef, useState } from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+91 9257733088",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "uttamjangir14@gmail.com",
  },
];

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [firstname, setFirstname] = useState("");

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();

    const service_id = "service_0eql0hc";
    const template_id = "template_bo7to0g";
    const public_key = "7ZoKZhGDq2IVWpGi5";

    const templateParams = {
      firstname,
      lastname,
      email,
      phone,
      message,
    };

    emailjs
      .send(service_id, template_id, templateParams, public_key)
      .then(() => {
        toast.success("Message sent successfully!");
        setFirstname("");
        setLastname("");
        setPhone("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        toast.error("Something went wrong");
      });
  };

  return (
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={sendEmail} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-blue-600">Let&#39;s work together</h3>
              <p className="text-white/60">
                Hope to have a good time building.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="firstname"
                  placeholder="Firstname"
                  disabled={loading}
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
                <Input
                  type="lastname"
                  placeholder="Lastname"
                  disabled={loading}
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
                <Input
                  type="email"
                  placeholder="Email"
                  disabled={loading}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  type="phone"
                  placeholder="Phone"
                  disabled={loading}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={loading}
                  className="h-[200px]"
                  placeholder="Type you message here..."
                />
                <Button
                  disabled={loading}
                  type="submit"
                  size={"default"}
                  variant={"ghost"}
                  className="max-w-40 bg-blue-600"
                >
                  Send
                </Button>
              </div>
            </form>
          </div>
          <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-blue-600 rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
  );
};

export default Contact;
