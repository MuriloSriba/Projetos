// Importações dos componentes
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ListaEventos } from './components/ListaEventos';
import { Sobre } from './components/Sobre';
import { Contato } from './components/Contato';
import { Footer } from './components/Footer';

// Dados mockados dos eventos
const mockEventos = [
  {
    id: 1,
    titulo: 'Festival de Dança',
    descricao: 'Maior festival de dança contemporânea de Santa Catarina com grupos nacionais e internacionais.',
    data: '2023-11-15',
    hora: '19:00',
    local: 'Centro de Eventos Gov. Luiz Henrique da Silveira',
    categoria: 'cultura',
    imagem: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/69fd2301-e7ec-4f35-8c96-d8bf640f30f2.png',
    preco: 'R$ 30,00',
    favorito: false
  },
  // ... outros eventos
];

// Componente principal App
function App() {
  return (
    <div>
      <Header />
      <Hero />
      <ListaEventos eventos={mockEventos} />
      <Sobre />
      <Contato />
      <Footer />
    </div>
  );
}

// Renderiza a aplicação
ReactDOM.render(<App />, document.getElementById('root'));
