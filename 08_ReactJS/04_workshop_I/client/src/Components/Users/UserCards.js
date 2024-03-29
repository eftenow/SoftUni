import * as userService from "../../Service/userService.js";

import { useEffect, useState } from 'react';
import { UserCard } from "./UserCard.js";
import { SearchForm } from "../SearchForm.js";
import { UserDetails } from "./UserDetails.js";
import { UserDelete } from "./UserActions/UserDelete.js";
import { UserCreateEdit } from "./UserActions/UserCreateEdit.js";



export const userActions = {
    add: "add",
    edit: "edit",
    remove: "remove",
    create: "create",
    details: "details",
}

export const UserCards = () => {
    const [users, setUsers] = useState([]);
    const [selected, setSelected] = useState(null);
    const [action, setAction] = useState(null);

    useEffect(() => {
        userService.getAllUsers()
            .then(users => setUsers(Object.values(users)))
    }, [])

    const onAction = (id, action) => {
        userService.getSpeicifcUser(id)
            .then((user) => {
                setSelected(user);
                setAction(action);
            });
    }

    const onClose = () => {
        setSelected(null);
        setAction(null);
    }

    const onChange = (newUser, action) => {
        if (action === userActions.remove) {
            setUsers((currentUsers) =>
                currentUsers.filter((user) => user._id !== newUser._id)
            );
        } else if (action === userActions.edit) {
            setUsers((currentUsers) =>
                currentUsers => currentUsers.map((user) => user._id === newUser._id ? newUser : user)
            );
        } else {
            setUsers((currentUsers) => [...currentUsers, newUser]);
        }

        setAction(null);
        setSelected(null);
    };






    return (
        <section className="card users-container">
            {
                (action === userActions.add || action === userActions.edit)
                && <UserCreateEdit
                    onChange={onChange}
                    onClose={onClose}
                    action={action}
                    selected={selected}
                />}
            {action === userActions.details && <UserDetails user={selected} onClose={onClose} />}

            {action === userActions.remove && <UserDelete user={selected} onClose={onClose} onChange={onChange} />}
            <SearchForm />
            <table className="table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>
                            First name
                            <svg
                                className="icon"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="arrow-down"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                ></path>
                            </svg>
                        </th>
                        <th>
                            Last name
                            <svg
                                className="icon"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="arrow-down"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                ></path>
                            </svg>
                        </th>
                        <th>
                            Email
                            <svg
                                className="icon"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="arrow-down"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                ></path>
                            </svg>
                        </th>
                        <th>
                            Phone
                            <svg
                                className="icon"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="arrow-down"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                ></path>
                            </svg>
                        </th>
                        <th>
                            Created
                            <svg
                                className="icon active-icon"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="arrow-down"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                ></path>
                            </svg>
                        </th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => <UserCard key={user._id} user={user} onAction={onAction} />)}
                </tbody>

            </table>

            <button className="btn-add btn" onClick={() => onAction(null, userActions.add)}>Add new user</button>
            {/* Pagination component  */}
            <div className="pagination position">
                <div className="limits">
                    <span>Items per page:</span>
                    <select name="limit" className="limit" defaultValue={5}>
                        <option defaultValue={5}>5</option>
                        <option defaultValue={5}>10</option>
                        <option defaultValue={5}>15</option>
                        <option defaultValue={5}>20</option>
                    </select>
                </div>
                <p className="pages">1 - 1 of 1</p>
                <div className="actions">
                    <button className="btn" title="First Page">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="angles-left"
                            className="svg-inline--fa fa-angles-left"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                        >
                            <path
                                fill="currentColor"
                                d="M77.25 256l137.4-137.4c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25l160 160C175.6 444.9 183.8 448 192 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L77.25 256zM269.3 256l137.4-137.4c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25l160 160C367.6 444.9 375.8 448 384 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L269.3 256z"
                            ></path>
                        </svg>
                    </button>
                    <button className="btn" title="Previous Page">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="angle-left"
                            className="svg-inline--fa fa-angle-left"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 512"
                        >
                            <path
                                fill="currentColor"
                                d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"
                            ></path>
                        </svg>
                    </button>
                    <button className="btn" title="Next Page">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="angle-right"
                            className="svg-inline--fa fa-angle-right"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 512"
                        >
                            <path
                                fill="currentColor"
                                d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"
                            ></path>
                        </svg>
                    </button>
                    <button className="btn" title="Last Page">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="angles-right"
                            className="svg-inline--fa fa-angles-right"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                        >
                            <path
                                fill="currentColor"
                                d="M246.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L178.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C47.63 444.9 55.81 448 64 448s16.38-3.125 22.62-9.375l160-160C259.1 266.1 259.1 245.9 246.6 233.4zM438.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L370.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C239.6 444.9 247.8 448 256 448s16.38-3.125 22.62-9.375l160-160C451.1 266.1 451.1 245.9 438.6 233.4z"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
        </section>

    )
}