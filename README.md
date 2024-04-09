---
Titulo: Koidevs
Fecha: '2024-04-08'
Proyecto: Portafolio y blog
---

<h2> ¿Qué más <ingeniero/>?! <img src="https://github.com/ABSphreak/ABSphreak/blob/master/gifs/Hi.gif" width="30px"></h2>

<div align="center" width="50">

    <h3> Un Quickstart para arrancar la app <h3/>

</div>

1. Clonar el repo, Se puede descargar sin Dashboard pero no sin Portafolio, este tiene la lógica. <br><br>
2. Una vez instalado, ingresar a la carpeta Portafolio, crear 2 archivos .env .. uno en la raíz del portafolio y otro en la carpeta core.<br><br>
3. En el .env de la raiz, poner REACT_APP_API_URL = 'http://localhost:8000' (o el url del backend). <br><br>
4. En el .env de core poner SECRET_KEY = 'laclavemasultrasecretadetodas123'
5. Ir a core/settings.py y reemplazar la database configurada por la que crea django en los started projects:
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': 'db.sqlite3',
    }
} <br><br>
6. En la terminal instalar un virtualenv ("virtualenv env" para linux) e ingresar a él (source env/bin/activate)
<br><br>
7. Ejecutar "npm i" para instalar las dependencias de react, y luego "pip install -r requirements.txt" para las de django <br><br>
extra. Crear un superuser con "python manage.py createsuperuser", esto es para ingresar al localhost:8000/admin/ y configurar los parametros del blog, categorias y demás <br><br>
8. Ejecutar "npm run start" en una terminal y "python manage.py runserver" en otra <br><br>
9. Se ejecuta automáticamente el server de react en el 3000, el de django no se ejecuta (se recomienda el uso de postman para trabajar con la API)

Happy Coding! 😊

<div align="center">


<i>Sígueme:</i><br>

<a href="https://www.linkedin.com/in/wilcon95/" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-%230077B5.svg?&style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
<a href="https://www.instagram.com/wilson_contreras" target="_blank"><img src="https://img.shields.io/badge/Instagram-%23E4405F.svg?&style=flat-square&logo=instagram&logoColor=white" alt="Instagram"></a>
<a href="https://www.facebook.com/originalphreak" target="_blank"><img src="https://img.shields.io/badge/Facebook-%231877F2.svg?&style=flat-square&logo=facebook&logoColor=white" alt="Facebook"></a>
<a href="https://open.spotify.com/user/0170agi99s5hh187g7mtz245b" target="_blank"><img src="https://img.shields.io/badge/Spotify-%231ED760.svg?&style=flat-square&logo=spotify&logoColor=white" alt="Spotify"></a>
<a href="https://koidevs.com" target="_blank"><img src="https://img.shields.io/badge/koidevs-%230A0A0A.svg?&style=flat-square&logo=DEV.to&logoColor=white" alt="DEV.to"></a>

</div>
