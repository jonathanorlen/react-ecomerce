import Layout from '../modules/common/components/Layout';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import ProductCard from '../modules/common/components/ProductCard'

const HomePage = ({ products }) => {
  const { list } = products;
  return (
    <Layout>
      <Container maxWidth="sm">
        <Grid container spacing={2}>
          {list.map((product, index) => {
            return (
              <Grid key={product.id} item xs={6} sm={6}>
                <ProductCard
                  ProductId={product.id}
                  img={product.img}
                  title={product.name}
                  promoLable={product.promo}
                  price={product.price}
                  rating={product.rating}
                  sold={product.sold}
                />
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/products');
  const products = await res.json();

  return {
    props: {
      products
    }
  }
}

export default HomePage