import { motion } from "framer-motion";

export default function Preloader() {
  return (
    <motion.svg
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ ease: "easeOut", duration: 8 }}
      width="348"
      height="342"
      viewBox="0 0 348 342"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.rect
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        x="26"
        y="78"
        width="298"
        height="186"
        fill="#141414"
        stroke="#1E1E1E"
        stroke-width="2"
      />
      <motion.rect
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
        x="129.186"
        y="2.04824"
        width="296"
        height="186"
        transform="rotate(43 129.186 2.04824)"
        fill="#141414"
        stroke="#1E1E1E"
        stroke-width="2"
      />
      <motion.rect
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ ease: "easeOut", duration: 3 }}
        x="266.08"
        y="26.3651"
        width="296"
        height="186"
        transform="rotate(90 266.08 26.3651)"
        fill="#141414"
        stroke="#1E1E1E"
        stroke-width="2"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ ease: "easeOut", duration: 4 }}
        d="M217.5 171C217.5 194.451 197.598 213.5 173 213.5C148.402 213.5 128.5 194.451 128.5 171C128.5 147.549 148.402 128.5 173 128.5C197.598 128.5 217.5 147.549 217.5 171Z"
        fill="#141414"
        stroke="#FB0303"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ ease: "easeOut", duration: 5 }}
        d="M167.952 164H161.906L169.759 140.727H177.247L185.099 164H179.054L173.588 146.591H173.406L167.952 164ZM167.145 154.841H179.781V159.114H167.145V154.841Z"
        fill="white"
      />
      <path
        d="M184.214 188.159H178.533C178.457 187.576 178.302 187.049 178.067 186.58C177.832 186.11 177.521 185.708 177.135 185.375C176.749 185.042 176.29 184.788 175.76 184.614C175.237 184.432 174.658 184.341 174.021 184.341C172.893 184.341 171.919 184.617 171.101 185.17C170.29 185.723 169.665 186.523 169.226 187.568C168.794 188.614 168.578 189.879 168.578 191.364C168.578 192.909 168.798 194.205 169.237 195.25C169.684 196.288 170.309 197.072 171.112 197.602C171.923 198.125 172.881 198.386 173.987 198.386C174.608 198.386 175.173 198.307 175.68 198.148C176.196 197.989 176.646 197.758 177.033 197.455C177.427 197.144 177.749 196.769 177.999 196.33C178.256 195.883 178.434 195.379 178.533 194.818L184.214 194.852C184.116 195.883 183.817 196.898 183.317 197.898C182.824 198.898 182.146 199.811 181.283 200.636C180.419 201.455 179.366 202.106 178.124 202.591C176.889 203.076 175.472 203.318 173.874 203.318C171.768 203.318 169.881 202.856 168.214 201.932C166.555 201 165.245 199.644 164.283 197.864C163.321 196.083 162.839 193.917 162.839 191.364C162.839 188.803 163.328 186.633 164.305 184.852C165.283 183.072 166.605 181.72 168.271 180.795C169.938 179.871 171.805 179.409 173.874 179.409C175.283 179.409 176.586 179.606 177.783 180C178.98 180.386 180.033 180.955 180.942 181.705C181.851 182.447 182.589 183.36 183.158 184.443C183.726 185.527 184.078 186.765 184.214 188.159Z"
        fill="#FB0303"
      />
      <motion.line
        initial="hidden"
        animate="visible"
        x1="206.336"
        y1="27.3706"
        x2="79.3356"
        y2="142.371"
        stroke="#FB0303"
      />
      <motion.line
        initial="hidden"
        animate="visible"
        x1="206.336"
        y1="12.37"
        x2="63.3363"
        y2="142.37"
        stroke="#FB0303"
      />
      <motion.line
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        x1="27"
        y1="247.5"
        x2="79"
        y2="247.5"
        stroke="#FB0303"
      />
      <motion.line
        initial="hidden"
        animate="visible"
        x1="301"
        y1="247.5"
        x2="325"
        y2="247.5"
        stroke="#FB0303"
      />
      <motion.line
        initial="hidden"
        animate="visible"
        x1="173.5"
        y1="214"
        x2="173.5"
        y2="323"
        stroke="#FB0303"
      />
    </motion.svg>
  );
}
