import * as React from 'react';
import {Character} from "./characterApi";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

export interface CharacterCardProps {
    character: Character,

    openDialog?(event: React.MouseEvent<HTMLImageElement, MouseEvent>, character: Character): void | undefined
}

export function CharacterInfo({name, value}: { name: string, value: string }) {
    return <Box>
        <Typography variant='body2' component={'span'}>{name}</Typography>
        <Typography variant='body1' style={{float: 'right'}} component={'span'}>{value}</Typography>
    </Box>
}

export default function CharacterCard(props: CharacterCardProps) {
    const {name, gender, image, status, species} = props.character;
    return (<Card sx={{height: '100%', display: 'flex', flexDirection: 'column'}}>
        <CardMedia
            component="img"
            image={image}
            alt="random"
            style={{'cursor': 'pointer'}}
            onClick={(event) => props.openDialog ? props.openDialog(event, props.character) : ''}
        />
        <CardContent sx={{flexGrow: 1}}>
            <Typography gutterBottom variant="h6" component="h3">
                {name}
            </Typography>
            <Stack direction="column" justifyContent="flex-start" alignItems="stretch" spacing={0}>
                <CharacterInfo name='Gender' value={gender}/>
                <CharacterInfo name='Status' value={status}/>
                <CharacterInfo name='Species' value={species}/>
            </Stack>
        </CardContent>
    </Card>)
}