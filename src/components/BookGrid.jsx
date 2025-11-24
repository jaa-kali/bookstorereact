import { DataGrid } from "@mui/x-data-grid";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';


function BookGrid(props) {
  const columns = [
    { field: 'title', headerName: 'Title', flex: 1 },
    { field: 'author', headerName: 'Author', flex: 0.8 },
    { field: 'year', headerName: 'Year', width: 100 },
    { field: 'isbn', headerName: 'Isbn', width: 200 },
    { field: 'price', headerName: 'Price', type: 'number', width: 100 },
    { field: 'actions',
      headerName: '',
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <Tooltip title="Delete">
          <IconButton size="small" color="error" onClick={() => props.deleteBook(params.row.id)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      )
    }
  ]

  return(
    <>
      <div style={{height: 400, width: '100%', margin: '0 auto'}}>
        <DataGrid rows={props.books} columns={columns} disableRowSelectionOnClick />
      </div>
    </>
  )
}

export default BookGrid;