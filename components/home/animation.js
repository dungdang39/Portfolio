import React from "react";
import Lottie from "react-lottie-player";

import lottieJson from "/public/animation.json";

export default function Animation() {
  return <Lottie className="opacity-90" loop animationData={lottieJson} play />;
}
