import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  text: {
    fontWeight: 'bold',
    marginLeft: 30
  }
});

const FooterComponent: React.FC = () => {
  const classes = useStyles();
  return (
    <div className="nav-container">
      <nav>
        <Typography className={classes.text} variant="h6" align="center">
          © BillyMRX
        </Typography>
      </nav>
    </div>
  );
};

export default FooterComponent;
