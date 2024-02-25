---
sidebar_position: 2
---
# Instalación del Facturador

Docker | Linux | SSL Externo

## _Pasos_

<ul>
<li>Para instalar debe ejecutar el script evitando instalar el SSL, le será consultado en el proceso y deberá ingresar "n".</li>
<li>Finalizada la instalación debe dirigirse a la ruta de instalación</li>
    cd /root/facturadorpro31/
<li>Debe editar el archivo **.env**</li>
    nano .env
<li>Dentro del editor ubicar los parámetros y cambiarlos</li>

| **antes**  | **después**   |
| ------- | -------- |
| **APP_URL=http://$\{APP_URL_BASE}**   | **APP_URL=https://$\{APP_URL_BASE**}    |
| **FORCE_HTTPS=false**   | **FORCE_HTTPS=true**    |

<li>Una vez finalizado, guarde y salga del editor.</li>
<li>Ejecute los siguientes comandos para eliminar la caché de la aplicación</li>
    php artisan config:Cache
<li>Con eso habrá completado el lado de la herramienta, en ese momento hasta no tener un SSL configurado no podrá acceder a la herramienta.</li>
</ul>

:::note **Importante**
<li>Recuerde habilitar el puerto 443 para poder tener acceso a la herramienta.</li>
