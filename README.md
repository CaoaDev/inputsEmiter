# Mi Aplicación Angular de Suma

Esta es una aplicación Angular simple que permite a los usuarios ingresar valores numéricos, realizar sumas acumulativas y mostrar el resultado en tiempo real. La aplicación consta de varios componentes y un servicio para lograr esta funcionalidad.

## Componentes

### Componente de Entrada (InputRecep)

- **Función Principal**: Permite a los usuarios ingresar valores numéricos.
- **Características**:
  - Inicializa en blanco.
  - Muestra "Número" como marcador de posición.
  - Al hacer clic, el valor se borra para permitir la entrada de un nuevo número.
- **Acción**: Al hacer clic en "Enviar", el valor se suma a una acumulación y se borra del campo de entrada.

### Componente de Mostrar Texto (ShowText)

- **Función Principal**: Muestra el resultado de la suma acumulativa en tiempo real.
- **Características**:
  - Muestra el valor de la suma acumulada.

## Servicio (InputService)

- **Función Principal**: Gestiona la lógica de sumar valores y mantener la suma acumulada.
- **Características**:
  - Utiliza un BehaviorSubject para mantener la suma acumulada actual.
  - Exponer la suma acumulada como un Observable.
  - Permite la actualización de la suma acumulada.

## Módulo Principal (AppModule)

- **Función Principal**: Configura y organiza los componentes y servicios principales de la aplicación.

## Uso

1. Ingrese un valor numérico en el componente de entrada.
2. Haga clic en "Enviar" para agregar el valor a la suma acumulativa.
3. El valor ingresado se borra automáticamente, y la suma acumulativa se muestra en el componente de Mostrar Texto.

## Requisitos

- Node.js y npm instalados en tu sistema.

## Instalación

1. Clona este repositorio a tu máquina local.
2. Navega al directorio del proyecto y ejecuta `npm install` para instalar las dependencias.
3. Ejecuta `ng serve` para iniciar la aplicación.
4. Abre tu navegador y navega a `http://localhost:4200/` para ver la aplicación en funcionamiento.
