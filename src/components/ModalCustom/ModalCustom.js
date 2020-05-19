import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

// import DialogActions from "@material-ui/core/DialogActions";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles({
    paper: {
      // height:'100%'
    },
    
  });
  

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  title: {
    color: "#000"
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography className={classes.title} variant="h3">
        {children}
      </Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    overflowX: 'hidden'
  }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);

const ModalCustom = props => {

    const classes = useStyles();
    const {children, title, submit, open, close, actions, backDrop, width} = props
  
  return (
    <div>
      <Dialog
        fullWidth={true}
        disableBackdropClick={backDrop}
        maxWidth={width}
        onClose={close}
        aria-labelledby="simple-modal-title"
        open={open}
        classes={{paper:classes.paper}}
      >
        <DialogTitle id="simple-modal-title" onClose={close}>
          {title}
        </DialogTitle>
        <DialogContent dividers>{children}</DialogContent>
        {actions ? (
          <DialogActions>
            <Button autoFocus onClick={submit} color="primary">
              Submit
            </Button>
          </DialogActions>
         ) : ''} 
      </Dialog>
    </div>
  );
};

export default ModalCustom;
