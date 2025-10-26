import Header from '../components/Header';
import CountryMap from '../components/CountryMap';
import { useNavigate } from 'react-router-dom';

export default function Map() {
  const navigate = useNavigate();

  const onSelect = (country: string) => {
    navigate(`/send?country=${encodeURIComponent(country)}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 relative">
        <CountryMap onSelect={onSelect} />
      </div>
      <div className="p-4 text-center opacity-70 text-sm">
        Choose a corridor to begin.
      </div>
    </div>
  );
}
