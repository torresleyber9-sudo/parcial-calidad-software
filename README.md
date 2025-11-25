# Pipeline de Calidad – CI/CD con GitHub Actions y nektos/act

Este repositorio contiene un proyecto desarrollado en **TypeScript** y un pipeline de Integración Continua configurado en GitHub Actions.

El objetivo del pipeline es garantizar calidad mediante:
- Linter
- Pruebas unitarias
- Reporte de cobertura
- Build/compilación
- Validación de umbral mínimo de cobertura
- Para simular GitHub Actions de forma local se utiliza **nektos/act**.

## 🧪 1. ¿Cómo ejecutar el pipeline en GitHub Actions?

El workflow principal se encuentra en:

.github/workflows/ci-quality.yml
Se ejecuta automáticamente cuando ocurre:
- `push`
- `pull_request`

Incluye las etapas:

1. **Checkout del código**
2. **Instalación de dependencias**
3. **Linter**
4. **Build**
5. **Pruebas unitarias**
6. **Cálculo de cobertura**
7. **Validación del umbral mínimo de cobertura**

Si alguna etapa falla, **el workflow se detiene**.
