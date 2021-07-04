import { useState } from 'react';
import {
    Button,
    Paper,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell
} from "@material-ui/core";

const Home = () => {
    const [title, setTitle] = useState('');
    return (
        <>
            <Paper
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    width: 1000,
                    margin: '0 auto'
                }}
            >
                <Button
                    variant="contained"
                    color="primary"
                    onClick={()=>{setTitle('clicked!')}}
                >
                    click me
                </Button>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>1</TableCell>
                                <TableCell>2</TableCell>
                                <TableCell>3</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        <TableRow>
                                <TableCell>1</TableCell>
                                <TableCell>1</TableCell>
                                <TableCell>1</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>1</TableCell>
                                <TableCell>1</TableCell>
                                <TableCell>1</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>1</TableCell>
                                <TableCell>1</TableCell>
                                <TableCell>1</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </>
    );
}

export default Home;
