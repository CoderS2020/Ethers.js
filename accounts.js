const { ethers } = require('ethers');

const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/366bc4f47d854ca89cee8a969faf0c65`
);

const main = async () => {
  const balanace = await provider.getBalance(
    '0x8bACb2Ca2e3a1732322BBDDf29E28b4EA0885c06'
  );
  console.log(ethers.utils.formatEther(balanace));
};

main();
