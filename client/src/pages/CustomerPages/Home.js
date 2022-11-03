import Button from '~/components/Button';

function Home() {
    return (
        <h1>
            <Button to="admin" primary rounded>
                Admin Page
            </Button>
        </h1>
    );
}

export default Home;
