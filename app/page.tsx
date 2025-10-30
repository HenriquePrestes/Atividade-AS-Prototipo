import Image from 'next/image';
import { LoginForm } from '@/src/components/home/loginForm';

export default function Home() {
  return (
    // Container principal: tela inteira, centraliza o card
    <div className="flex min-h-screen items-center justify-center bg-gray-100">

      <div className="flex w-full h-screen overflow-hidden">
        
        <div className="relative hidden w-1/2 md:block">
          <Image
            src="/front_caminhao.jpg" 
            alt="Mecânico trabalhando em um caminhão"
            layout="fill"
            objectFit="cover"
          />
        </div>

  <div className="flex w-full flex-col items-center justify-center bg-linear-to-r from-blue-400 to-blue-600 p-12 md:w-1/2">
        
          <LoginForm /> 

        </div>
      </div>
    </div>
  );
}