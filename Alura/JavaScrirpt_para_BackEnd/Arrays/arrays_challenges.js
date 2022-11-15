const students = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie',
    'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo',
    'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

let classOne = students.slice(0, Math.floor(students.length / 2));
let classTwo = students.slice(Math.floor(students.length / 2));

console.log(students);
console.log(classOne);
console.log(classTwo);



// Desafio 5: Atualizando elementos
// Temos que criar uma lista de chamada com os seguintes alunos:

// João
// Ana
// Caio
// Lara
// Marjorie
// Leo
// Porém, Ana e Caio mudaram de escola e o Rodrigo entrou nessa sala. Nosso desafio será atualizar a lista de chamada,
// removendo os nomes de Ana e Caio, e inserindo Rodrigo.
const names = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

//       start, deleteCount, item1, item2, ...
names.splice(1, 2, "Rodrigo");
console.log(names);

// Desafio 6: Juntando as salas
// Haverá uma palestra sobre padrões de projetos para estudantes das salas de JavaScript e Python. Nossa missão é juntar ambas as salas em uma única lista que exiba o nome de todas as pessoas.

// Em resumo, temos duas listas e precisamos juntá-las.

const jsClass = ["Evaldo", "Camis", "Mari"];
const pythonClass = ["Ju", "Leo", "Raquel"];
const joinedClass = jsClass.concat(pythonClass);
console.log(jsClass);
console.log(pythonClass);
console.log(joinedClass);

// Desafio 7: Lista com 2 dimensões
// Foram fornecidas duas listas para nós. A primeira contém os nomes de quatro estudantes e a segunda possui suas respectivas médias:

// 'João', 'Juliana', 'Caio', 'Ana'
// 10, 8, 7.5, 9
// Nosso objetivo é criar uma lista que contenha essas duas listas. Já adiantando: é possível uma lista conter outras listas. A seguir, vamos aprender como lidar com esse tipo de dado mais complexo.

const grades = [["João", "Juliana", "Caio", "Ana"], [10, 8, 7.5, 9]];

console.log(grades);
console.log(`Grade of ${grades[0][2]} is ${grades[1][2]}`);