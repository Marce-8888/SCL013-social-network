export const configuracionFirebase = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyCFGzkmW9EXuBBkdof7DsulXOA3JAKWW84',
    authDomain: 'red-social-women-today.firebaseapp.com',
    databaseURL: 'https://red-social-women-today.firebaseio.com',
    projectId: 'red-social-women-today',
    storageBucket: 'red-social-women-today.appspot.com',
    messagingSenderId: '201145855452',
    appId: '1:201145855452:web:6ed532f3bfac1ef2c0b319',
    measurementId: 'G-1R73RGXGCB',
  };
    // Inicializar Firebase
  firebase.initializeApp(firebaseConfig);
};

// Registro nuevos Usuarios
export const funRegistroUsuario = (correoRegistro, contrasenaRegistro) => {
  firebase.auth().createUserWithEmailAndPassword(correoRegistro, contrasenaRegistro)
    .then(res => {
      const mensajeRegistro = document.querySelector('#mensajeRegistro');
      mensajeRegistro.innerHTML = '';
      window.location.hash = '#/publicaciones';
      // alert ("Se registro Correctamente")
    })
    .catch((error) => {
      if (error.code === 'auth/invalid-email') {
        mensajeRegistro.innerHTML = 'Debe ingresar un correo electrónico';
      } if (error.code === 'auth/weak-password') {
        mensajeRegistro.innerHTML = 'Contraseña es incorrecta';
      } if (error.code === 'auth/email-already-in-use') {
        mensajeRegistro.innerHTML = 'Cuenta ya existe';
      }
    });
};
// Inicio Sesión usuario
export const funLoginUsuario = (correoLogin, contrasenaLogin) => {
  firebase.auth().signInWithEmailAndPassword(correoLogin, contrasenaLogin)
    .then(() => {
      const mensajeLogin = document.querySelector('#mensajeLogin');
      mensajeLogin.innerHTML = '';
      window.location.hash = '#/publicaciones';
    })
    .catch((error) => {
      // mensajeLogin.classList.add('mensajeError');
      if (error.code === 'auth/user-not-found') {
        mensajeLogin.innerHTML = 'Usuario no esta registrado';
      }
      if (error.code === 'auth/wrong-password') {
        mensajeLogin.innerHTML = 'Contraseña es incorrecta';
      }
      if (error.code === 'auth/invalid-email') {
        mensajeLogin.innerHTML = 'Debe ingresar un correo electrónico';
      }
      // else
      // mensajeLogin.innerHTML = 'Ocurrio un error';
    });
};

// Inicio de sesion con Google
export const funLoginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function (result) {
    // Esto te da un token de acceso de Google. Puede usarlo para acceder a la API de Google.
    const token = result.credential.accessToken;
    // La información de usuario que ha iniciado sesión.
    const user = result.user;
    // console.log('user', user);
  }).catch(function (error) {
    // Manejar errores aquí.
    const errorCode = error.code;
    const errorMessage = error.message;
    // El correo electrónico de la cuenta del usuario utilizada.
    const email = error.email;
    // El tipo de credencial de autenticación de firebase que se utilizó.
    const credential = error.credential;
    // ...
  });
};


// Inicio de sesion con Facebook
export const funLoginFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function (result) {
    // Esto te da un token de acceso de Facebook. Puede usarlo para acceder a la API de Facebook.
    const token = result.credential.accessToken;
    // La información de usuario que ha iniciado sesión.
    const user = result.user;
    console.log('user', user);
  }).catch(function (error) {
    // Manejar errores aquí.
    const errorCode = error.code;
    const errorMessage = error.message;
    // El correo electrónico de la cuenta del usuario utilizada.
    const email = error.email;
    // El tipo firebase.auth.AuthCredential que se usó.
    const credential = error.credential;
    // ...
  });
};
