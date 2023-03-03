import { TaskList } from './tasks';

const ul = document.getElementById('task__list');
const input = document.getElementById('task__input');
const button = document.getElementById('task__input__button');

let myTask = new TaskList(ul);
button.addEventListener('click', () => {
  let task = (<HTMLInputElement>input).value;
  (<HTMLInputElement>input).value = '';
  myTask.add(task);
});
