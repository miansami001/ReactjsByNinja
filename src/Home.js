const Home = () => {

    const handleClick = (e) => {
        console.log('Hello Mian"s', e);
    }

    const hanldeClickAgain = (name, e) => {
        console.log('Hello ' + name, e.target);
    }

    return (
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e) => {
                hanldeClickAgain('Mians', e)
            }}>Click me again</button>
        </div>
    );
}
 
export default Home;