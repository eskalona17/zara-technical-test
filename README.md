# Zara Origins – Technical Test

Proyecto desarrollado como parte de una prueba técnica para **Zara Origins**, enfocado en el diseño, animaciones y experiencia visual de una página web moderna y minimalista.

---

## 🚀 Instalación y ejecución

### 1️⃣ Clonar el repositorio
```bash
git clone <URL_DEL_REPOSITORIO>
cd zara-technical-test
```

### 2️⃣ Instalar dependencias
```bash
npm install
```

### 3️⃣ Ejecutar en modo desarrollo
```bash
npm run dev -- --host
```

---

## 🧩 Tecnologías utilizadas

| Categoría | Tecnología |
|------------|-------------|
| 🧱 Build Tool | [Vite](https://vitejs.dev/) |
| 💅 Estilos | SCSS (mobile-first + `clamp()` para escalado fluido) |
| 🎬 Animaciones | [GSAP](https://greensock.com/gsap/) + [ScrollTrigger](https://greensock.com/scrolltrigger/) |
| 🧭 Estructura | HTML semántico + arquitectura modular de secciones |

---

## ⚙️ Decisiones técnicas

- **Vite** se eligió por su rendimiento y simplicidad, ideal para un entorno de prototipado rápido.  
- **SCSS** permite mantener una arquitectura de estilos escalable, con `@import` para modularidad.  
- **GSAP + ScrollTrigger** brindan un control preciso de animaciones dependientes del scroll, con mejor rendimiento que CSS puro o librerías más pesadas.  
- Uso de `clamp()` en márgenes y tipografía para lograr un diseño fluido sin necesidad de múltiples media queries.  

---

## 🕒 Tiempo estimado dedicado

| Etapa | Duración aproximada |
|--------|----------------------|
| Configuración del entorno | 30 min |
| Maquetación y estructura HTML/SCSS | 2 h |
| Implementación de animaciones GSAP | 2.5 h |
| Ajustes responsivos y pruebas | 1.5 h |
| Documentación y limpieza | 1 h |
| **Total estimado** | **~7.5 horas** |

---

## 📁 Estructura del proyecto

```
zara-technical-test/
│
├── src/
│   ├── public/
│   │   ├── img01.png
│   │   ├── ...
│   ├── styles/
│   │   ├── _base.scss
│   │   ├── main.scss
│   ├── scripts/
│   │   ├── animations.js
│   ├── index.html
│
├── vite.config.js
├── package.json
├── README.md
```

---

## 👤 Autor

**Nombre:** Fernando Escalona  
**Fecha:** Octubre 2025  
**Contacto:** fer.escalonso@gmail.com

---

