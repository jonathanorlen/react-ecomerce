import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
     container: {
          marginTop: theme.spacing(2)
     },
     heading: {
          fontSize: theme.typography.pxToRem(15),
          fontWeight: theme.typography.fontWeightRegular,
     }
}))

const ProductInfoPanel = () => {
     const classes = useStyles();

     return (
          <div className={classes.container}>
               <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>} aria-controls="panelia-content" id="panelia-heading">
                    <Typography className={classes.heading}>
                         Product Info 1
                    </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                         <Typography>
                              Lorem Ipsum
                         </Typography>
                    </ExpansionPanelDetails>
               </ExpansionPanel>
          </div>
     )
}

export default ProductInfoPanel;
