"use client";

import "./[...not_found]/notFound.scss";

import notFound from "../../public/images/imgs/not_found/Group 18637.png";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="not_found">
      <div className="container_all">
        <div className="content">
          <div className="image">
            <img src={notFound.src} alt="not_found" />
          </div>
          <div className="text">
            <p>
              Sorry, the page you’re looking for doesn’t exist. If you think
              something is broken, report a porblem
            </p>
          </div>
          <button className="button_back" onClick={() => router.push("/")}>Go To Home</button>
        </div>
      </div>
    </div>
  );
}
