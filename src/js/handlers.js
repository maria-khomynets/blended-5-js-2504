import { nanoid } from 'nanoid';
import { saveTaskToLS } from './local-storage-api';
import { addTask } from './render-tasks';

export function handleHeaderFormSubmit(event) {
  event.preventDefault();

  const { taskName, taskDescription } = event.currentTarget.elements;
  const taskNameValue = taskName.value.trim();
  const taskDescriptionValue = taskDescription.value.trim();

  if (!taskNameValue || !taskDescriptionValue) {
    console.log('Inputs are empty!');
    return;
  }

  const task = {
    id: nanoid(),
    name: taskNameValue,
    desc: taskDescriptionValue,
  };

  addTask(task);
  saveTaskToLS(task);
  event.target.reset();
}
