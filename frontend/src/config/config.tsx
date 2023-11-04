/* eslint-disable @typescript-eslint/no-explicit-any */
// configContext.js
import  { createContext, useContext, useEffect, useState } from 'react';
import { ConfigurationService } from '../services/ConfigurationService';

const ConfigContext:any = createContext(null);

const ConfigProvider = ({ children }:any) => {
  const [config, setConfig] = useState<any>(null);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const configData:any = await ConfigurationService.getConfiguration()
        setConfig(configData.data);
        console.log("configgggggggggggg", configData.data)
      } catch (error) {
        console.error('Error fetching config:', error);
      }
    };

    fetchConfig();
  }, []);

  return (
    <ConfigContext.Provider value={config}>
      {config ? children 
      : <div>Loading...</div>
      }
    </ConfigContext.Provider>
  );
};

const useConfig = () => {
  const config = useContext(ConfigContext);
  return config;
};

export { ConfigProvider, useConfig };
