import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
}

export default function SEO({ title, description }: SEOProps) {
  const defaultTitle = 'Marketing Agency | Expert Digital Marketing Services';
  const defaultDescription = 'Grow your local business with our expert digital marketing, SEO, and social media services.';

  return (
    <Helmet>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
    </Helmet>
  );
}
