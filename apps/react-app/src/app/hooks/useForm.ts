import { ChangeEvent, FormEvent, useCallback, useState } from 'react';

export interface InitValueForm {
  [key: string]: string;
}

export const useForm = (
  data: InitValueForm,
  submitHandler?: (data: InitValueForm) => void
) => {
  const [formData, setFormData] = useState<InitValueForm>(data);

  const changeData = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const element = e.target;

    const name = element.getAttribute('name') ?? '';
    const value = element.value;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const onSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      let newObj: InitValueForm = {};

      submitHandler && submitHandler(formData);
      Object.keys(formData).forEach((name) => {
        newObj = {
          ...newObj,
          [name]: '',
        };
      });
      setFormData(newObj);
    },
    [submitHandler, formData]
  );

  return {
    formData,
    changeData,
    onSubmit,
  };
};
