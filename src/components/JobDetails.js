import LiIcon from "@/components/Lilcon";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const JobDetails = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
  imageLink,
}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="flex flex-row items-center w-full gap-6"
      >
        {/* Conditionally render the image */}
        {imageLink && (
          <Image
            src={imageLink}
            alt={`${company} logo`}
            className="flex-shrink-0 min-w-20 min-h-20 rounded-lg object-cover"
            width={400}
            height={200}
            loading="lazy"
          />
        )}
        <div className="flex flex-col items-start w-full">
          <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
            {position}&nbsp;
            <a
              href={companyLink}
              target="_blank"
              className="text-primary dark:text-primaryDark capitalize"
            >
              @{company}
            </a>
          </h3>
          <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
            {time} | {address}
          </span>
          <p className="font-medium w-full md:text-sm">{work}</p>
        </div>
      </motion.div>
    </li>
  );
};

export default JobDetails;
