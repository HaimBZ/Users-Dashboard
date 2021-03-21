import React from 'react';
import { useForm } from 'react-hook-form';
import { 
  Container,
  Card,
  Form,
  FormGroup,
  FormControl,
  Badge,
  Button
} from "react-bootstrap";
import TopBar from './../Components/Navbar.component';

const Login = () => {
  // here comes the input validation
  
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    // data is true when form is valid
    if (data) {
      document.location.href = "/home";
    }
  };

  return (
    <div>
      <TopBar />
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <Card.Title>Login Form</Card.Title>
            <FormGroup className={errors.name && 'has-error'}>
              <FormControl
                type="text"
                name="name"
                placeholder="Name"
                autoComplete="off"
                ref={register({required: true})}
              />
              {errors.name && <Badge variant="danger">Required Field</Badge>}
              </FormGroup>
              <FormGroup className={errors.lastName && 'has-error'}>
                <FormControl
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  ref={register({required: true})}
                />
                {errors.lastName && <Badge variant="danger">Required Field</Badge>}
              </FormGroup>
              <FormGroup className={errors.email && 'has-error'}>
                <FormControl
                  type="mail"
                  name="email"
                  placeholder="Email"
                  ref={register(
                    {
                      required: true,
                      pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "invalid email address"
                      }
                    })}
                />
                {errors.email && errors.email.type === 'required' && <Badge variant="danger">Required Field</Badge>}
                {errors.email && errors.email.type === 'pattern' && <Badge variant="danger">{errors.email.message}</Badge>}
              </FormGroup>
              <FormGroup className={errors.password && 'has-error'}>
                <FormControl
                  type="password"
                  name="password"
                  placeholder="Password"
                  ref={register({required: true})}
                />
                {errors.password && <Badge variant="danger">Required Field</Badge>}
              </FormGroup>
              <Button variant="primary" type="submit">
                Submit
              </Button>
          </Card>
      </Form>
    </Container>
    </div>
  );
};

export default Login;
