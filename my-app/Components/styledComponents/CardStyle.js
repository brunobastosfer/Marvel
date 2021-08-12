import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    width: '350px',
    margin: '10px 20px',
    height: '400px',
    borderRadius: '16px',
  },
  media: {
    height: 140,
  },
  link: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'self-end',
    alignContent: 'flex-end',
  },
});