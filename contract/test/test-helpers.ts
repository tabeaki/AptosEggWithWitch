import { ethers, waffle } from "hardhat";
import { Signer } from "ethers";
import type { BigNumber } from "ethers";
import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
const { expect } = require("chai");


export const test_config = {
  price: 350,
  price_pre: 350,
  contract_name: "AstarSignWitch",
  max_supply: 10800,
  max_mint: 1,
  symbol: "ASW"
};


export async function assertPreMintSuccess(ad: any, cost: number | BigNumber, signer: SignerWithAddress, num: number, alreadySupply = 0) {
  let tokenId = await ad.totalSupply();

  expect(
    await ad.connect(signer).preMint(num, {
      value: cost,
    })
  )
    .to.emit(ad, "Transfer")
    .withArgs(ethers.constants.AddressZero, signer.address, tokenId.add(num.toString()));
  expect(await ad.totalSupply()).to.equal(num + alreadySupply);
}

export async function assertPublicMintSuccess(ad: any, cost: number | BigNumber, signer: SignerWithAddress, num: number, alreadySupply = 0) {
  let tokenId = await ad.totalSupply();

  expect(
    await ad.connect(signer).publicMint(num, {
      value: cost,
    })
  )
    .to.emit(ad, "Transfer")
    .withArgs(ethers.constants.AddressZero, signer.address, tokenId.add(num.toString()));
  expect(await ad.totalSupply()).to.equal(num + alreadySupply);
}