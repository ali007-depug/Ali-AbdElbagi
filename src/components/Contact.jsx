import { Fragment } from "react";

export default function Contact() {
  const socialLinks = [
      { src: "github.webp", name: "GitHub",link:"https://github.com/ali007-depug" },
    { src: "linkedIn.webp", name: "LinkedIn",link:"https://www.linkedin.com/in/ali-abdelbagi-02313b223/"  },
    { src: "x.webp", name: "X",link:"https://x.com/AAbuel3iz?t=CuBNSxHRhlU9fmVw9JExdQ&s=09" },
    { src: "insta.webp", name: "instagram" ,link:"https://www.instagram.com/ali_abdelbagi?utm_source=qr&igsh=NnRsaHc2eDdoNDBz"},
    { src: "facebook.webp", name: "facebook" , link :"https://www.facebook.com/ali.abdelbagiali.3" },
  ];

  const icons = socialLinks.map((social, index) => {
    return (
      <Fragment key={index}>
        <a href={social.link} title={social.name} target="_blank">
          <img src={social.src} alt={social.name} />
        </a>
      </Fragment>
    );
  });
  return (
    <footer
      className="bg-bg-color flex items-center flex-col mt-10 pb-10"
      id="contact"
      role="contentinfo"
    >
      <img
        className="rounded-full w-30 my-10"
        src="me3.webp"
        alt="author image"
      />
      <h2 className="text-p-color font-bold text-3xl ">Finally , This Is Me!</h2>

      <div className="Links flex gap-4 mt-10">{icons}</div>
    </footer>
  );
}
