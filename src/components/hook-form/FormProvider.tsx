// form
import {
  FieldValues,
  FormProvider as Form,
  UseFormReturn,
} from "react-hook-form";

// ----------------------------------------------------------------------

interface FormProviderProps {
  children: React.ReactNode;
  methods: UseFormReturn<FieldValues, any, FieldValues>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

export const FormProvider: React.FunctionComponent<FormProviderProps> = ({
  children,
  onSubmit,
  methods,
}) => {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  );
};
