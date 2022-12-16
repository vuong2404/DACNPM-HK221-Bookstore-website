import { AiTwotoneStar } from 'react-icons/ai';

function RateStar({ number = 0, size = 16 }) {
    if (number > 5 || number < 0) {
        number = 0;
        return;
    }

    let array1 = Array.from(Array(number).keys());
    let array2 = Array.from(Array(5 - number).keys());

    return (
        <span className="m-0">
            {array1.map((index) => (
                <AiTwotoneStar key={index} className="text-warning" size={size} />
            ))}
            {array2.map((index) => (
                <AiTwotoneStar key={index} />
            ))}
        </span>
    );
}

export default RateStar;
