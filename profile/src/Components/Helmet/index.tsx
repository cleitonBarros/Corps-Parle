import { Helmet } from "react-helmet-async";

export default function helmet() {
  return (
    <Helmet>
      <meta name="language" content="pt-br" />
      <meta name="description" content="Cosps Parle - medicina para todos " />
      <meta
        name="keywords"
        content="corps parle, saude mental, saude fisica, nutrição, nutricionista, psicicologo, psicanalista, psiquiatria, fisioterapia"
      />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://corps-parle.vercel.app/" />
      <meta property="og:title" content="Corps Parle" />
      <meta
        property="og:description"
        content="Cosps Parle - medicina para todos"
      />
      <meta property="og:image" content="./../../assets/svg/logoname.svg" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://corps-parle.vercel.app/" />
      <meta property="twitter:title" content="Corps Parle" />
      <meta
        property="twitter:description"
        content="Cosps Parle - medicina para todos"
      />
      <meta
        property="twitter:image"
        content="./../../assets/svg/logoname.svg"
      />
    </Helmet>
  );
}
