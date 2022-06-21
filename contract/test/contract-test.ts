import { ethers, waffle } from "hardhat";
import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
const { expect, assert } = require("chai");
const provider = waffle.provider;
import { test_config, assertPublicMintSuccess, assertPreMintSuccess } from "./test-helpers";

describe("AstarSignWitch contract", async function () {
  let owner: SignerWithAddress;
  let ad: any;

  const not_revealed_uri = "not_revealed_uri";

    // @ts-ignore
    [owner] = await ethers.getSigners();
    const AstarCats = await ethers.getContractFactory(test_config.contract_name);
    ad = await AstarCats.deploy(test_config.contract_name, test_config.symbol, not_revealed_uri);
    await ad.deployed();

    it('check the owner', async function () {
      expect(await ad.owner()).to.equal(owner.address)
    });

});