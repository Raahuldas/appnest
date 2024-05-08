import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import {
  FaLinkedin,
  FaSquareInstagram,
  FaThreads,
  FaYoutube,
} from "react-icons/fa6";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoMailOutline } from "react-icons/io5";
import { SlPhone } from "react-icons/sl";
import { TfiWorld } from "react-icons/tfi";
function CopyRight() {
  return (
    <div class="p-5 pb-0 text-center">
      <div className="container mx-auto">
        <div class="row mx-auto align-items-center g-5 px-3 pb-5">
          <div class="col-12 col-sm-12 col-lg-8 ">
            <div className="w-50">
              <img
                src="/images/nav-logo.png"
                alt="logo"
                className="w-100 h-100 object-fit-conatain"
              />
              <div className="social-icons-css d-flex fs-3">
                <a
                  href="https://in.linkedin.com/company/appnestit"
                  target="blank"
                  className="mx-1"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61556775867975&mibextid=kFxxJD"
                  target="blank"
                  className="mx-1"
                >
                  <FaFacebookSquare />
                </a>
                <a
                  href="https://www.instagram.com/appnestit?igsh=ZHpla3AwYmdhNjFm"
                  target="blank"
                  className=" insta-css mx-1"
                >
                  <FaSquareInstagram />
                </a>
                <a
                  href="https://www.threads.net/@appnestit"
                  target="blank"
                  className="text-dark mx-1"
                >
                  <FaThreads />
                </a>
                <a
                  href="https://youtube.com/@AppNestit?si=ybmJ3KeM0_9_4HRZ"
                  target="blank"
                  className="youtube-css mx-1"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-lg-4 mt-0 px-0 partners-box-css text-start mt-3 ms-4 ms-lg-0 ">
            <div className="ms-lg-auto contact-container-css">
              <div className="my-2">
                <SlPhone /> +91 9148054905
              </div>
              <div className="my-2">
                <IoMailOutline /> care@appnestit.com
              </div>
              <div className="my-2">
                <TfiWorld /> www.appnestit.com
              </div>
            </div>
          </div>
        </div>

        <p className="lead fw-medium">
          <HiOutlineBuildingOffice2 /> Office Address : S.No, ALPINE VIVA, 139,
          Whitefield - Hoskote Rd, Sai Gardens, Seegehalli, Krishnarajapura,
          Bengaluru, Karnataka, 560067
        </p>
        <p className="fw-medium">
          COPYRIGHT &copy; 2024 - AppNest Information Technology Private
          Limited, India &#x2022;{" "}
          <span className="fw-light">
            {" "}
            <a href="/docs/disclaimer.pdf" className="hover-red  docs-link-css">
              Privacy{" "}
            </a>{" "}
            &#x2022; <a href="/docs/disclaimer.pdf" className="hover-red docs-link-css">Terms </a> &#x2022;{" "}
            <a href="/docs/disclaimer.pdf" className="hover-red docs-link-css">Cancellation & Refund </a>{" "}
            &#x2022;
            <a href="/docs/disclaimer.pdf" className="hover-red docs-link-css">
              Declaration{" "}
            </a>
          </span>{" "}
        </p>
      </div>
    </div>
  );
}

export default CopyRight;
