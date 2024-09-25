// import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import { Box, IconButton, InputBase, Paper } from "@mui/material";
import { useState, useEffect, cloneElement, Fragment, forwardRef } from 'react';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import {Link} from "react-router-dom";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import InfoIcon from '@mui/icons-material/Info';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
      title: 'The Lord of the Rings: The Return of the King',
      year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      year: 2001,
    },
    {
      title: 'Star Wars: Episode V - The Empire Strikes Back',
      year: 1980,
    },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    {
      title: 'The Lord of the Rings: The Two Towers',
      year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    {
      title: 'Star Wars: Episode IV - A New Hope',
      year: 1977,
    },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    {
      title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
      year: 1964,
    },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },
    { title: 'American Beauty', year: 1999 },
    { title: 'The Dark Knight Rises', year: 2012 },
    { title: 'Princess Mononoke', year: 1997 },
    { title: 'Aliens', year: 1986 },
    { title: 'Oldboy', year: 2003 },
    { title: 'Once Upon a Time in America', year: 1984 },
    { title: 'Witness for the Prosecution', year: 1957 },
    { title: 'Das Boot', year: 1981 },
    { title: 'Citizen Kane', year: 1941 },
    { title: 'North by Northwest', year: 1959 },
    { title: 'Vertigo', year: 1958 },
    {
      title: 'Star Wars: Episode VI - Return of the Jedi',
      year: 1983,
    },
    { title: 'Reservoir Dogs', year: 1992 },
    { title: 'Braveheart', year: 1995 },
    { title: 'M', year: 1931 },
    { title: 'Requiem for a Dream', year: 2000 },
    { title: 'Amélie', year: 2001 },
    { title: 'A Clockwork Orange', year: 1971 },
    { title: 'Like Stars on Earth', year: 2007 },
    { title: 'Taxi Driver', year: 1976 },
    { title: 'Lawrence of Arabia', year: 1962 },
    { title: 'Double Indemnity', year: 1944 },
    {
      title: 'Eternal Sunshine of the Spotless Mind',
      year: 2004,
    },
    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },
    { title: 'Logan', year: 2017 },
    { title: 'Full Metal Jacket', year: 1987 },
    { title: 'Dangal', year: 2016 },
    { title: 'The Sting', year: 1973 },
    { title: '2001: A Space Odyssey', year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: 'Toy Story', year: 1995 },
    { title: 'Bicycle Thieves', year: 1948 },
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 },
  ];

