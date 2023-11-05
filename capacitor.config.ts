import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.sntzrr',
  appName: 'front',
  webDir: 'dist/front',
  server: {
    androidScheme: 'https'
  }
};

export default config;
