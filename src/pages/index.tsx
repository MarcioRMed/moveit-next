import Head from 'next/head' // link para as fonts externa 

import { ExperienceBar } from "../components/ExperienceBar";


export default function Home() {
  return (
    <div className='container'>
    
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" /*crossorigin*/ />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
    </Head>

    <ExperienceBar />
     
    </div>

  )
}
