import {
    Button,
    Container,
    TextField,
    Paper,
} from '@material-ui/core';

const LoginPage = () => {
    const handleSubmit = (e: any) => {
        console.log(e);
        e.preventDefault();
    }
    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <Paper
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
                    <TextField label="username" />
                    <TextField label="email" type="email" />
                    <TextField label="password" type="password" />
                    <Button
                        variant='contained'
                        color='secondary'
                        type="submit"
                        >
                        Login
                    </Button>
                </Paper>
            </form>
        </Container>
    );
}

export default LoginPage;
