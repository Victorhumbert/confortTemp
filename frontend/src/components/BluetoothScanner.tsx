import React from 'react';

const BluetoothScanner: React.FC = () => {

  const scanDevices = async (): Promise<void> => {
    if (!navigator.bluetooth) {
      console.error("Web Bluetooth API não é suportada neste navegador ou ambiente.");
      return;
    }

    try {
      const device = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
      });

      console.log('Dispositivo:', device);
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <button onClick={scanDevices}>
      Procurar dispositivos Bluetooth
    </button>
  );
};

export default BluetoothScanner;
