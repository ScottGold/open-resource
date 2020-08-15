//swap my ether erc20 token to binance chain 'GGG-2AA'

const { BncClient, rpc, crypto, utils} = require("@binance-chain/javascript-sdk")
let calculateRandomNumberHash = utils.calculateRandomNumberHash
let calculateSwapID = utils.calculateSwapID
var Web3 = require('web3');
var sleep = require('sleep');

var rpcClient = rpc

  //我部署的两个合约
  const erc20ContractAddr = "0x09E9443B2Ccf44f58E2751D7376f821d7a1Ec360"
  const swapContractAddr = "0xb79FAA1A849d8B649Db4E0B5eeDc896dEbc6e445" //"0x12DCBf79BE178479870A473A99d91f535ed960AD"

  //币安的
  const deputyEthWalletAddr = "0x1517D7D91026d61fA518Fe5F38c05c9d73Dc1EfD"
  const deputyBNBWalletAddr = "tbnb18xt5mstharyyhucz6fsz5cdr93g9pu2cuvykk3"

  //我的eth 地址
  const clientEthWalletAddr = "0x474F7783D9a01d8eaA6FaeE9De8BDB9453ADf2CD"
  const clientEthWalletKey = Buffer.from("deleted", "hex") //new Buffer

  //币安的钱包
  //const clientBnbWalletAddr = "tbnb17vwyu8npjj5pywh3keq2lm7d4v76n434pwd8av"
  //const clientBnbWalletMnemonic = "lawsuit margin siege phrase fabric matrix like picnic day thrive correct velvet stool type broom upon flee fee ten senior install wrestle soap sick"

//
   const clientBnbWalletAddr = "tbnb1zpv8yxj6ujt38awwdqy9nzynmau7w4krwnj7hg"
   const clientBnbWalletMnemonic = "deleted"


  const web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/1c5b38a27f92410cb5feb13b6efb2e14"))

  const bnbRPC = new rpcClient("https://seed-pre-s3.binance.org", "testnet")

  const erc20Contract = new web3.eth.Contract([{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_evilUser","type":"address"}],"name":"addBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"isPauser","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_maker","type":"address"}],"name":"getBlackListStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renouncePauser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"addPauser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"issue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"redeem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"isBlackListed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_clearedUser","type":"address"}],"name":"removeBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_blackListedUser","type":"address"}],"name":"destroyBlackFunds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_initialSupply","type":"uint256"},{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint8"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Issue","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_blackListedUser","type":"address"},{"indexed":false,"name":"_balance","type":"uint256"}],"name":"DestroyedBlackFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_user","type":"address"}],"name":"AddedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_user","type":"address"}],"name":"RemovedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"PauserAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"PauserRemoved","type":"event"}],erc20ContractAddr)
  const swapContract = new web3.eth.Contract([{"constant":true,"inputs":[],"name":"ERC20ContractAddr","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_swapID","type":"bytes32"}],"name":"isSwapExist","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_swapID","type":"bytes32"}],"name":"refund","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_randomNumberHash","type":"bytes32"},{"name":"_swapSender","type":"address"},{"name":"_bep2SenderAddr","type":"bytes20"}],"name":"calSwapID","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"_swapID","type":"bytes32"},{"name":"_randomNumber","type":"bytes32"}],"name":"claim","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_randomNumberHash","type":"bytes32"},{"name":"_timestamp","type":"uint64"},{"name":"_heightSpan","type":"uint256"},{"name":"_recipientAddr","type":"address"},{"name":"_bep2SenderAddr","type":"bytes20"},{"name":"_bep2RecipientAddr","type":"bytes20"},{"name":"_outAmount","type":"uint256"},{"name":"_bep2Amount","type":"uint256"}],"name":"htlt","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_swapID","type":"bytes32"}],"name":"claimable","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_swapID","type":"bytes32"}],"name":"refundable","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_swapID","type":"bytes32"}],"name":"queryOpenSwap","outputs":[{"name":"_randomNumberHash","type":"bytes32"},{"name":"_timestamp","type":"uint64"},{"name":"_expireHeight","type":"uint256"},{"name":"_outAmount","type":"uint256"},{"name":"_sender","type":"address"},{"name":"_recipient","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_erc20Contract","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_msgSender","type":"address"},{"indexed":true,"name":"_recipientAddr","type":"address"},{"indexed":true,"name":"_swapID","type":"bytes32"},{"indexed":false,"name":"_randomNumberHash","type":"bytes32"},{"indexed":false,"name":"_timestamp","type":"uint64"},{"indexed":false,"name":"_bep2Addr","type":"bytes20"},{"indexed":false,"name":"_expireHeight","type":"uint256"},{"indexed":false,"name":"_outAmount","type":"uint256"},{"indexed":false,"name":"_bep2Amount","type":"uint256"}],"name":"HTLT","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_msgSender","type":"address"},{"indexed":true,"name":"_recipientAddr","type":"address"},{"indexed":true,"name":"_swapID","type":"bytes32"},{"indexed":false,"name":"_randomNumberHash","type":"bytes32"}],"name":"Refunded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_msgSender","type":"address"},{"indexed":true,"name":"_recipientAddr","type":"address"},{"indexed":true,"name":"_swapID","type":"bytes32"},{"indexed":false,"name":"_randomNumberHash","type":"bytes32"},{"indexed":false,"name":"_randomNumber","type":"bytes32"}],"name":"Claimed","type":"event"}], swapContractAddr)

