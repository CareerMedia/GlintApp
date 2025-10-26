import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { formatCurrency } from '../utils/formatNumber';

export default function Success() {
  const { state } = useLocation() as any;
  const navigate = useNavigate();
  const recipientName = state?.recipient?.name || 'your recipient';

  return (
    <div className="min-h-screen p-4 flex items-center justify-center">
      <Card className="p-6 w-full max-w-sm text-center space-y-4">
        <div className="text-3xl font-bold">Money Received!</div>
        <div className="opacity-80">
          Your transfer to <span className="font-semibold">{recipientName}</span> in <span className="font-semibold">{state?.country}</span> was completed successfully.
        </div>
        <div className="text-sm opacity-80">
          Delivered: <span className="font-semibold">{formatCurrency(state?.result?.recipientLocal || 0, state?.currency || 'USD')}</span>
        </div>

        <div className="flex gap-3 pt-2">
          <Button className="flex-1" onClick={() => navigate('/map')}>Send More</Button>
          <button className="flex-1 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20" onClick={() => { localStorage.removeItem('signedIn'); navigate('/'); }}>Sign Out</button>
        </div>
      </Card>
    </div>
  );
}
