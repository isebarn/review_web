import { useRouter } from 'next/router';
import { useEffect } from 'react';
import '../../styles/main.css'
import Layout from "@/components/Layout";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  
  useEffect(()=>{
      router.push("/login")
  },[])
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
