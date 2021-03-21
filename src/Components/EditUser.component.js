import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  Container,
  Form,
  FormGroup,
  FormControl,
  Button,
  Badge
} from 'react-bootstrap';

const EditUser = (props) => {
  const [user, setUser] = useState(props.currentUser);
  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    // data is true when form is valid
    if (data) {
      props.updateUser();
    }
  };
  
  return (
    <Container>
      <Form
        id="editUserForm"
        onSubmit={handleSubmit(onSubmit)}
        className="edit-user">
        <FormGroup>
          <FormControl
            type="hidden"
            name="id"
            value={user.id}
          />
        </FormGroup>
        <FormGroup className={errors.firstName && 'has-error'}>
          <FormControl
            type="text"
            name="firstName"
            placeholder="First Name"
            autoComplete="off"
            defaultValue={user.firstName}
            onChange={handleInputChange}
            ref={register({required: true})}
          />
          {errors.firstName && <Badge variant="danger">Required Field</Badge>}
        </FormGroup>
        <FormGroup className={errors.lastName && 'has-error'}>
          <FormControl
            type="text"
            name="lastName"
            placeholder="Last Name"
            autoComplete="off"
            defaultValue={user.lastName}
            onChange={handleInputChange}
            ref={register({required: true})}
          />
          {errors.lastName && <Badge variant="danger">Required Field</Badge>}
        </FormGroup>
        <FormGroup className={errors.date && 'has-error'}>
          <FormControl
            type="text"
            name="date"
            placeholder="Date"
            autoComplete="off"
            defaultValue={user.date}
            onChange={handleInputChange}
            ref={register({required: true})}
          />
          {errors.date && <Badge variant="danger">Required Field</Badge>}
        </FormGroup>
        <FormGroup className={errors.phone && 'has-error'}>
          <FormControl
            type="text"
            name="phone"
            placeholder="Phone"
            autoComplete="off"
            defaultValue={user.phone}
            onChange={handleInputChange}
            ref={register({required: true})}
          />
          {errors.phone && <Badge variant="danger">Required Field</Badge>}
        </FormGroup>
        <Button
          type="submit"
          style={{ marginRight: "1em" }}
          variant="primary"
        >
          Update user
      </Button>
        <Button onClick={() => props.setEditing(false)} variant="light">Cancel</Button>
      </Form>
    </Container>
  );
};

export default EditUser;
