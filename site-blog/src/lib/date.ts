import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const date = {
  formatToBRL(date: string, pattern = 'dd/MM/yy') {
    return format(new Date(date), pattern, { locale: ptBR });
  },
};
