import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typhography from '@material-ui/core/Typography';

import PromoLabel from '../PromoLabel';
import ProductRating from '../ProductRating';

import {currencyFormatter} from '@utils/currency';

const useStyles = makeStyles({
     card: {
          maxWidth: 360
     },
     image: {
          height: 140
     },
     price: {
          lineHeight: 'normal'
     },
     relative: {
          position: 'relative'
     },
     promoLabel: {
          position: 'absolute',
          bottom: 6,
          left: 4
     }
})
const ProductCard = ({ img, title, promoLabel, price, rating, sold, productId }) => {
     const classes = useStyles();

     return (
          <Link href="product/[id]" as={`product/${productId}`}>
          <Card>
               <div className={classes.card}>
                    <div className={classes.relative}>
                    <CardMedia
                         className={classes.image}
                         image={img}
                         title={title}
                    />
                    <div className={classes.promoLabel}>
                         <PromoLabel promoLabel={promoLabel}/>
                    </div>
                    </div>
                    <CardContent>
                         <Grid container direction="column">
                              <Typhography gutterBottom variant="subtitle" component="h2">
                                   {title}
                              </Typhography>
                              <Typhography variant="overline" className={classes.price}>
                                   {currencyFormatter(price)}
                              </Typhography>
                              <ProductRating rating={rating} sold={sold}/>
                         </Grid>
                    </CardContent>
               </div>
          </Card>
          </Link>
     )
}

ProductCard.propTypes = {
     img: PropTypes.string.isRequired,
     title: PropTypes.string.isRequired,
     promoLabel: PropTypes.array.isRequired,
     price: PropTypes.number.isRequired,
     rating: PropTypes.number,
     sold: PropTypes.number,
     productId: PropTypes.number.isRequired
}

export default ProductCard