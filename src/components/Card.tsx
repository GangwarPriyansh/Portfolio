// import React, { PropsWithChildren } from "react";
// import grainImage from "@/assets/images/grain.jpg";
// import { twMerge } from "tailwind-merge";

// type CardProps = PropsWithChildren<{
//   className?: string;
// }>;

// export default function Card({ className, children }: CardProps) {
//   return (
//     <div
//       className={twMerge(
//         "bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none ",
//         className
//       )}
//     >
//       <div
//         className="absolute inset-0 -z-10 opacity-5"
//         style={{ backgroundImage: `url(${grainImage.src})` }}
//       >
//       </div>
//       {children}
//     </div>
//   );
// }

// 'use client';
// import React, { ComponentPropsWithRef } from "react";
// import grainImage from "@/assets/images/grain.jpg";
// import { twMerge } from "tailwind-merge";

// export default function Card = ({
//   className,
//   children,
//   ...other
// }: ComponentPropsWithRef<"div">) => {
//   return (
//     <div
//       className={twMerge(
//         "bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none",
//         className
//       )}
//       {...other}
//     >
//       <div
//         className="absolute inset-0 -z-10 opacity-5"
//         style={{ backgroundImage: `url(${grainImage.src})` }}
//       ></div>
//       {children}
//     </div>
//   );
// };


'use client';

import React, { ComponentPropsWithRef } from "react";
import grainImage from "@/assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";

export default function Card({
  className,
  children,
  ...other
}: ComponentPropsWithRef<"div">): JSX.Element {
  return (
    <div
      className={twMerge(
        "bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none",
        className
      )}
      {...other}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>
      {children}
    </div>
  );
}
