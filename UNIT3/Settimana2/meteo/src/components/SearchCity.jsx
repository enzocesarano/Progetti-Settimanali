import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

const SearchCity = ({changeCity}) => {

    const [value, setValue] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        changeCity(value)
        setValue('')
    }

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group>
        <InputGroup.Text className="bg-dark border-0 rounded-5 px-4">
        <i className="bi bi-search text-light"></i>
        <Form.Control className="border-0 no-focus bg-dark text-capitalize text-light fs-5"
          type="text"
          placeholder="Cerca la tua città..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </InputGroup.Text>
      </Form.Group>
    </Form>
  );
};


export default SearchCity