import React from "react";
import Lottie from "react-lottie-player";

import lottieJson from "/public/animation.json";

export default function Animation() {
  return (
    <Lottie className="dark:opacity-95" loop animationData={lottieJson} play />
  );
}
