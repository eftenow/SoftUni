export const Home = () => {

    return (
        <section id="welcome">
            <div id="welcome-container">
                <h1>Welcome To Meme Lounge</h1>
                <img src="/images/welcome-meme.jpg" alt="meme" />
                <h2>Login to see our memes right away!</h2>
                <div id="button-div">
                    <a href="#" className="button">
                        Login
                    </a>
                    <a href="#" className="button">
                        Register
                    </a>
                </div>
            </div>
        </section>
    )
}