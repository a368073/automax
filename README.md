# Automax

En este proyecto se desarrolló una página web alojada en el puerto **8888**, relacionada con una empresa de renta de autos llamada **Automax**. El sitio incluye un catálogo de vehículos, información de contacto y datos generales sobre la empresa.

---

# Hacer uso de este proyecto

A continuación, se mostrará lo necesario para poder ejecutar este proyecto en tu máquina local.

---

# Pre-requisitos

Necesitarás tener instaladas las siguientes aplicaciones:

- **Node.js**
- **Docker**

---

# Instalación de Docker en Ubuntu

Antes de instalar Docker, primero actualizaremos nuestro sistema. Abre una terminal e ingresa los siguientes comandos:

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install apt-transport-https ca-certificates curl software-properties-common -y
```

Ahora añadimos el repositorio de Docker (válido para Ubuntu):

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

Instalamos Docker y verificamos que esté funcionando:

```bash
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io -y
sudo systemctl status docker
```

Para utilizar Docker sin `sudo` (opcional):

```bash
sudo usermod -aG docker $USER
newgrp docker
```

Probamos Docker con un contenedor de prueba:

```bash
docker run hello-world
```

---

# Instalación y ejecución

## Opción 1: Ejecutar con Node.js

1. Accede a la carpeta donde se encuentra el archivo `app.js`.
2. Ejecuta el siguiente comando:

```bash
node app.js
```

3. Abre tu navegador y entra a:

```
http://localhost:8888
```

---

## Opción 2: Usar imagen Docker

1. Asegúrate de tener Docker instalado.
2. Descarga la imagen desde Docker Hub:

```bash
docker pull <usuario>/automax:latest
```

3. Ejecuta el contenedor:

```bash
docker run -d -p 8888:8888 <usuario>/automax
```

4. Ingresa a la siguiente dirección en tu navegador:

```
http://localhost:8888
```

 Enlace a la imagen en Docker Hub:  


---

# Estructura del sitio y pruebas manuales

- `index.html` → Contiene el catálogo de la empresa, con un total de **25 autos** y una **navbar** para navegar entre páginas.
- `contacto.html` → Contiene la información de contacto de la empresa.
- `acerca.html` → Información general de la empresa (misión, visión, etc.).
- `vehiculos.html` → Detalle completo de los **3 primeros vehículos**.

---

# Herramientas utilizadas

- **Node.js** – Lenguaje para ejecutar el servidor web.
- **Docker** – Para empaquetar y distribuir la aplicación.
- **HTML & CSS** – Estructura y estilos del sitio web.  
---

# Integrantes del equipo

- **368073** – Pablo Gael Torres  
- **367582** – Mauricio Antonio Balderrama Chaparro  
- **367903** – Gustavo Adolfo Lazo Ramírez  
- **a367760** – Ingrid Yuliana Pérez Rodríguez

---