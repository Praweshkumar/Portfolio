import React from "react";
// import myProfile from "./assets/myProfie.png"

const Home = () => {

  // function handleClick(){
  //   // alert("resume downlaod succesffully");
  //   fetch("/Prawesh.pdf") // Update with actual API URL
  //     .then((response) => response.blob())
  //     .then((blob) => {
  //       const url = window.URL.createObjectURL(blob);
  //       const a = document.createElement("a");
  //       a.href = url;
  //       a.download = "Prawesh.pdf";
  //       document.body.appendChild(a);
  //       a.click();
  //       a.remove();
  //     });
  // }
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white-900 text-black text-center p-6">
      <div>
        <h2 className="text-4xl md:text-6xl font-bold">I am Prawesh 😊</h2>
        <h1 className="text-2xl md:text-4xl mt-2 font-semibold">FullStack developer</h1>       
        <p className="mt-4 text-lg md:text-xl">Creative web developer skilld in designing responsive and user friendly website,focused on delivering innovtive and effective web solutions</p>
        <a href="/Prawesh.pdf"   className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-all">
          Download resume
        </a>
      </div>
    </section>
  );
};

export default Home;
