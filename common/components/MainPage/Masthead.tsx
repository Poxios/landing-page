import Image from "next/image";
import React from "react";
import BgImg from '../../assets/img/header-bg.jpg'

const Masthead = () => {
  return (
    <header className="masthead">
      <Image
        layout="fill"
        className="object-center object-cover pointer-events-none"
        src={BgImg}
        alt={"Background Image"}
      />
      <div className="container">
        <div className="masthead-subheading">Welcome To Our Studio!</div>
        <div className="masthead-heading text-uppercase">It&apos;s Nice To Meet You</div>
        <a className="btn btn-primary btn-xl text-uppercase" href="#services">
          Tell Me More
        </a>
      </div>
    </header>
  );
};

export default Masthead;
