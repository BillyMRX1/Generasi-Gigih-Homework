import Typography from '@material-ui/core/Typography';
import { Button, ButtonGroup, makeStyles } from '@material-ui/core';
import logo from '../../assets/spotify.png';
import './style.css';

const useStyles = makeStyles({
  textH4: {
    marginLeft: 10,
    fontWeight: 'bold'
  },
  navButtonGroup: {
    marginRight: 30
  }
});

const HeaderComponent: React.FC = () => {
  const classes = useStyles();
  const handleCreatePlaylist = () => {
    localStorage.getItem('token') === ' '
      ? alert('Login First!')
      : (window.location.href = '/create-playlist');
  };

  const handleMyPlaylist = () => {
    localStorage.getItem('token') === ' '
      ? alert('Login First!')
      : (window.location.href = '/my-playlist');
  };

  const handleProfile = () => {
    localStorage.getItem('token') === ' '
      ? alert('Login First!')
      : (window.location.href = '/profile');
  };
  return (
    <div className="nav-container">
      <nav>
        <div className="logo">
          <img src={logo} />
          <Typography className={classes.textH4} variant="h4">
            Spotify Clone
          </Typography>
        </div>
        <ButtonGroup
          className={classes.navButtonGroup}
          variant="contained"
          color="primary"
        >
          <Button onClick={handleCreatePlaylist}>Create Playlist</Button>
          <Button onClick={handleMyPlaylist}>My Playlist</Button>
          <Button onClick={handleProfile}>Profile</Button>
        </ButtonGroup>
      </nav>
    </div>
  );
};

export default HeaderComponent;
