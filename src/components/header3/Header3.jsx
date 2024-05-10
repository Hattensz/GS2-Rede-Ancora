import { IconButton, InputAdornment, TextField } from '@mui/material';
import { ShoppingCart as ShoppingCartIcon } from '@mui/icons-material';
import { Search as SearchIcon, AccountCircle as AccountCircleIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'; // Importe useNavigate para utilizar navegação
import "./Header3.css"; // Importe seu arquivo de estilos CSS aqui
import LogoRedeAncora from "../../assets/logo-hd.png";

export default function Header3() {
    const navigate = useNavigate(); // Inicialize useNavigate

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            navigate("/search"); // Use navigate para navegar para "/search"
        }
    }

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid d-flex align-items-center justify-content-center">
                <a className="navbar-brand col-xl-1" href='/'>
                    <img src={LogoRedeAncora} alt="logo" style={{ maxWidth: '100px', height: 'auto' }} />
                </a>
                
                <div className="d-flex align-items-center">
                    <TextField
                        onKeyDown={handleKeyPress}
                        className="me-2"
                        label="Pesquisar"
                        variant="outlined"
                        style={{ width: '500px' }} // Defina a largura desejada aqui
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <IconButton color="inherit" aria-label="Carrinho" onClick={() => navigate("/carrinho")}>
                        <ShoppingCartIcon />
                    </IconButton>

                    <IconButton color="inherit" aria-label="Conta" onClick={() => navigate("/cadastro")}>
                        <AccountCircleIcon />
                    </IconButton>
                </div>
            </div>
        </nav>
    )
}
