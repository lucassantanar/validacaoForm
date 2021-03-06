import Head from "next/head";
import styles from "../styles/Home.module.css";
import * as yup from "yup";
import { useEffect, useRef } from "react";
import { Formik } from "formik";
import { makeStyles, TextField } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));


export default function Home() {
  const user = useRef(null);
  const password = useRef(null);
  const classes = useStyles();
  
  const FormSchema = yup.object().shape({
    user: yup
        .string()
        .strict()
        .required('Campo obrigatório!'),
    password: yup
        .string()
        .required('Campo obrigatório!')
        .min(4, 'Digite pelo menos 4 caracteres')
  });

  useEffect(() => {

  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Formik
          initialValues={{
            user: '',
            password: '',
          }}
          validationSchema={FormSchema}
          onSubmit={(values, actions) => {
            console.log(JSON.stringify(values, null, 2));
          }}
        >
          {({values, handleChange, handleSubmit, errors}) => (
            <form onSubmit={handleSubmit}>
              {console.log(values)}
              {/* <p>Usuários</p>
              <input 
                ref={user}
                defaultValue={values.user}
                onChangeText={handleChange('user')}
              /> */}

                <div className={classes.root}>
                  <TextField
                    type='text'
                    error={errors.user}
                    id="outlined-error-user-text"
                    label="User"
                    helperText={errors.user}
                    ref={user}
                    defaultValue={errors.user}
                    onChange={handleChange('user')}
                    variant="outlined"
                  />
                </div>
              {/* <p>Senha</p>
              <input 
                ref={password}
                defaultValue={values.password}
                onChangeText={handleChange('password')}
              /> */}
              <p></p>
                <div className={classes.root}>
                  <TextField
                    error={errors.password}
                    id="outlined-error-senha-text"
                    label="Senha"
                    helperText={errors.password}
                    ref={password}
                    defaultValue={values.password}
                    onChange={handleChange('password')}
                    variant="outlined"
                  />
                </div>
              {/* {errors.user || errors.password ? <p style={{color: 'red'}}>{errors.user}</p> : <p style={{color: 'red'}}>{errors.password}</p>} */}
              <p>
                <button title="Entrar" type="submit">Entrar</button>
              </p>
            </form>

            
          )}
        </Formik>
      </main>
    </div>
  );
}
