import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TransferAnimation from '../components/TransferAnimation';
import Card from '../components/ui/Card';

export default function Transfer() {
  const { state } = useLocation() as any;
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) navigate('/');
  }, [state, navigate]);

  if (!state) return null;

  return (
    <div className="min-h-screen p-4 flex flex-col items-center">
      <Card className="p-5 w-full max-w-md text-center">
        <h2 className="text-xl font-semibold">Sending to {state.country}</h2>
        <p className="opacity-80 text-sm">Sit back — your transfer is in motion.</p>
        <TransferAnimation onDone={() => navigate('/success', { state })} />
      </Card>
    </div>
  );
}
