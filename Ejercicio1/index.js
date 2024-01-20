/*/ Importar los módulos necesarios
const express = require('express');
const https = require('https');

// Crear la aplicación express
const app = express();

// Definir la clave de acceso personal de github
const GITHUB_ACCESS_TOKEN = 'tu clave aquí';

// Definir la ruta para obtener los repositorios más populares de un usuario
app.get('/repos/:username', (req, res) => {
  // Obtener el nombre de usuario de los parámetros de la ruta
  const username = req.params.username;

  // Definir las opciones para la solicitud a la api de github
  const options = {
    hostname: 'api.github.com',
    path: `/users/${username}/repos`,
    headers: {
      'User-Agent': 'Copilot',
      'Authorization': `token ${GITHUB_ACCESS_TOKEN}`
    }
  };

  // Hacer la solicitud a la api de github
  https.get(options, (response) => {
    // Inicializar una variable para almacenar los datos recibidos
    let data = '';

    // Escuchar los eventos de datos y concatenarlos
    response.on('data', (chunk) => {
      data += chunk;
    });

    // Escuchar el evento de fin y procesar los datos
    response.on('end', () => {
      // Parsear los datos como un arreglo de objetos
      const repos = JSON.parse(data);

      // Ordenar los repositorios por el número de estrellas
      const sortedRepos = repos.sort((a, b) => b.stargazers_count - a.stargazers_count);

      // Obtener los 10 primeros repositorios
      const topRepos = sortedRepos.slice(0, 10);

      // Enviar la respuesta como un objeto JSON
      res.json(topRepos);
    });
  }).on('error', (error) => {
    // Enviar un mensaje de error en caso de falla
    res.status(500).send(error.message);
  });
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
*/
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const apiKey = process.env.GITHUB_API_KEY;

const url = `https://api.github.com/users/google/repos?per_page=10`;

axios.get(url, {

})
  .then((response) => {
    const repos = response.data;

    console.log(repos);
  })
  .catch((error) => {
    console.error(error);
  });
