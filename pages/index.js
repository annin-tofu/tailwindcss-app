import Head from "next/head";

export default function Home() {
  return (
    <div className="flex justify-center mt-80">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-2xl font-bold">
        Next.js tailwind boilerplate
        <br></br>
        <input
          className="border-b-2 ml-[45%] border-black outline-none"
          type="text"
          placeholder="Username"
        ></input>
        <br></br>
        <input
          className="border-b-2 ml-[45%] border-black outline-none"
          type="text"
          placeholder="Password"
        ></input>
        <br></br>
        <input
          className="border-b-2 ml-[45%] border-black outline-none"
          type="text"
          placeholder="Username"
        ></input>
      </h1>
    </div>
  );
}
