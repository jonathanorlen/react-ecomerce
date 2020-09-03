import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typhography from '@material-ui/core/Typography';

const useStyles = makeStyles({
     card: {
          maxWidth: 360
     },
     image: {
          height: 140
     },
     price: {
          lineHeight: 'normal'
     }
})
const ProductCard = ({ img, title, promoLabel, price, rating, sold, ProductId }) => {
     const classes = useStyles();

     return (
          <Card>
               <div className={classes.card}>
                    <CardMedia
                         className={classes.image}
                         image={img}
                         title={title}
                    />
                    <CardContent>
                         <Grid container direction="column">
                              <Typhography gutterBottom variant="subtitle" component="h2">
                                   {title}
                              </Typhography>
                              <Typhography variant="overline" className={classes.price}>
                                   {price}
                              </Typhography>
                         </Grid>
                    </CardContent>
               </div>
          </Card>
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