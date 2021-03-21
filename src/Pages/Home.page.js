import React, { useEffect, useState } from 'react';
import { Container, Modal } from 'react-bootstrap';
import * as UserActions from '../Actions/Users.actions';
import { connect } from 'react-redux';
import TopBar from './../Components/Navbar.component';
import UsersTable from './../Components/UsersTable.component';
import EditUser from './../Components/EditUser.component';

const Home = (props) => {
    const { users, mapGetUsers, mapEditUser } = props;

    const initialFormState = {
        id: null,
        firstName: "",
        lastName: "",
        date: "",
        phone: ""
    };

    const [editing, setEditing] = useState(false);
    const [currentUser, setCurrentUser] = useState(initialFormState);

    useEffect(() => {
        mapGetUsers();
    }, [mapGetUsers]);

    const EditUserItem = (user) => {
      setEditing(true);
      setCurrentUser(user);
    };
    
    const updateUser = () => {
        const editForm = document.getElementById('editUserForm');
        if (editForm.firstName.value !== '') {
            const data = {};
            data.id = editForm.id.value;
            data.firstName = editForm.firstName.value;
            data.lastName = editForm.lastName.value;
            data.date = editForm.date.value;
            data.phone = editForm.phone.value;
            mapEditUser(data);
            mapGetUsers();
        } else {
            return;
        }
        setEditing(false);
    };

    return (
        <div>
            <TopBar />
            <Container>
                <UsersTable
                    editItem={EditUserItem}
                    users={users}
                />

                <Modal show={editing}>
                    <Modal.Header>
                        <Modal.Title>
                            <h2 className="center">Edit user</h2>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <EditUser 
                        setEditing={setEditing}
                        currentUser={currentUser}
                        updateUser={updateUser}
                    />
                    </Modal.Body>
                </Modal>
            </Container>
        </div>
    );
};

const mapStateToProps = state =>({
    users: state.users.data
});

const mapDispatchToProps = (dispatch) => {
    return {
        mapGetUsers: () => dispatch(UserActions.getUsers()),
        mapEditUser: userToEdit => dispatch(UserActions.editUser(userToEdit))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
//export default Home;