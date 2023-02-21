class Story {
    #comments;
    #likes;
    #dislikes;


    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this.#comments = [];
        this.#likes = [];
        this.#dislikes = [];
        this.trackId = 0;
    }

    get likes() {
        if (this.#likes.length == 0) {
            return `${this.title} has 0 likes`
        } else if (this.#likes.length == 1) {
            return `${this.#likes[0]} likes this story!`;
        } else {
            return `${this.#likes[0]} and ${this.#likes.length - 1} others like this story!`
        }
    }

    like(username) {
        const user = this.#likes.find(user => user == username);

        if (user) {
            throw new Error("You can't like the same story twice!");
        } else if (username == this.creator) {
            throw new Error("You can't like your own story!");
        } else {
            this.#likes.push(username);
            return `${username} liked ${this.title}!`;
        }
    }
    dislike(username) {
        const user = this.#likes.find(user => user == username);

        if (!user) {
            throw new Error("You can't dislike this story!");
        } else {
            this.#likes.splice(this.#likes.indexOf(user), 1);
            return `${username} disliked ${this.title}`
        }
    }

    comment(username, content, id) {
        if (id === undefined ||!this.#comments.some(c => c.Id === id)) {

            this.trackId++
            this.#comments.push({
                Id: this.trackId,
                Username: username,
                Content: content,
                Replies: []
            })
            return `${username} commented on ${this.title}`
        } else {
            let comment = this.#comments.find(c => c.Id == id);
            let replyId = `${id}.${comment.Replies.length + 1}`;
            comment.Replies.push({
                Id: replyId,
                Username: username,
                Content: content
            })
            return `You replied successfully`
        }
    }

    toString(sortingType) {
        let result = [`Title: ${this.title}`, `Creator: ${this.creator}`, `Likes: ${this.#likes.length}`, `Comments:`]

        if (sortingType == 'asc') {
            this.#comments
                .sort((a, b) => a.Id - b.Id)
                .map(comment => {
                    result.push(`-- ${comment.Id}. ${comment.Username}: ${comment.Content}`)
                    comment.Replies
                        .sort((a, b) => a.Id - b.Id)
                        .map(reply => result.push(`--- ${reply.Id}. ${reply.Username}: ${reply.Content}`))
                })
        } else if (sortingType == 'desc') {
            this.#comments
                .sort((a, b) => b.Id - a.Id)
                .map(comment => {
                    result.push(`-- ${comment.Id}. ${comment.Username}: ${comment.Content}`)
                    comment.Replies
                        .sort((a, b) => b.Id - a.Id)
                        .map(reply => result.push(`--- ${reply.Id}. ${reply.Username}: ${reply.Content}`))
                })
        } else if (sortingType == 'username') {
            this.#comments
                .sort((a, b) => a.Username.localeCompare(b.Username))
                .map(comment => {
                    result.push(`-- ${comment.Id}. ${comment.Username}: ${comment.Content}`)
                    comment.Replies
                        .sort((a, b) => a.Username.localeCompare(b.Username))
                        .map(reply => result.push(`--- ${reply.Id}. ${reply.Username}: ${reply.Content}`))
                })
        }

        return result.join('\n');
    }
}

