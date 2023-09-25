# ALARMA CÓDIGO AZUL - SP #

## EJECUCIÓN

```npm run dev```

## FUNCIONAMIENTO

```mermaid
flowchart TD
A(Inicialización del Servidor) -->  B{Presionarion el mando de activación?};
B -- Sí --> C[Generación de reporte];
B -- No --> D[Aguardar pulsación];
C --> E[Mandar datos al cliente];
E --> F(Proyección de la alerta vía pantalla);
```

## HERRAMIENTAS

1. DBeaver.
2. Visual Studio Code.
3. Arduino IDE.

## TECNOLOGÍAS

1. HTML.
2. CSS.
3. JavaScript.
4. Node.js.
5. Express.
6. SerialPort.
7. Socket.io.
8. MySQL.

## HARDWARE

1. Arduino UNO.
2. Cable serial.
3. Protoboard.
4. Pulsador x2.
5. Cables dupont x6.
6. Resistencia de 220 Ohm x2.