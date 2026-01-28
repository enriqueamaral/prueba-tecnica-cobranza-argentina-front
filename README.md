# prueba-tecnica-cobranza-argentina-front
prueba tecnica para el puesto de desarrollador jr

 Frontend - Cobranza Argentina (Angular)

 Descripción

Aplicación web desarrollada con Angular para consumir la API del backend y permitir:

Autenticación de usuarios

Visualizar y gestionar productos

Manejar autenticación y autorización con JWT

 Características

Autenticación (login)

Guardias de ruta para proteger vistas

Interceptors para enviar token automáticamente

Formularios reactivos con validaciones

Consumo de API RESTful

 Tecnologías

 Angular CLI 21

 TypeScript

 HTML / CSS

 Instalación

git clone https://github.com/enriqueamaral/prueba-tecnica-cobranza-argentina-front

cd prueba-tecnica-cobranza-argentina-front

npm install

ng serve


Luego abre:

http://localhost:4200/

 Estructura del Proyecto

src/app/

├── components/

├── services/

├── guards/

├── interceptors/

├── models/

├── pages/

 Componentes Principales

LoginComponent

ProductsComponent

ProductFormComponent

Cada componente usa:

@Component

Data binding

Event binding

 Services

Servicios para comunicación con backend:

AuthService → login, logout

ProductService → CRUD productos

Usan HttpClient para peticiones HTTP.

 Autenticación

AuthService

Gestiona:

Login

Guardado del JWT

Logout

Almacena el token en localStorage.

 Guards

Protectores de rutas (AuthGuard) para evitar acceso sin token:

canActivate()

 Interceptors

Interceptor para adjuntar el token JWT en cada petición:

Authorization: Bearer <token>

 Formularios

Se utilizan formularios reactivos con validaciones:

campos required

validaciones personalizadas

 Routing

Define rutas de la SPA y rutas protegidas.

 Notas Finales

Proyecto Angular estructurado para escalar fácilmente y con separación clara de responsabilidades.
