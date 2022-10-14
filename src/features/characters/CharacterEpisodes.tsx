

import {Episode} from './characterApi'
import { DataGrid, GridColDef } from '@mui/x-data-grid';


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID',flex:1},
    { field: 'name', headerName: 'Episode name',flex:3},
    { field: 'air_date', headerName: 'Air date',flex:2}
];


export default function CharacterEpisodes({episodes}:{episodes:Episode[] | undefined}){
    return <>
    <div style={{ height: 450, width: '100%' }}>
      <DataGrid
        rows={episodes || []}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
      />
    </div>
</>
}