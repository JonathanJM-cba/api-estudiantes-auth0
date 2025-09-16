# 📚 API Estudiantes - Node.js + Auth0

## 🔹 Descripción

Esta API RESTful permite realizar operaciones CRUD sobre un conjunto de estudiantes. Se implementa en **Node.js** con **Express** y **TypeScript**, usando un **repositorio en memoria** para simular una base de datos NoSQL. La API está protegida mediante **Auth0** usando el flujo **Client Credentials**, con scopes de autorización (`read:estudiantes`, `write:estudiantes`).

---

## 🔹 Tecnologías utilizadas

- Node.js v20+
- Express
- TypeScript
- Auth0 (M2M Application, Client Credentials Flow)
- `express-oauth2-jwt-bearer` para validación de JWT y scopes
- Repositorio en memoria para estudiantes
- dotenv para variables de&#x20;

```
src/
├─ controllers/
│  └─ estudiante.controller.ts
|─ entities/
│  └─ estudiante.entities.ts
├─ middleware/
│  └─ check.auth.middleware.ts
├─ repositories/
│  └─ estudiante.repository.ts
│  └─ inmemory.estudiante.repository.ts
├─ routes/
|  └─ estudiante.routes.ts
│  └─ index.ts
├─ services/
│  └─ estudiante.service.ts
├─ index.ts
.env
package.json
pnpm-lock.yaml
README.md
tsconfig.json
```

---

## 🔹 Endpoints

| Método | Ruta                  | Scope requerido     | Descripción                   |
| ------ | --------------------- | ------------------- | ----------------------------- |
| GET    | /api/estudiantes      | `read:estudiantes`  | Obtener todos los estudiantes |
| GET    | /api/estudiantes/\:id | `read:estudiantes`  | Obtener un estudiante por ID  |
| POST   | /api/estudiantes      | `write:estudiantes` | Crear un nuevo estudiante     |
| PUT    | /api/estudiantes/\:id | `write:estudiantes` | Actualizar un estudiante      |
| DELETE | /api/estudiantes/\:id | `write:estudiantes` | Eliminar un estudiante        |

---

## 🔹 Configuración de Auth0

1. Crear una **API** en Auth0 (ej: `mi-api-estudiantes`) y definir los scopes:
   - `read:estudiantes`
   - `write:estudiantes`
2. Crear una **Machine-to-Machine Application** y autorizarla para esta API, habilitando los scopes necesarios.
3. Guardar `client_id` y `client_secret` de la aplicación.
4. Configurar `.env`:

```env
AUTH0_DOMAIN=https://TU_TENANT.auth0.com/
AUTH0_AUDIENCE=https://mi-api-estudiantes
CLIENT_ID=TU_CLIENT_ID
CLIENT_SECRET=TU_CLIENT_SECRET
PORT=3000
```

---

## 🔹 Variables de entorno

- `AUTH0_DOMAIN` → Dominio de Auth0 (Tenant).
- `AUTH0_AUDIENCE` → Identifier de la API en Auth0.
- `CLIENT_ID` → Client ID de la M2M App.
- `CLIENT_SECRET` → Client Secret de la M2M App.
- `PORT` → Puerto de ejecución de la API (default: 3000).

---

## 🔹 Ejecución local

1. Instalar dependencias:

```bash
pnpm install
```

2. Ejecutar en modo desarrollo:

```bash
pnpm run dev
```

3. Ejecutar build (para producción):

```bash
pnpm run build
pnpm start
```

---

## 🔹 Cómo obtener un token de acceso

**Request a Auth0** (`Client Credentials Flow`):

```bash
curl --request POST \
  --url https://TU_TENANT.auth0.com/oauth/token \
  --header 'content-type: application/json' \
  --data '{
    "client_id":"TU_CLIENT_ID",
    "client_secret":"TU_CLIENT_SECRET",
    "audience":"https://mi-api-estudiantes",
    "grant_type":"client_credentials",
    "scope":"read:estudiantes write:estudiantes"
  }'
```

Esto devuelve un `access_token` que se debe incluir en los headers de cada request a la API:

```
Authorization: Bearer TU_ACCESS_TOKEN
```

---

## 🔹 Notas importantes

- Los endpoints **GET** requieren `read:estudiantes`.
- Los endpoints **POST, PUT, DELETE** requieren `write:estudiantes`.
- Los scopes se validan automáticamente mediante `express-oauth2-jwt-bearer`.
- Actualmente se utiliza un repositorio en memoria; en producción se debería reemplazar por una base de datos real.

---

## 🔹 Autor

- **Jonathan Muñoz**
- Estudiante de Ingeniería en Sistemas, UTN FRC
