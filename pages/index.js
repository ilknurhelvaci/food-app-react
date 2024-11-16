import Header from "@/components/layout/Header";
import HomePage from "./home";
import Head from "next/head";
import Input from "@/components/form/Input";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Feane Food App</title>
      </Head>
      <Header />
      <HomePage />
    </div>
  );
}
