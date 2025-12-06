

1. Clona el repositorio y entra en la carpeta del frontend:

```bash
git clone <repo-url>
cd <repo-folder>/frontend
```

2. Instala dependencias:

```bash
npm install
```

3. Arranca el servidor de desarrollo y expónlo en la red local para acceder desde otros dispositivos:

```bash
npm run dev -- --host
```


1. Desde `frontend/` genera la versión de producción:

```bash
npm run build
```

2. Sirve la carpeta `dist/` en un servidor estático. Opciones rápidas:

```bash
# Usar vite preview (simula servidor):
npm run preview -- --host

# O instalar serve (una sola vez) y servir la carpeta:
npm install -g serve
serve -s dist -l 5173
```

Después, abre `http://<IP-del-ordenador>:5173` desde el otro dispositivo.

Notas y consejos:

- Asegúrate de que el firewall permite conexiones entrantes en el puerto usado (por defecto 5173).
- Si quieres exponer la app públicamente, despliega en Netlify/Vercel/GitHub Pages en lugar de exponer tu máquina.
- Si usas `yarn` o `pnpm`, usa los comandos equivalentes (`yarn dev`, `pnpm dev`, etc.).
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
