// pages/index.js
import React from "react";
import Head from "next/head";
import Image from "next/image";
import Slider from "react-slick";
import styles from "./styles/Home.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function leadership() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio Carousel</title>
        <meta
          name="description"
          content="Portfolio website with carousel slider"
        />
      </Head>

      {/* Projects Section */}
      <section id="leadership" className={styles.projects}>
        <h2>Leadership</h2>
        <div className={styles.projectCard}>
          <p>
            As a React developer with leadership experience, I bring technical
            expertise, project management skills...
          </p>
        </div>
        <div className={styles.projectCard1}>
          <Slider {...sliderSettings}>
            <div className={styles.sliderItem}>
              <Image
                src="/images/slide1.jpg"
                alt="Leadership 1"
                width={600}
                height={400}
              />
              <p>Leadership Project 1 Description</p>
            </div>
            <div className={styles.sliderItem}>
              <Image
                src="/images/slide2.jpg"
                alt="Leadership 2"
                width={600}
                height={400}
              />
              <p>Leadership Project 2 Description</p>
            </div>
            <div className={styles.sliderItem}>
              <Image
                src="/images/slide3.jpg"
                alt="Leadership 3"
                width={600}
                height={400}
              />
              <p>Leadership Project 3 Description</p>
            </div>
          </Slider>
        </div>
      </section>
    </div>
  );
}
