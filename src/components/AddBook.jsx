import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

function AddBook(props) {
  const [book, setBook] = useState({title: '', author: '', year: '', isbn: '', price: ''})
  const [open, setOpen] = useState(false);

  const handleInput = (event) => {
    setBook({...book, [event.target.name]: event.target.value});
  }

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setBook({title: '', author: '', year: '', isbn: '', price: ''})
    setOpen(false);
  }

  const handleSave = () => {
    const bookToSave = {
      ...book,
      price: Number(book.price.replace(',', '.'))
    }

    props.addBook(bookToSave);
    handleClose();
  }

  return(
    <>
      <Button sx={{ m: 1 }} variant="outlined" size='large' onClick={handleOpen}>Add Book</Button>
      <Dialog open={open} onClose={handleClose} disableRestoreFocus>
        <DialogTitle>New Book</DialogTitle>
        <DialogContent>
          <TextField
            name="title"
            value={book.title}
            label="Title"
            onChange={handleInput}
            margin="dense"
            fullWidth
          />
          <TextField
            name="author"
            value={book.author}
            label="Author"
            onChange={handleInput}
            margin="dense"
            fullWidth
          />
          <TextField
            name="year"
            value={book.year}
            label="Year"
            onChange={handleInput}
            margin="dense"
            fullWidth
          />
          <TextField
            name="isbn"
            value={book.isbn}
            label="Isbn"
            onChange={handleInput}
            margin="dense"
            fullWidth
          />
          <TextField
            name="price"
            value={book.price}
            label="Price"
            onChange={handleInput}
            margin="dense"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default AddBook;