function Home() {
    const [dense, setDense] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [secondary, setSecondary] = useState(true);
    const [nombre, setNombre] = useState('');
    const [autor, setAutor] = useState('');
    const [linkVideo, setLinkVideo] = useState('');
    const [linkSpotify, setLinkSpotify] = useState('');
    const [linkAcordes, setLinkAcordes] = useState('');
    const [letra, setLetra] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeNombre = (event) => {
        setNombre(event.target.value);
    };

    const handleChangeAutor = (event) => {
        setAutor(event.target.value);
    };

    const handleChangeLinkVideo = (event) => {
        setLinkVideo(event.target.value);
    };
    
    const handleChangeLinkSpotify = (event) => {
        setLinkSpotify(event.target.value);
    };
    const handleChangeLinkAcordes = (event) => {
        setLinkAcordes(event.target.value);
    };
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleChangeLetra = (event) => {
        setLetra(event.target.value);
    };

    function generate(element) {
        return [0, 1, 2].map((value) =>
          cloneElement(element, {
            key: value,
          }),
        );
      }

    //enviarlos al context
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("======== Escribes y buscas:", searchTerm, "======== "); // Modifica esta línea
    };

    const [open, setOpen] = useState(false);
    const [openConfirmacion, setOpenConfirmacion] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClickOpenConfirmacion = () => {
        setOpenConfirmacion(true);
    };

    const handleCloseConfirmacion = () => {
        setOpenConfirmacion(false);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const agregarCancion = ()=>{
        if(nombre == "" || autor == "" || linkVideo == "" || linkSpotify == "" || linkAcordes == "" || letra == ""){
            alert("faltan datos");
            return;
        }
        const canciones = localStorage.getItem('canciones');
        var cancionesJson = [];

        if (canciones != null) {
            cancionesJson = JSON.parse(localStorage.getItem('canciones'));
        }

        cancionesJson.push(
            {
                "version": 1.0,
                "nombre": nombre,
                "autor": autor,
                "linkVideo": linkVideo,
                "linkSpotify": linkSpotify,
                "linkAcordes": linkAcordes,
                "letra": letra,
            }
        );

        localStorage.setItem('canciones', JSON.stringify(cancionesJson));
        setNombre("");
        setAutor("");
        setLinkVideo("");
        setLinkSpotify("");
        setLinkAcordes("");
        setLetra("");

        handleCloseConfirmacion();
        handleClose();
        
    }

    return (<>
        <Fragment>
            <Dialog
                open={openConfirmacion}
                onClose={handleCloseConfirmacion}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                {"Confimacion"}
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    ¿Realmente quieres agregar esta cancion?
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleCloseConfirmacion}>Cancelar</Button>
                <Button onClick={agregarCancion} autoFocus>Aceptar</Button>
                </DialogActions>
            </Dialog>


            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                <Toolbar>
                    <IconButton
                    edge="start"
                    color="inherit"
                    onClick={handleClose}
                    aria-label="close"
                    >
                    <CloseIcon />
                    </IconButton>
                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                        Agregar Cancion
                    </Typography>
                    <Button autoFocus color="inherit" onClick={handleClickOpenConfirmacion}>
                        save
                    </Button>
                </Toolbar>
                </AppBar>
                <Stack spacing={3} sx={{padding:"20px"}}>
                    <TextField value={nombre} onChange={handleChangeNombre} id="nombre-cancion" label="Nombre" variant="standard" />
                    <TextField value={autor} onChange={handleChangeAutor} id="autor-cancion" label="Autor" variant="standard" />
                    <TextField value={linkVideo} onChange={handleChangeLinkVideo} id="video-cancion" label="Link del video" variant="standard" />
                    <TextField value={linkSpotify} onChange={handleChangeLinkSpotify} id="spotify-cancion" label="Link de spotify" variant="standard" />
                    <TextField value={linkAcordes} onChange={handleChangeLinkAcordes} id="acordes-cancion" label="Link de acordes" variant="standard" />
                    <Box sx={{ width: '100%', margin: '0 auto' }}>
                        <TextField
                            label="Letra de la cancion"
                            multiline
                            rows={10} // Cantidad de líneas visibles
                            value={letra}
                            onChange={handleChangeLetra}
                            variant="outlined" // Puedes cambiar a "filled" o "standard"
                            fullWidth // Hace que ocupe todo el ancho disponible
                        />
                    </Box>
                    {/* <TextField value={password} onChange={handleChangePassword} id="password" label="Contraseña" type={'password'} variant="standard"/> */}
                </Stack>
            </Dialog>
        </Fragment>
        <Stack spacing={3} sx={{padding:"20px"}}>
            <Autocomplete
                multiple
                id="tags-standard"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                defaultValue={[top100Films[13]]}
                renderInput={(params) => (
                    <TextField
                    {...params}
                    variant="standard"
                    label="Multiple values"
                    placeholder="Favorites"
                    />
                )}
            />

            <Paper
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', borderRadius: '30px'
                    , bgcolor: 'grey.900'
                }}
            >
                <IconButton type="button" sx={{ p: '10px', color: 'background.default' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1, color: 'background.default' }}
                    placeholder="Search something!"
                    inputProps={{ 'aria-label': 'search google maps' }}
                    value={searchTerm} // Agrega esta línea
                    onChange={e => setSearchTerm(e.target.value)} // Agrega esta línea
                />
            </Paper>

            <List dense={dense}>
              {generate(
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <InfoIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <MusicNoteIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>,
              )}
            </List>
            <Box sx={{display: "flex", justifyContent: "center"}}>
                <IconButton edge="end" aria-label="delete" onClick={handleClickOpen}>
                    <AddCircleIcon fontSize='large'/>
                </IconButton>
            </Box>
            <Link to="/cancion?canciones=yolo"> Canciones </Link>
        </Stack>
        
    </> );
}

export default Home;