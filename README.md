# React Native con Tailwind CSS y NativeWind

Este proyecto utiliza **React Native** junto con **Tailwind CSS** mediante la librería [NativeWind](https://www.nativewind.dev/), que permite usar estilos de Tailwind en aplicaciones móviles.

## 📦 Instalación

Antes de empezar, asegúrate de tener un proyecto de React Native ya configurado. Si no tienes uno, puedes crearlo con Expo:

```sh
npx create-expo-app mi-proyecto
cd mi-proyecto
```

Luego, instala las dependencias necesarias:

```sh
npm install nativewind@2
npm install --save-dev --save-exact tailwindcss@3.2.2
```

## ⚙️ Configuración de TailwindCSS

Ejecuta el siguiente comando para inicializar la configuración de Tailwind:

```sh
npx tailwindcss init
```

Esto generará un archivo `tailwind.config.js`. Modifícalo para que incluya lo siguiente:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### 1️⃣ **Configurar Babel**
Añade `nativewind/babel` en tu archivo `babel.config.js`:

```js
module.exports = {
  presets: ["babel-preset-expo"],
  plugins: ["nativewind/babel"],
};
```

### 2️⃣ **Instalar la extensión Tailwind CSS IntelliSense (Opcional pero recomendado)**
Si estás usando VS Code, puedes instalar la extensión **Tailwind CSS IntelliSense** para autocompletar clases y obtener sugerencias.

🔗 [Extensión en VS Code](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

## 🚀 Uso de Tailwind en React Native

Ahora puedes utilizar clases de Tailwind directamente en tus componentes:

```jsx
import { View, Text } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-500">
      <Text className="text-white text-lg font-bold">¡Hola, Tailwind!</Text>
    </View>
  );
}
```

## 🔥 Ejecutar la aplicación

Para iniciar el proyecto, usa:

```sh
npx expo start
```

Esto abrirá el servidor de desarrollo de Expo, donde podrás escanear el código QR con la app de Expo Go o ejecutar en un simulador.

---

✅ ¡Listo! Ahora tienes **React Native** con **Tailwind CSS** configurado correctamente. 🎉

