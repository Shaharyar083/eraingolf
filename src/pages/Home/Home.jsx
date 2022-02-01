import React from "react";
import hero from "../../assets/hero.png";
import arrow from "../../assets/arrow1.png";

import crypto from "../../assets/crypto.png";
import credit from "../../assets/credit.png";
import crypto1 from "../../assets/crypto1.png";
import credit1 from "../../assets/credit1.png";

import Oldest from "../../assets/Oldest.png";

import discord from "../../assets/discord.png";
import "./home.scss";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="hero-img">
          <img src={hero} alt="" />
        </div>

        <div className="content">
          <div className="main">
            <div className="title">
              A new <span style={{ color: "#F47F36" }}>erain</span> golf
            </div>

            <div className="para">
              LinksDAO is creating the modern golf & leisure club. A global
              community of thousands of enthusiasts has come together to create
              one of the world's greatest golf clubs - and reimagine the country
              club.
            </div>
          </div>
        </div>

        <div className="arrow">
          <img src={arrow} alt="" />
        </div>
      </div>

      <div className="membership">
        <div className="para">
          Memberships are sold out.
          <br /> You can purchase on secondary.
        </div>

        <div className="btn-buy">Buy on Opensea</div>
      </div>

      <div className="card-section">
        <div className="card-wrap">
          <div className="card-img"></div>

          <div className="card-content">
            <div>
              <div className="title">Crypto</div>

              <img src={crypto} alt="" />

              <div className="btn-buy">Buy Now</div>
            </div>

            <div>
              <div className="title">Credit Card</div>

              <img src={credit} alt="" />

              <div className="coming">Coming Soon</div>
            </div>
          </div>
        </div>

        <div className="card-wrap card-wrap2-color">
          <div className="card-img"></div>

          <div className="card-content">
            <div>
              <div className="title">Crypto</div>

              <img src={crypto1} alt="" />

              <div className="btn-buy">Buy Now</div>
            </div>

            <div>
              <div className="title">Credit Card</div>

              <img src={credit1} alt="" />

              <div className="coming">Coming Soon</div>
            </div>
          </div>
        </div>
      </div>

      <div className="faq-section">
        <div className="title">FAQ</div>

        <div className="sub">What’s an NFT?</div>

        <div className="para">
          An NFT stands for “Non-fungible token” and is a fancy way of saying
          it’s a unique, one-of-a-kind digital item that users can buy, own, and
          trade. Some NFTs main functions are to be digital art and look cool,
          some offer additional utility. Think of ours like a rare piece of art
          that can also act as a “members” card which gets you access to
          members-only perks.{" "}
        </div>
      </div>

      <div className="about-section">
        <div className="content">
          <div className="title">About Us</div>

          <div className="para">
            Our Discord community is filled with golfers and leisure enthusiasts
            of all skill levels - from tour professionals to weekend warriors to
            friends brand-new to golf! The Discord will be your portal to DAO
            activity. And you can share your gear, stories and arrange tee
            times, and more with other community members.Our Discord community
            is filled with golfers and leisure enthusiasts of all skill levels -
            from tour professionals to weekend warriors to friends brand-new to
            golf! The Discord will be your portal to DAO activity. And you can
            share your gear, stories and arrange tee times, and more with other
            community members.Our Discord community is filled with golfers and
            leisure enthusiasts of all skill levels - from tour professionals to
            weekend warriors to friends brand-new to golf! The Discord will be
            your portal to DAO activity. And you can share your gear, stories
            and arrange tee times, and more with other community members.
          </div>
        </div>

        <div className="image">
          <img src={Oldest} alt="" />
        </div>
      </div>

      <div className="join-section">
        <div className="title">
          Join the <span style={{ color: "#626ff3" }}>Clubhouse</span>
        </div>
        <div className="para">
          Our Discord community is filled with golfers and leisure enthusiasts
          of all skill levels - from tour professionals to weekend warriors to
          friends brand-new to golf! The Discord will be your portal to DAO
          activity. And you can share your gear, stories and arrange tee times,
          and more with other community members.
        </div>

        <div className="btn-join">
          <img src={discord} alt="" />
          <span>Join Our Discord</span>
        </div>
      </div>
    </>
  );
};

export default Home;
