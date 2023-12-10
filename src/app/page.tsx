"use client";
import Header from "./components/Header";
import Services from "./components/Services";
import Register from "./components/register";
export default function Home() {
  return (
    <main>
      <Header />
      <Register />
      <Services />
    </main>
  );
}
