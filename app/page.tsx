'use client'
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

export default function Home() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative w-full min-h-screen bg-[#0f0f1c] text-white overflow-hidden flex items-center justify-center px-6 py-12">
      {/* Animated Background Shapes */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute w-72 h-72 bg-purple-500 rounded-full opacity-20 blur-3xl animate-pulse top-10 left-10" />
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl animate-pulse bottom-10 right-10" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left - Form */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 rounded-2xl">
          <CardContent className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Apply for Our MBA Program</h2>
            <Input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="bg-white/20 text-white placeholder-white/70"
            />
            <Input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="bg-white/20 text-white placeholder-white/70"
            />
            <Input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="bg-white/20 text-white placeholder-white/70"
            />
            <Textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us why you're interested"
              className="bg-white/20 text-white placeholder-white/70"
            />
            <Button className="w-full bg-purple-600 hover:bg-purple-700 transition">Apply Now</Button>
          </CardContent>
        </Card>

        {/* Right - Benefits */}
        <div className="text-white space-y-6">
          <h1 className="text-4xl font-extrabold leading-tight">
            Unlock Your Future with Our <br /> Premier MBA Program
          </h1>
          <p className="text-lg text-white/80">
            Join a community of forward-thinking leaders. Our MBA program offers:
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/90">
            <li>Industry-recognized curriculum</li>
            <li>Expert faculty with real-world experience</li>
            <li>Global networking opportunities</li>
            <li>Flexible online and on-campus options</li>
          </ul>
          <div className="flex gap-4">
            <Button variant="outline" className="border-purple-600 text-purple-300 hover:bg-purple-600 hover:text-white transition">
              Learn More
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 transition">Contact Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
