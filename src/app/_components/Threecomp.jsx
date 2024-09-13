"use client";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
export default function Threecomp() {
  const computer = useGLTF("/utilities/home2");
  return <div>three 3d comp</div>;
}
