import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <h1>This this about AboutPage </h1>
      <Image
        src="https://images.pexels.com/photos/39390705/pexels-photo-39390705.jpeg"
        width={400}
        height={400}
        alt="image"
      ></Image>
      <Image src="/image.png" width={400} height={400} alt="image"></Image>
    </div>
  );
};

export default AboutPage;
