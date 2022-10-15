import * as React from 'react';
import {
    Button
    , Grid
    , Dialog
    , DialogTitle
    , DialogContent
    , CardMedia
    , Box
    , Stack
    , CircularProgress
    , DialogActions
    , Alert
} from '@mui/material';

import {Character, useGetCharacterByIdQuery} from "./characterApi";
import {CharacterInfo} from './CharacterCard';
import CharacterEpisodes from './CharacterEpisodes';


export interface CharacterDialogProps {
    character?: Character,

    closeDialog?(): void
}

export default function CharacterDialog({character, closeDialog}: CharacterDialogProps) {
    const {data, isLoading,isError} = useGetCharacterByIdQuery({ids: character?.id});

    if(isError){
        return <Alert severity="error">Something goes wrong</Alert>
    }

    if (!character) return <></>;
    const {name, image, gender, status, species, location} = character;

    return (
        <React.Fragment>
            <Dialog
                fullWidth={true}
                maxWidth={'md'}
                open={true}
                onClose={closeDialog}
            >
                <DialogTitle bgcolor={'main'}>{name}</DialogTitle>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <CardMedia
                                component="img"
                                image={image}
                                alt="random"
                                style={{'cursor': 'pointer'}}
                            />

                            <Stack direction="column" mt={2} justifyContent="flex-start" alignItems="stretch"
                                   spacing={0}>
                                <CharacterInfo name='Gender' value={gender}/>
                                <CharacterInfo name='Status' value={status}/>
                                <CharacterInfo name='Species' value={species}/>
                                <CharacterInfo name='Dimension' value={location.dimension}/>
                                <CharacterInfo name='Location' value={location.name}/>
                            </Stack>
                        </Grid>
                        <Grid item xs={8} my={'auto'}>
                            {!isLoading && <CharacterEpisodes episodes={data?.charactersByIds[0]?.episode}/>}
                            {isLoading && <Box sx={{'width': '100%', textAlign: 'center'}}><CircularProgress/></Box>}
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeDialog}>Close</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}