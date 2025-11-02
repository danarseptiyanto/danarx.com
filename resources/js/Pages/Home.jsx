import React from "react";
import Navbar from "../components/Navbar";
import AppLayout from "../Layouts/AppLayout";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Writings from "../components/Writings";
import Tools from "../components/Tools";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <AppLayout>
      <div className="bg-bg-secondary">
        <Navbar />
        <Hero />
      </div>
      <Projects />
      <Writings />
      <Tools />
      <Footer />
    </AppLayout>
  );
}
