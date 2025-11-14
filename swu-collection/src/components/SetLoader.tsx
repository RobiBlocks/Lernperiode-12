import useSWR from "swr";

interface SetLoaderProps {
  set: string;
}

function SetLoader(props: SetLoaderProps) {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  
  const {
    data: response,
    error,
    isLoading,
  } = useSWR(
    `https://corsproxy.io/?${encodeURIComponent(`https://api.swu-db.com/cards/${props.set}`)}`,
    fetcher
  );
  
  if (error) return <div className="failed">failed to load</div>;
  if (isLoading) return <div className="Loading">Loading...</div>;
  
  const cards = response?.data || [];
  const sortedCards = cards.sort((a: any, b: any) => a.Number - b.Number);
  
  return (
    <div className="setLoader">
      {sortedCards.map((card: any, index: number) => (
        <img key={index} src={card.FrontArt} alt="card" width={100} />
      ))}
    </div>
  );
}

export default SetLoader;