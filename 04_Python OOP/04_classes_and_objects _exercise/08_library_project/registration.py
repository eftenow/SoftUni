from library_project.user import User
from library_project.library import Library


class Registration:
    def add_user(self, user: User, library: Library):
        if user not in library.user_records:
            library.user_records.append(user)
        else:
            return f"User with id = {user.user_id} already registered in the library!"

    def remove_user(self, user: User, library: Library):
        if user in library.user_records:
            library.user_records.remove(user)
        else:
            return f"We could not find such user to remove!"

    def change_username(self, user_id, new_username, library: Library):
        for user in library.user_records:
            if user.user_id == user_id and user.username != new_username:
                if user.username in library.rented_books:
                    data = library.rented_books[user.username]
                    del library.rented_books[user.username]
                    library.rented_books[new_username] = data
                user.username = new_username

                return f"Username successfully changed to: {new_username} for user id: {user.user_id}"

            elif user.user_id == user_id and user.username == new_username:
                return "Please check again the provided username - it should be different than the username used so far!"

        return f"There is no user with id = {user_id}!"