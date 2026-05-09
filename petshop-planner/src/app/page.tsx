import { Button } from '@/components/ui/button';
import { TextField } from '@/components/ui/text-field';

export default function Home() {
  return (
    <div>
      <TextField title='Nome do tutor' placeholder="Helena Souza" />
      <Button>Botão</Button>
    </div>
  );
}
