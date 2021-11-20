import {KeyObj, WalletObj} from './wallet.models';

export enum WalletActionTypes {
  SUCCESS_WALLET_STORE_INIT = 'WALLET/SUCCESS_WALLET_STORE_INIT',
  FAILED_WALLET_STORE_INIT = 'WALLET/FAILED_WALLET_STORE_INIT',
  SUCCESS_CREATE_WALLET = 'WALLET/SUCCESS_CREATE_WALLET',
  FAILED_CREATE_WALLET = 'WALLET/FAILED_CREATE_WALLET',
  SET_BACKUP_COMPLETE = 'WALLET/SET_BACKUP_COMPLETE',
}

interface successWalletStoreInit {
  type: typeof WalletActionTypes.SUCCESS_WALLET_STORE_INIT;
}

interface failedWalletStoreInit {
  type: typeof WalletActionTypes.FAILED_WALLET_STORE_INIT;
}

interface successCreateWallet {
  type: typeof WalletActionTypes.SUCCESS_CREATE_WALLET;
  payload: {
    key: KeyObj;
    wallet: WalletObj;
  };
}

interface failedCreateWallet {
  type: typeof WalletActionTypes.FAILED_CREATE_WALLET;
}

interface setBackupComplete {
  type: typeof WalletActionTypes.SET_BACKUP_COMPLETE;
  payload: string;
}

export type WalletActionType =
  | successWalletStoreInit
  | failedWalletStoreInit
  | successCreateWallet
  | failedCreateWallet
  | setBackupComplete;