import PropTypes from "prop-types";
// form
import {
  FieldValue,
  FieldValues,
  FormProvider as Form,
  UseFormReturn,
  useForm,
} from "react-hook-form";

// ----------------------------------------------------------------------

interface FormProviderProps {
  children: React.ReactNode;
  methods: UseFormReturn<FieldValues, any, undefined>;
  onSubmit: () => void;
}

const FormProvider: React.FunctionComponent<FormProviderProps> = ({
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
