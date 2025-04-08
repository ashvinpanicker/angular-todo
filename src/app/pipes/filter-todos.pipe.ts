import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../model/todo.type';

@Pipe({
  name: 'filterTodos'
})
export class FilterTodosPipe implements PipeTransform {

  transform(todos: Todo[], searchTerm: string): Todo[] {
    if(searchTerm) {
      const text = searchTerm.toLowerCase();
      return todos.filter(todo => todo.title.toLowerCase().includes(text));
    }
    return todos;
  }

}
