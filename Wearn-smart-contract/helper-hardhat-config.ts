import {ethers} from 'hardhat'

export interface networkConfigItem {
    name?: string
  }
export interface networkConfigInfo {
    [key: number]: networkConfigItem
}

export const networkConfig: networkConfigInfo = {
  31337: {
      name: "localhost",
  },
  11155111: {
      name: "sepolia"
  }
}

export const developmentChains = ["hardhat", "localhost"]
export const VERIFICATION_BLOCK_CONFIRMATIONS = 6
export const frontEndContractsFile = "../Wearn-smart-contract/constants/Wallet.json"
export const frontEndAbiFile = "../wearn-webapp/constants/abi.json"