import { Model, Column, Table } from 'sequelize-typescript';
import IUsers from 'interfaces/IUsers';

@Table
class Users extends Model implements IUsers {
    @Column
    id: number;
    
    @Column
    username: string;

    @Column
    email: string;
}

export default Users;
