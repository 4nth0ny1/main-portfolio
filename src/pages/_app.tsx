import { type AppType } from "next/dist/shared/lib/utils";
import React, { useEffect, useState } from "react";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(!loading), 2000);
  }, []);

  return <>{!loading ? "Loading" : <Component {...pageProps} />}</>;
};

export default MyApp;
