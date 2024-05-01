import { IconButton, InputAdornment, TextField } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import "./Header3.css"; // Importe seu arquivo de estilos CSS aqui
import LogoRedeAncora from "../../assets/logo-hd.png";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Header3() {
    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            console.log(event.target.value); // Aqui você pode fazer o que quiser com o valor digitado
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

                    <IconButton color="" aria-label="Carrinho">
                        <ShoppingCartIcon />
                    </IconButton>

                    <IconButton color="" aria-label="Conta">
                        <AccountCircleIcon/>
                    </IconButton>
                </div>
            </div>
        </nav>
    )
}
