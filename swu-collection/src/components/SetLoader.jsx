import useSWR from "swr";

function SetLoader(props) {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const {
    data: response,
    error,
    isLoading,
  } = useSWR(
    `https://corsproxy.io/?${encodeURIComponent(`https://api.swu-db.com/cards/${props.set}`)}`,
    fetcher
  );

  if (error) {
    return <div className="failed">failed to load</div>;
  }
  if (isLoading) {
    return <div className="Loading">Loading...</div>;
  }
  const cards = response?.data || [];
  const sortedCards = cards.sort((a, b) => a.Number - b.Number);

  return (
    <div className="setLoader">
      {sortedCards.map((card, index) => (
        <img key={index} src={card.FrontArt} alt="card" />
      ))}
    </div>
  );
}

export default SetLoader;
