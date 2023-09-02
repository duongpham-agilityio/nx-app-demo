// components
import { ChangeEvent, MouseEvent } from 'react';
import { Button, Input } from '../commons';

// styles
import './index.css';

export interface TodoItemProps {
  id?: string;
  isEditable?: boolean;
  isComplete?: boolean;
  value?: string;
  onComplete?: (e: MouseEvent) => void;
  onRemove?: (e: MouseEvent) => void;
  onChange?: (e: ChangeEvent) => void;
}

export const TodoItem = (props: TodoItemProps) => {
  const { value, isComplete, isEditable, onChange, onComplete, onRemove } =
    props;

  return (
    <li className="todo-item">
      <div className="todo-value">
        {!isEditable && (
          <p className={`${isComplete ? 'complete' : ''}`}>{value}</p>
        )}
        {isEditable && <Input value={value} onChange={onChange} />}
      </div>
      <div className="todo-option">
        <Button text="Completed" onClick={onComplete} />
        <Button text="Remove" onClick={onRemove} />
      </div>
    </li>
  );
};
