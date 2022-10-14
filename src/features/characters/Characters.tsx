import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import {useGetCharactersQuery, Character} from './characterApi';
import CharacterCard from './CharacterCard';
import CharacterDialog from './CharacterDialog';

const initCharacterDialog: {
    open: boolean,
    character: Character | undefined
} = {
    open: false,
    character: undefined
};

export default function Characters() {
    const [page, setPage] = React.useState(1)
    const {data, isLoading, isFetching} = useGetCharactersQuery({page});
    const [characterDialog, setCharacterDialog] = React.useState(initCharacterDialog);
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (!(data?.characters)) {
        return <div>No characters :(</div>
    }
    const characters = data.characters.results;
    const totalPages = Math.ceil(data.characters.info.count / 20);
    const changePageHandeler = (event: React.ChangeEvent<unknown>, value: number): void => setPage(value)
    const openDialogHandler = (event: React.MouseEvent<HTMLImageElement, MouseEvent>, character: Character) => setCharacterDialog(_ => ({
        open: true,
        character: character
    }))

    return (
        <>
            <Container sx={{py: 2}} maxWidth="lg">
                {/* End hero unit */}
                <Box style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Pagination count={totalPages}
                                variant="outlined" shape="rounded"
                                onChange={changePageHandeler}
                                disabled={isFetching}/>
                </Box>

                {(isFetching || isLoading) && <Backdrop sx={{color: '#fff'}} open={isFetching}> <CircularProgress/></Backdrop>}

                <Box>{`${page} / ${totalPages}`}</Box>

                <Grid container spacing={4}>
                    {characters.map((character) => (
                        <Grid item key={character.id} xs={12} sm={6} md={3}>
                            <CharacterCard character={character} openDialog={openDialogHandler}/>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {(characterDialog.open) && <CharacterDialog
                closeDialog={() => setCharacterDialog(_ => ({open: false, character: undefined}))}
                character={characterDialog.character}/>}
        </>
    );
}