import { Formik, Form, ErrorMessage } from 'formik'
import TextInput from './components/TextInput'
import Checkbox from './components/Checkbox'
import Radio from './components/Radio'
import Select from './components/Select'

const validate = (values) => {

  const errors = {}

  if(!values.name) {
    errors.name = 'Requerido'
  } else if (values.name.length < 5) {
    errors.name = 'El nombre es muy corto'
  }

  if(!values.lastname) {
    errors.lastname = 'Requerido'
  } else if (values.lastname.length < 5) {
    errors.lastname = 'El apellido es muy corto'
  }

  if(!values.radio) {
    errors.radio = 'Requerido'
  }

  return errors
}

function App() {
  return (
    <Formik
      initialValues={{ name: '', lastname: '', email: '', sujeto: '', radio: '' }}
      validate={validate}
      onSubmit={values => console.log(values)}
    >
      <Form>
        <TextInput name="name" label="Nombre" />
        <br />
        <TextInput name="lastname" label="Apellido" />
        <br />
        <TextInput name="email" label="Correo" />
        <Select label="Tipo de sujeto" name="sujeto">
          <option value="">Seleccione sujeto</option>
          <option value="felipe">Felipe</option>
          <option value="feliz">Feliz</option>
          <option value="triste">Triste</option>
        </Select>
        <Checkbox name="accept">
          Aceptar términos y condiciones
        </Checkbox>
        <Radio name="radio" value="1" label="1" />
        <Radio name="radio" value="2" label="2" />
        <Radio name="radio" value="3" label="3"/>
        <ErrorMessage name="radio" />
        <button type="submit">Enviar</button>
      </Form>
    </Formik>
  );
}

export default App;
