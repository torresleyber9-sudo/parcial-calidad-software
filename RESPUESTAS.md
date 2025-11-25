
---

# RESPUESTAS – Parcial de Calidad de Software Avanzado

---

# Parte 1 – Estrategia

## 1. Diferencia entre CI y CD

- **CI (Integración Continua):**  
  Proceso automático que valida cada cambio en el repositorio. Incluye build, linter, pruebas y cobertura. Su objetivo es detectar errores rápido.

- **CD (Entrega/Despliegue Continua):**  
  Proceso que toma el código validado y lo despliega automáticamente a un ambiente (staging o producción). Su objetivo es entregar software listo para usar frecuentemente.

---

## 2. Lenguaje, linter y cobertura

- **Lenguaje:** Typescript, es un lenguaje con tipado estatico que facilita escribir codigo mas seguro y reducir errores.
- **Linter:** ESlint
  Justificación: estándar en el ecosistema, configurable y soportado por GitHub Actions. Permite deetectar errores de estilo, malas practicas y posibles bugs antes de ejecutar las pruebas.
- **Cobertura:** Jest
  Justificación: permite generar reportes automáticos y validar umbrales sin necesidad de herramientas externas.

---

## 3. Umbral mínimo de cobertura

Elegí un umbral de **[80%]**

Justificación:
- Cubre la mayoría del código crítico.
- Evita que el pipeline se vuelva demasiado rígido.
- Es un estándar industrial razonable para proyectos medianos.

---

# Parte 3 – Uso de nektos/act

### ¿Qué es act?

Es una herramienta que permite correr GitHub Actions localmente usando Docker. Esto facilita revisar flujo de trabajo sin necesidad de hacer commits constantes.

### Requisitos:

- Docker
- Permisos para correr contenedores
- Instalar `act`

### Comando para ejecutar el workflow:

```sh
act push
```
# Parte 4 - Validacion y Logs
## Como identificar fallos de linter, pruebas y coberturas en logs?
### Fallos de Linter (ESlint):
- Se pueden identificar mirando los archivos y lineas, buscando logs tipo mensajes como: error , unexpected, missing. **Process completed with exit code 1**. Se marca en rojo y el scope se detiene inmediatamente.
### Fallos de Pruebas (Jest):
- logs tipo mensajes como: FAIL junto al archivo de test; **exit code 1**
### Fallos de Cobertura:
- Si la cobertura no alcanza el umbral configurado: se muestra la tabla de cobertura con porcentajes. **Coverage failed: threshold not met**; La ejecucion se marca en rojo y no continua.
## Run fallido vs Run exitoso

### **Run fallido**

Un run es fallido cuando:

-   Hay errores de lint,
    
-   Al menos una prueba falla,
    
-   O la cobertura es menor al umbral.
    

Características del run fallido:

-   El pipeline se detiene en el paso donde ocurre el error.
    
-   El workflow aparece marcado en rojo ❌.
    
-   Los logs muestran claramente el mensaje del error.
    

----------

### **Run exitoso**

Un run es exitoso cuando:

-   No se encuentran errores en el linter,
    
-   Todas las pruebas pasan,
    
-   La cobertura cumple el umbral mínimo.
    

Características del run exitoso:

-   Todos los steps aparecen con ✔️ verde.
    
-   El pipeline llega hasta el final sin interrupciones.
    
-   Los logs terminan con un exit code 0.

# Parte 5 – IA y Ética

## Métodos para detectar código generado por IA

### **1. Análisis de patrones lingüísticos o estilísticos**

Herramientas que analizan el estilo, estructuras repetitivas y patrones típicos que suelen aparecer en código generado por IA.

### **2. Modelos de detección basados en probabilidad (GPTZero, Turnitin, etc.)**

Comparan el código contra patrones conocidos de modelos de IA y estiman la probabilidad de que haya sido generado por un mdelo.

----------

## ¿Por qué no se puede asegurar 100% la autoría?

-   La IA imita estilos humanos, lo que dificulta diferenciar autoría.
    
-   El estudiante puede modificar el codigo despues de generarlo.
    
-   Los detectores funcionan con probabilidades, no certezas absolutas.
    
-   No existen firmas digitales que indquen quién escribió realmente el codigo.
    

----------

## Políticas razonables de uso de IA en educación y calidad

-   Permitir IA solo para investigación pero prohibirla para generar código en evaluaciones.
-   Requerir referencias claras cuando un estudiante utilice IA para apoyo conceptual.
-   Combinar evaluaciones prácticas presenciales con trabajos independientes.
-   Apoyar el uso de IA  para aprender, no como sustituto del proceso de desarrollo.
-   Implementar codereviews guiadas para validar la comprensión del estudiante.


