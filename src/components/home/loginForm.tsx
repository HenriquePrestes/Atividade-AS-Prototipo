"use client";
import Link from 'next/link';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { Checkbox } from '@/src/components/ui/checkbox';

export function LoginForm() {
  
  return (
    <form className="flex w-full flex-col items-center gap-4">
      
      <Input 
        type="text" 
        placeholder="Usuário" 
        className="w-64"
      />
      
      <Input 
        type="password" 
        placeholder="Senha" 
        className="w-64"
      />

      <Checkbox 
        id="lembrar" 
        label="Lembrar senha" 
      />

      <Button 
        type="submit" 
        variant="primary"
        className="w-64"
      >
        ENTRAR
      </Button>
      
      <Link href="/cadastro">
        <Button 
          variant="secondary"
          className="w-64"
        >
          CADASTRAR
        </Button>
      </Link>
    

      <a href="Alterar-senha" className="mt-2 text-center text-sm text-white hover:underline">
        Esqueceu a senha?
      </a>
    </form>
  );
}