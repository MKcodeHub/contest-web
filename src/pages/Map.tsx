import { useState } from "react";
import { useRouter } from "next/navigation";
import { mapData, type DistrictData } from "./mapData";

export const Map = () => {
  return (
    <div className="h-screen overflow-scroll">
      <svg
        className="mx-auto my-10 h-screen max-w-4xl pl-20"
        viewBox="0 0 800 656"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter>
            <feGaussianBlur in="SourceAlpha" stdDeviation="10"></feGaussianBlur>
            <feOffset dx="0" dy="0" result="offsetblur"></feOffset>
            <feMerge>
              <feMergeNode></feMergeNode>
              <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
          </filter>
          <filter>
            <feGaussianBlur
              in="SourceAlpha"
              stdDeviation="1.4"
            ></feGaussianBlur>
            <feOffset dx="1" dy="1" result="offsetblur"></feOffset>
            <feMerge>
              <feMergeNode></feMergeNode>
              <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
          </filter>
        </defs>
        <g>
          {mapData.map((d) => {
            const randomNumber = Math.floor(Math.random() * 140);
            return (
              <District
                key={d.id + "_polygon"}
                data={{ ...d, density: randomNumber }}
              />
            );
          })}
          {mapData.map((data) => {
            return (
              <text
                key={data.id + "_text"}
                stroke={"white"}
                fill={"white"}
                strokeLinecap="round"
                strokeWidth="1"
                z="100"
                x={Number(data.x) - 25}
                y={Number(data.y)}
                style={{ pointerEvents: "none" }}
              >
                {data.district}
              </text>
            );
          })}
        </g>
      </svg>
    </div>
  );
};
const densityToColor = (density: number, lightness: number) =>
  `hsl(${140 - density} 50% ${lightness}%)`;
const District = ({ data }: { data: DistrictData }) => {
  const [hovered, setHovered] = useState(false);
  const router = useRouter();

  return (
    <g style={{ cursor: "pointer" }}>
      <path
        onClick={() => {
          router.push(`/district/${data.id}`);
        }}
        z="-1"
        fill={densityToColor(data.density, hovered ? 30 : 50)}
        stroke={"black"}
        strokeWidth="4"
        d={data.d}
        onMouseOver={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
      />
    </g>
  );
};
