import { Fragment } from "react";

export default function Contact() {
  const conatctAccounts = [
    {
      linkName: "Ali AbdElbagi",
      src: "linkedIn.webp",
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ali-abdelbagi-02313b223/",
    },
    {
      linkName: "Ali AbuEl3iz",
      src: "gmail.webp",
      name: "Gamil",
      href: "mailto:aliroma849@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Ali%2C%0AI%20just%20visited%20your%20portfolio...",
    },
  ];

  const Accounts = conatctAccounts.map((account, index) => {
    return (
      <div className="flex flex-col gap-4 bg-p-color items-center" key={index}>
        <img src={account.src} alt="" className="size-8" />
        <p className="text-sm text-white">Via {account.name}</p>
        <a
          href={account.href}
          target="_blank"
          className="underline text-sky-500 font-bold"
        >
          {account.linkName}
        </a>
      </div>
    );
  });
  const socialLinks = [
    {
      src: "github.webp",
      name: "GitHub",
      link: "https://github.com/ali007-depug",
    },
    {
      src: "x.webp",
      name: "X",
      link: "https://x.com/AAbuel3iz?t=CuBNSxHRhlU9fmVw9JExdQ&s=09",
    },
    {
      src: "insta.webp",
      name: "instagram",
      link: "https://www.instagram.com/ali_abdelbagi?utm_source=qr&igsh=NnRsaHc2eDdoNDBz",
    },
    {
      src: "facebook.webp",
      name: "facebook",
      link: "https://www.facebook.com/ali.abdelbagiali.3",
    },
  ];

  const icons = socialLinks.map((social, index) => {
    return (
      <Fragment key={index}>
        <a href={social.link} title={social.name} target="_blank">
          <img src={social.src} alt={social.name} className="size-9" />
        </a>
      </Fragment>
    );
  });
  return (
    <footer className=" flex flex-col  pt-10" id="contact" role="contentinfo">
      {/* title */}
      <h2 className="text-dyTitle mx-auto w-fit font-bold  text-p-color my-5">
        Contact Me 📲
      </h2>
      {/* desc */}
      <p className="text-p-color/80  text- font-semibold mx-auto text-center w-[35ch] sm:w-[50ch] mb-5">
        I'm open to freelance work, collaborations, or just a friendly chat
        about tech. Feel free to reach out — I’ll reply as soon as I can.
      </p>

      <div className="bg-p-color px-dyp py-10 md:flex justify-between items-center">
        <p className="text-white font-bold text-3xl text-center my-5 ">
          Get in Touch
        </p>

        {/* icons wrapper */}
        <div className="flex max-md:flex-col gap-5 justify-center md:gap-9 items-center">
          {/* via linked in */}
          {Accounts}
        </div>

        {/*  */}
        <div className="flex flex-col my-5 gap-5 items-center justify-center">
          <p className="text-sm text-white">Or visit My Others Media Accounts</p>
          <div className="Links flex gap-4">{icons}</div>
        </div>
      </div>
    </footer>
  );
}
