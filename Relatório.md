# Relatório técnico

## 1 - Sobre

&emsp; A ideia da aplicação é criar um utilitário que forneça algumas funções para gerir finanças, organizar os ganhos, gastos e compromissos financeiros, facilitando a vida do usuário. O projeto consiste em um pequeno app de finanças pessoais que registra transações financeiras e boletos a serem pagos. 

## 2 - Tecnologias Utilizadas

&emsp; Todo o projeto foi construído utilizando a linguagem Javascript.                                                          
&emsp; A interface foi toda construída utilizando React native. Foi escolhido a plataforma, pois esse tipo de aplicativo é bastante utilizado por pessoas comuns que utilizam majoritariamente dispositivos mobile no dia a dia. O React native permite desenvolver aplicativos para os sistemas mobile de forma nativa, além de ser uma biblioteca javascript, que é a linguagem exigida para o projeto. Quanto às funções do app implementadas no backend necessitaram do uso de algumas TAD's.

### Funções de Adicionar Saldo e Adicionar Boleto

&emsp; **Adicionar Saldo**: A função responsável por adicionar o saldo utiliza-se de uma TAD fila, isto porque há  nela um sistema de remoção que leva em consideração a quantidade de elementos presentes na estrutura, esse sistema funciona como um regulador, ou seja, ao atingir uma determinada quantidade de elementos inseridos será removido os itens existentes a mais tempo na estrutura - A finalidade é manter uma quantidade limite de elementos e conservar o funcionamento de adicionar saldo, lembrando que as remoções geradas não interferirão no valor do saldo, uma vez que já foram processadas. A fim de manter o comportamento em questão, o tipo abstrato que se demonstrou o mais eficiente ao trabalhar com entradas e saídas do tipo FIFO(first-in-first-out) foi a fila. Ademais, cabe fazer algumas ressalvas sobre a função de adição, tendo em vista que para tornar as informações melhor apresentáveis na interface foi necessário copiar os elementos da fila para uma lista, ou seja, quando é adicionado um saldo, o programa utiliza uma fila para realizar as operações necessárias, mas, após o processo é necessário transferir as informações para uma lista para a visualização do usuário.
```javascript
const adicionar = () => {
      queue.enqueue(new Saldo(adicao.adicaox, adicao.subt))
      if (queue.length() > 10) {
          queue.dequeue();
      }
      setQueue(queue)

      for (const n in queue.items) {
          attLista.push(queue.items[n])
      }
      setLista(attLista.reverse())
    }
```
	
&emsp; **Adicionar Boleto**: A função foi feita utilizando a TAD lista e, assim como adicionar saldo, será empregado array como building block. Sempre que se adiciona um boleto, ele é adicionado a uma lista e a cada X boletos cadastrados (10, no caso do exemplo) é mudado o estado da lista e o boleto mais antigo adicionado sumirá da lista. Inicialmente o plano era que o boleto sumisse ao passar a data de vencimento, contudo, devido a alguns fatores não foi possível implementar do jeito que imaginávamos inicialmente. Dessa forma, optamos por utilizar a TAD mais simples para adicionar elementos e remover quando a TAD atingir um dado tamanho. Assim como a função de adicionar saldo, é necessário copiar os dados para uma outra lista visando a interface de usuário. 
```javascript
const adicionar = () => {
      lista.add(0, new Boleto(novoBoleto.label, novoBoleto.vencimento))
        if (lista.n > 9) {
            lista.remove(lista.n);
        }
        setLista(lista)
        setListaItems(lista.a)
    }
```
### TAD's
&emsp; Como comentando anteriormente, foram aplicadas duas TAD's, sendo estas a TAD Fila e a TAD Lista. Desta forma, é possível visualizar suas implementações, lebrando que ambas utilizam array como building block. Observe abaixo:

#### Implementação TAD Fila:
```javascript
//TAD Fila - utilizada por conta do arranjamento dos itens
class Fila {
    //construção da classe
    constructor() {
      this.items = {}; //objeto para alocação dos itens
      this.headIndex = 0; //indicador da "cabeça" da fila
      this.tailIndex = 0; //indicador para o último da fila
    }
    //método para inserir um item na fila
    enqueue(item) {
      this.items[this.tailIndex] = item; // coloca o item no fim da fila
      this.tailIndex++; // aumenta o index, aumentando o tamanho da fila
      return this.items
    }
    //método para retirar um item da fila
    dequeue() {
      const item = this.items[this.headIndex];//define o item como o objeto que será retirado
      delete this.items[this.headIndex];//retira o item da fila
      this.headIndex++;//aumenta o index da "cabeça", assim diminuindo o tamanho da fila
      return item;
    }
  }
```
#### Implementação TAD Lista:
```javascript
//TAD Lista
class Lista {
    //construtor da classe
    constructor(){
        this.a = [] //escolhemos [] para lista ao invés de {} por conta da maneira com que o React lê os dados
        this.n = 0 //define o tamanho da lista
    }
    //definir o valor em uma posição
    set(i,x){
        this.a[i] = x //atribui o valor dado em sua posição desejada pelo programador
    }
    //pegar um item da TAD
    get(i){
        return this.a[i] //retorna o item na posição desejada pelo programador
    }
    /*adiciona um item em certa posição, para o programa definimos essa posição sempre como 0, por conta do jeito
    com que os boletos são adicionados em somente uma ordem, que é sempre no topo*/
    add(i,x){
        /*if para saber se na posição há um item existente, se existir a lista rotaciona para direita, 
        assim alocando espaço para onde quer ser inserido*/
        if (this.a[i]!= null){
                this.a.splice(i,0,x)
            }
        //else para se não houver nenhum item,a função simplesmente adiciona o item no local desejado    
        else {
            this.a[i] = x;
        }
        this.n++; //aumenta a length(tamanho) da TAD
        return this.a
    }
    //remove um item qualquer em uma posição desejada
    remove(i){
        this.a.splice(i,1)//aqui é onde o item será removido e a lista será rotacionada para esquerda
        this.n--;//diminui a length da TAD
        return this.a
    }
  }
```

## 3 - Metas(Cumpridas e Pendentes)

&emsp; Utilizamos as primeiras reuniões para discutirmos as funcionalidades que adicionaríamos ao projeto e às estruturas que usaríamos para implementá-las. Contudo, ao colocarmos em prática o planejamento, tivemos problemas com o tempo e com alguns bugs que apareceram durante a prática. Isto posto, a seguinte lista demonstra as principais funcionalidades que tinhamos como meta e a marcação indica o êxito ou não em colocar em executa-las.

-  Aplicativo de finanças pessoais :heavy_check_mark:
-  Adicionar saldo :heavy_check_mark:
-  Adicionar boletos via código :heavy_check_mark:
-  Adicionar boletos via scan :x:
-  Avisos sobre o vencimento de boletos :x:
-  Remover boletos de acordo com a data de vencimento :x:
