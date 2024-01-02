import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'EverGreen plant shop',
  description: 'We sell the best and healthy products for cheap',
  keywords: 'plants, buy home decors, healty plants',
};

export default Meta;
