import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';

import { useStyles } from './styledComponents/CardStyle';

const Cards = ({ character }) => {
  const classes = useStyles()

  const { name } = character
  const { thumbnail } = character

  console.log(character)

  const urlThumb = thumbnail.path + '.' + thumbnail.extension

  return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={urlThumb}
            title={'Imagem do:' + name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {
                !character.description 
                  ?<span>Não temos muitas informações :(</span>
                  : <span>{character.description}</span>
                }
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.link}>
          <Button size="small" color="primary" href="/">
            <Link href={{
              pathname: '/info/id',
              query: {
                id: character.id,
              },
            }}
            >
              Mais informações
            </Link>
          </Button>
        </CardActions>
      </Card>
  )
}

export default Cards