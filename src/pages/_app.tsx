import { type AppType } from "next/dist/shared/lib/utils";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "~/styles/globals.css";
import Preloader from "~/components/Preloader";

const MyApp: AppType = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(!loading), 8000);
  }, []);

  return (
    <>
      {!loading ? (
        <main className="flex min-h-screen flex-col items-center justify-center bg-[#141414]">
          {/* <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 4, duration: 2, ease: [0, 0.71, 0.2, 1.01] }}
            className="pb-4 text-5xl"
          >
            My name is Anthony, and this my portfolio.
          </motion.h1> */}
          <Preloader />
        </main>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
};

export default MyApp;