async function step1() {
  //--------------------------------------------
  //Step1 approve erc20 to swap contract address
  //--------------------------------------------
  const approveData = erc20Contract.methods.increaseAllowance(swapContractAddr, "100000000000000000000").encodeABI()
  let nonce = await web3.eth.getTransactionCount(clientEthWalletAddr, 'pending')
  let gasPrice = await web3.eth.getGasPrice()
  let gasLimit = 3000000
  let rawTx = {
    nonce: web3.utils.toHex(nonce),
    gasPrice: web3.utils.toHex(gasPrice),
    gasLimit: web3.utils.toHex(gasLimit),
    to: erc20ContractAddr,
    value: '0x00',
    data: approveData
  }
  var ethereumjs = require('ethereumjs-tx').Transaction
  var signTx = new ethereumjs(rawTx,{'chain':'ropsten'})
  signTx.sign(clientEthWalletKey)
  var serializedTx = signTx.serialize();
  web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('receipt', console.log)
  sleep.msleep(10000)
}

const randomNumber = "e8eae926261ab77d018202434791a335249b470246a7b02e28c3b2fb6ffad8f3"
async function step2() {
  //----------------------------------------------------------------------------
  //Step2 call swap contract to send htlt transaction on Ethereum
  //----------------------------------------------------------------------------
  const timestamp = Math.floor(Date.now()/1000)
  const randomNumberHash = calculateRandomNumberHash(randomNumber, timestamp).toString("hex")
  console.log("randomNumberHash", randomNumberHash)
  const heightSpan = 1000
  const _bep2SenderAddr = "0x0"
  const hexEncodingClientBNBaddr = '0x'+crypto.decodeAddress(clientBnbWalletAddr).toString("hex") //_bep2RecipientAddr
  const amount = "1000000000000000000" // decimal is 18 _outAmount ERC20 asset to swap out.
  const expectedIncome = 99999000 //"99999000:GGG-2AA", decimal is 8, deputy will deduct swap fee, the swap fee is 1000:GGG-2AA
    //这个expectedIncome是用户自己填的？？？？

  const htltData = swapContract.methods.htlt("0x"+randomNumberHash, timestamp, heightSpan, deputyEthWalletAddr, 
                    _bep2SenderAddr, hexEncodingClientBNBaddr, amount, expectedIncome).encodeABI()
  let nonce = await web3.eth.getTransactionCount(clientEthWalletAddr, 'pending')
  let gasPrice = await web3.eth.getGasPrice()
  let gasLimit = 3000000
  let rawTx = {
    nonce: web3.utils.toHex(nonce),
    gasPrice: web3.utils.toHex(gasPrice),
    gasLimit: web3.utils.toHex(gasLimit),
    to: swapContractAddr,
    value: '0x00',
    data: htltData
  }
  var ethereumjs = require('ethereumjs-tx').Transaction
  var signTx = new ethereumjs(rawTx, {'chain':'ropsten'})
  signTx.sign(clientEthWalletKey)
  var serializedTx = signTx.serialize();
  web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('receipt', console.log)
  sleep.msleep(10000)
}

