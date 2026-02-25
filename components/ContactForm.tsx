"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  goal: z.string().min(8, "Share your goal in a bit more detail")
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = (data: FormData) => {
    console.log("Contact request:", data);
    reset();
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 rounded-3xl border bg-white p-6 shadow-lg"
    >
      <div>
        <label className="mb-1 block text-sm font-semibold">Name</label>
        <input {...register("name")} className="w-full rounded-xl border p-3 outline-none ring-primary focus:ring-2" />
        {errors.name ? <p className="mt-1 text-xs text-rose-500">{errors.name.message}</p> : null}
      </div>

      <div>
        <label className="mb-1 block text-sm font-semibold">Email</label>
        <input type="email" {...register("email")} className="w-full rounded-xl border p-3 outline-none ring-primary focus:ring-2" />
        {errors.email ? <p className="mt-1 text-xs text-rose-500">{errors.email.message}</p> : null}
      </div>

      <div>
        <label className="mb-1 block text-sm font-semibold">Your Goal</label>
        <textarea rows={4} {...register("goal")} className="w-full rounded-xl border p-3 outline-none ring-primary focus:ring-2" />
        {errors.goal ? <p className="mt-1 text-xs text-rose-500">{errors.goal.message}</p> : null}
      </div>

      <Button type="submit" className="w-full">Contact Us</Button>
      {isSubmitSuccessful ? <p className="text-center text-sm font-semibold text-emerald-600">Message sent! We will call you shortly.</p> : null}
    </motion.form>
  );
}
