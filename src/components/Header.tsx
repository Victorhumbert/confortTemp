import {LogOut, Settings} from "lucide-react";
import {useNavigate} from "react-router-dom";
import logo from '../../logo_ConfotTemp.jpg'


export const Header = () => {

    const navigate = useNavigate();

    return (
        <div className="border-b border-x p-2 flex w-full gap-2">
            <div className='flex items-center gap-1 cursor-pointer' onClick={() => navigate('/dashboard/')} >
                <img className='w-16 h-16' src={logo} alt="ConfortTemp"/>
                <h1 className='text-2xl text-primary'>ConfortTemp</h1>
            </div>
            <div className='flex ml-auto items-center justify-self-end justify-end justify-items-end'>
                <Settings onClick={() => navigate('/settings')}
                        className='justify-self-end w-10 h-10 p-2 cursor-pointer'/>
                <LogOut onClick={() => navigate('/')}
                        className='justify-self-end w-10 h-10 p-2 cursor-pointer text-destructive' />
            </div>
        </div>
    )
}