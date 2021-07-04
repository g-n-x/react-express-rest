import { useState } from 'react';
import { api } from '../../services/api';
import logo from './logo.svg';
import {
    Button,
    Container,
    TextField,
    Typography,
    Paper,
} from '@material-ui/core';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit =  async (e: any) => {
        setError(false);
        e.preventDefault();
        let data = await api.post('/login', {username, email, password});
        
        if(data.data['status'] == 'ok') {
            window.location.href = '/home';
        } else {
            setError(true);
        }
    }

    return (
        <Container>
            <Paper
                component="form"
                onSubmit={handleSubmit}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: 20,
                    width: 500,
                    padding: 40,
                    margin: '0 auto'
                }}
            >
                <img src={logo} alt="react logo" />
                <TextField label="username" required onChange={(e)=>setUsername(e.target.value)}/>
                <TextField label="email" type="email" required onChange={(e)=>setEmail(e.target.value)} />
                <TextField label="password" type="password" required onChange={(e)=>setPassword(e.target.value)} />
                {error ? <Typography color="error">Invalid Credentials</Typography> : <></>}
                <Button
                    variant='contained'
                    color='secondary'
                    type="submit"
                >
                    Login
                </Button>
            </Paper>
        </Container>
    );
}

export default LoginPage;