async function step3() {
  const bnbClient = new BncClient("https://testnet-dex.binance.org") 
  await bnbClient.initChain()
  bnbClient.setPrivateKey(crypto.getPrivateKeyFromMnemonic(clientBnbWalletMnemonic))
  bnbClient.useDefaultSigningDelegate()
  bnbClient.useDefaultBroadcastDelegate()
  //----------------------------------------------------------------------------
  //Step3 query swap created by deputy on Binance Chain and verify swap parameters
  //----------------------------------------------------------------------------
  const randomNumberHash = "0xcebcc77da79f5f537a300ca1a38535f1017283fd0ce984e3f4f5ff9ca82e341a"// TODO: copy from ether scan tx info, deputy的log也是这个
  //example calc swapid
  let swapID = calculateSwapID(randomNumberHash.replace("0x", ""), deputyBNBWalletAddr, clientEthWalletAddr).toString()
  //swap contract calc swapid
  //let swapID = calculateSwapID(randomNumberHash.replace("0x", ""), clientEthWalletAddr, "0000000000000000000000000000000000000000000000000000000000000000")
  console.log("swapID", swapID)
  let atomicSwapList = await bnbClient.getSwapByRecipient(clientBnbWalletAddr,500, 0)
  console.log(atomicSwapList)
  while (atomicSwapList.result.atomicSwaps.length == 0 || atomicSwapList.result.atomicSwaps[0].swapId != swapID) {
    console.log("Waiting for the atomic swap created by deputy")
    sleep.msleep(5000)
    atomicSwapList = await bnbClient.getSwapByRecipient(clientBnbWalletAddr,500, 0)
  }
  const atomicSwap = await bnbClient.getSwapByID(swapID)
  console.log(atomicSwap)
  const status = await bnbRPC.status()
  expect(atomicSwap.result.toAddr).toBe(clientBnbWalletAddr)
  expect(atomicSwap.result.randomNumberHash).toBe(randomNumberHash.replace("0x", ""))
  expect(atomicSwap.result.timestamp).toBe(timestamp)
  expect(atomicSwap.result.outAmount).toBe("99999000:GGG-2AA")
  expect(Number(atomicSwap.result.expireHeight)).toBeGreaterThan(Number(status.sync_info.latest_block_height)+100)
}
async function step4() {
  const bnbClient = new BncClient("https://testnet-dex.binance.org")
  await bnbClient.initChain()
  bnbClient.setPrivateKey(crypto.getPrivateKeyFromMnemonic(clientBnbWalletMnemonic))
  bnbClient.useDefaultSigningDelegate()
  bnbClient.useDefaultBroadcastDelegate()
  //----------------------------------------------------------------------------
  //Step4 claim on Binance chain
  //----------------------------------------------------------------------------
  const swapID = "0x"+"a04875c821d52fee1f4fad48acc8aa658eab290a3869a13e1f7549a40f26c8dd" //TODO: copy from deputy log 
  const res = await bnbClient.swap.claimHTLT(clientBnbWalletAddr, swapID, randomNumber)
  console.log(res)
}
  //----------------------------------------------------------------------------
  //If step3 or step4 are failed and the expire height on Ethereum is passed, try to call refund method on Ethereum
  //----------------------------------------------------------------------------
  
step3()

