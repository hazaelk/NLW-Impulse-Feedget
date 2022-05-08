import { Widget } from "./components/Widget";

export function App() {
  return <Widget />
}

/*
interface PropriedadesDosBotoes {
  text?: string; pode ou não passar o text '?'
}

function Button(props: PropriedadesDosBotoes) {
return <button className="bg-violet-500 px-4 h-10 rounded text-violet-100 hover:bg-violet-700 transition-colors">{props.text ?? 'Default'}</button> 

as chaves interpolam uma variavel, 'interface' diz o tipo do que virá no 'text' 
PERIPÉCIAS DO TYPESCRIPT
}

function App() {
  return (
    <div className="flex gap-2">
      <Button text="Enviar"/>
      <Button text="Ok"/>
      <Button />
    </div>
  )
} 
 export default App

TSX TYPESCRIPT ESCRITO DENTRO DO HTML
 
COMPONENTE É UMA FUNÇÃO QUE RETORNA HTML, POR EXEMPLO ACIMA TEMOS O APP()

SEMPRE TEM QUE TER A PRIMEIRA LETRA MAIUSCULA

DENTRO DO RETURN O REACT SEMPRE ESPERA TER ALGUM ELEMENTO ENVOLVENDO OS COMPONENTES
*/
