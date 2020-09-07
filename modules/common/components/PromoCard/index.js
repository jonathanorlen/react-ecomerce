import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyle = makeStyles((theme) => ({
     root: {
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
     }
}))
const PromoCard = ({promo}) => {
     const classes = useStyle();
     const prettyPromoLabel = (promo) => {
          let res;

          switch (promo) {
               case 'CASHBACK':
                    res = 'Cashback';
               break
               case 'FREESHIPPING':
                    res = 'Free Shipping'
               break
               default:
                    res = 'Invalid Label';
               break
          }

          return res;
     }

     const breakPoints = promo.length > 1 ? 6 : 12;

     if(promo.length > 0) {
          return(
               <Grid container spacing={1}>
               {
               promo.map((prm, index) => {
                    return (
                         <Grid item xs={breakPoints} sm={breakPoints} key={index}>
                              <Paper variant="outlined" classes={{root:classes.root}}>
                                   <Typography>
                                        {prettyPromoLabel(prm)}
                                   </Typography>
                              </Paper>
                         </Grid>
                    )
               })
               }
               </Grid>
          )
     }else {
          return null
     }
}

PromoCard.propTypes = {
     promo: PropTypes.array.isRequired
}

export default PromoCard;