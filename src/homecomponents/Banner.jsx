import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "./NavBar";

function Banner() {
  return (
    <Container fluid className="bg-[#0C1051]">
      <NavBar />
      <div className="max-w-[1200px] m-auto flex py-3">
        <div className="flex flex-col gap-4">
          <span className="text-white font-extrabold text-5xl">
            PG Diploma in Data Science and Artificial Intelligence
          </span>
          <span className="text-white">
            A tailor-made program designed to meet the unique requirements of
            each learner. <br />
            <br />
            The 6-month online program provides comprehensive training in Data
            Science and Artificial Intelligence, enabling individuals from even
            non-IT backgrounds to develop their expertise.
          </span>
        </div>
        <div>
          <div>
            <img
              src="https://ad.airtics.org/wp-content/uploads/2023/11/banner-image-min.png"
              alt=""
              className="max-w-[580px] h-[379px]"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Banner;
