import {Button} from "@/components/ui/button.tsx";
import {LogOut, Settings} from "lucide-react";
import {useNavigate} from "react-router-dom";


export const Header = () => {

    const navigate = useNavigate();

    return (
        <div className="border-b border-x p-2 flex justify-end gap-2">
            <Button onClick={() => navigate('/')} variant='secondary' className='justify-self-end'>
                <Settings />
            </Button>
            <Button onClick={() => navigate('/')} variant='destructive' className='justify-self-end'>
                <LogOut />
            </Button>
        </div>
    )
}