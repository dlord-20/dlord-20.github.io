
export default function Button() {

    const handleButtonClick = () => {
        return <p>Hello world</p>
    }

    return (
        <div className="button">
            {handleButtonClick()}
        </div>
    );
}