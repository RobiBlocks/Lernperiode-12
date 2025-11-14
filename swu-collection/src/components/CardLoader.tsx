
interface CardLoaderProps {
  number: number;
}

function CardLoader(props: CardLoaderProps) {
    return (
        <div className="cardLoader">
            <div className="cardNumber">Card #{props.number}</div>
        </div>
    )
}

export default CardLoader;