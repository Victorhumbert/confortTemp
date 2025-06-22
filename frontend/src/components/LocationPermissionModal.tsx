import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";

interface LocationPermissionModalProps {
  isOpen: boolean;
  onAccept: () => void;
  onDecline: () => void;
}

const LocationPermissionModal: React.FC<LocationPermissionModalProps> = ({
  isOpen,
  onAccept,
  onDecline,
}) => {
  return (
    <Dialog open={isOpen}>
      <DialogContent aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>
            Permitir acesso à localização?
          </DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Precisamos da sua localização para indetificar a temperatura na sua região.
        </DialogDescription>
        <div className="flex justify-end space-x-3">
          <Button variant="outline" className="hover:bg-destructive" onClick={onDecline}>
            Recusar
          </Button>
          <Button variant="default" onClick={onAccept}>
            Permitir
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LocationPermissionModal;
