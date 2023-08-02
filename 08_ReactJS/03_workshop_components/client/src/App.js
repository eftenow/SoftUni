import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import UsersTable from './components/UsersTable';
import Pagination from './components/Pagination';
import { useEffect, useState } from 'react';
import { createUser, deleteUser, getAllUsers, getSpecificUser, updateUser } from './services/userService';

function App() {
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        imageUrl: '',
        phoneNumber: '',
        address: {
            country: '',
            city: '',
            street: '',
            streetNumber: ''
        }
    });
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [editCreateIsVisible, setEditCreateForm] = useState(false);
    const [detailsIsVisible, setDetailsVisible] = useState(false);
    const [deleteIsVisible, setDeleteVisisble] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);
    const [userToEdit, setUserToEdit] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            const fetchedUsers = await getAllUsers();
            setUsers(fetchedUsers.users);
        };

        fetchUsers();
    }, []);

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };
    
    const handleAddressChange = (e) => {
        setFormValues({
            ...formValues,
            address: {
                ...formValues.address,
                [e.target.name]: e.target.value,
            },
        });
    };

    const onUserCreationHandler = async (e) => {
        e.preventDefault();
    
        if (userToEdit){
            const updatedUser = await updateUser(userToEdit._id, formValues);
            setUsers((prevUsers) => {
                return prevUsers.map((user) =>
                  user._id === userToEdit._id ? updatedUser : user
                );
            });
            setEditCreateForm(false);
            setUserToEdit(null);
    
        } else{
            const newUser = await createUser(formValues);
            setUsers((existingUsers => [...existingUsers, newUser]));
            setEditCreateForm(false);
        } 
    
        // Reset form values
        setFormValues({
            firstName: '',
            lastName: '',
            email: '',
            imageUrl: '',
            phoneNumber: '',
            address: {
                country: '',
                city: '',
                street: '',
                streetNumber: ''
            }
        });
    }



    const userDetails = async (id) => {
        const currentUserDetails = await getSpecificUser(id);
        setUser(currentUserDetails);
        setDetailsVisible(true);
    }

    const userDeletion = async (id) => {
        await deleteUser(id);
        setUsers(users.filter((u) => u._id !== id));
        setDeleteVisisble(false);
        setUserToDelete(null);
    }

    const showDelete = (id) => {
        setDeleteVisisble(true);
        setUserToDelete(id)
        
    }

    const showCreateEdit = async (id=null) => {
        setEditCreateForm(true);
 

        if(id){
            const userToEdit = await getSpecificUser(id);
            setFormValues(userToEdit);
            setUserToEdit(userToEdit)
        }
    };

    const hideCreateEdit = () => {
        setEditCreateForm(false);
        setDetailsVisible(false);
        setDeleteVisisble(false);
        setUserToEdit(null);
    };



    return (
        <>
            <Header />
            <main className="main">
                <section className="card users-container">
                    <SearchBar />
                    <UsersTable
                        users={users}
                        onCreate={onUserCreationHandler}
                        showCreateEdit={showCreateEdit}
                        hideCreateEdit={hideCreateEdit}
                        formIsVisisble={editCreateIsVisible}
                        user={user}
                        userData = {userDetails}
                        detailsIsVisible={detailsIsVisible}
                        deleteIsVisible={deleteIsVisible}
                        showDelete={showDelete}
                        userToDelete={userToDelete}
                        userDeletion={userDeletion}
                        userToEdit={userToEdit}
                        handleChange={handleChange}
                        formValues={formValues}
                        handleAddressChange={handleAddressChange}
                    />

                    <Pagination />
                </section>
            </main>


            <Footer />
        </>
    );
}

export default App;
