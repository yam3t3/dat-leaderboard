contractAddress = '0xa7bB18216eFE685402f0D680a4cd7f5e344a0a7A';
datAddress ='0x6c244B85Df9C2648fcd91521BCa84dD1170e2146';
abi = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "king",
          "type": "address"
        }
      ],
      "name": "NewKing",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "newAmount",
          "type": "uint256"
        }
      ],
      "name": "dethrone",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "new_DAT_address",
          "type": "address"
        }
      ],
      "name": "setDATaddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getKing",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "getAmount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ];
datAbi = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];

async function checkChain () {
  const targetNetworkId = '0x1ed816'
  // const targetNetworkId = '0x539'
  const currentChainId = await window.ethereum.request({
	      method: 'eth_chainId'
	    })
  if (currentChainId != targetNetworkId) {
	  document.getElementById('chain').hidden = false
  } else {
	  document.getElementById('chain').hidden = true
	  document.getElementById('approve-dat').hidden = false
	  this.getAmount();
	  this.getKing(); 
	  // this.getDATBalance()
  }
}

async function changeChain () {
  const targetNetworkId = '0x1ed816'
  await window.ethereum.request({
	  method: 'wallet_switchEthereumChain',
	  params: [{ chainId: targetNetworkId }]
  })
  this.checkChain()
}

async function getAmount() {
  const provider = ((window.ethereum != null) ? new ethers.providers.Web3Provider(window.ethereum) : ethers.providers.getDefaultProvider());
  // const provider = new ethers.providers.Web3Provider(window.ethereum)
  await provider.send('eth_requestAccounts', []);
  provider.pollingInterval = 500;
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, abi, signer);
  const amount = await contract.getAmount();
  document.getElementById('throne-price').replaceChildren(amount/(10**18));
  document.getElementById('throne-input').min = amount/(10**18) + 1;
  document.getElementById('throne-input').placeholder = amount/(10**18) + "+" + 1;
  document.getElementById('throne-input').value = amount/(10**18) + 1;
  this.checkAllowance();
}


async function getKing() {
  const provider = ((window.ethereum != null) ? new ethers.providers.Web3Provider(window.ethereum) : ethers.providers.getDefaultProvider());
  // const provider = new ethers.providers.Web3Provider(window.ethereum)
  await provider.send('eth_requestAccounts', []);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, abi, signer);
  king = await contract.getKing();
  const response = await fetch(`https://api.debank.com/user?id=${king}`);
  if (response.ok) {
    const data = await response.json();
    king = data.data.user.web3_id;
    document.getElementById('throne-bio').replaceChildren(data.data.user.bio);
  }
  document.getElementById('throne-holder').replaceChildren(king);
}

async function checkAllowance() {
  const provider = ((window.ethereum != null) ? new ethers.providers.Web3Provider(window.ethereum) : ethers.providers.getDefaultProvider());
  // const provider = new ethers.providers.Web3Provider(window.ethereum)
  await provider.send('eth_requestAccounts', []);
  provider.pollingInterval = 500;
  const signer = provider.getSigner();
  const address = await signer.getAddress();
  const contract = new ethers.Contract(datAddress, datAbi, signer);
  need = document.getElementById('throne-input').value;
  const allowed = await contract.allowance(address, contractAddress);
  if (allowed.gte(ethers.utils.parseEther(need))) {
	  document.getElementById('chain').hidden = true;
	  document.getElementById('approve-dat').hidden = true;
	  document.getElementById('throne-button').hidden = false;
  }
  else {
	  document.getElementById('chain').hidden = true;
	  document.getElementById('approve-dat').disabled = false;
	  document.getElementById('approve-dat').hidden = false;
	  document.getElementById('throne-button').hidden = true;
  }
}

async function approve() {
  const provider = ((window.ethereum != null) ? new ethers.providers.Web3Provider(window.ethereum) : ethers.providers.getDefaultProvider());
  // const provider = new ethers.providers.Web3Provider(window.ethereum)
  await provider.send('eth_requestAccounts', []);
  provider.pollingInterval = 500;
  const signer = provider.getSigner();
  const address = await signer.getAddress();
  const contract = new ethers.Contract(datAddress, datAbi, signer);
  const need = document.getElementById('throne-input').value;
  const res = await contract.approve(contractAddress, ethers.utils.parseEther(need));
  document.getElementById('approve-dat').disabled = true;
}

async function dethrone () {
  const provider = ((window.ethereum != null) ? new ethers.providers.Web3Provider(window.ethereum) : ethers.providers.getDefaultProvider())
  // const provider = new ethers.providers.Web3Provider(window.ethereum)
  await provider.send('eth_requestAccounts', [])
  const signer = provider.getSigner()
  const contract = new ethers.Contract(contractAddress, abi, signer)
  const value = document.getElementById('throne-input').value;
  const res = await contract.dethrone(ethers.utils.parseEther(value));
  // const a = document.createElement('a')
  // a.title = 'Waiting for tx'
  // a.target = 'about:blank'
  // a.href = `https://explorer.testnet.debank.com/tx/${res.hash}`
  // a.replaceChildren('Waiting for transaction to confirm... ⧉')
  // document.getElementById('event').classList = 'alert alert-info alert-dismissible fade show'
  // document.getElementById('event').replaceChildren(a)
  // res.wait();
}


async function getApproval () {
  const provider = ((window.ethereum != null) ? new ethers.providers.Web3Provider(window.ethereum) : ethers.providers.getDefaultProvider())
  // const provider = new ethers.providers.Web3Provider(window.ethereum)
  await provider.send('eth_requestAccounts', [])
  provider.pollingInterval = 500
  const signer = provider.getSigner()
  const contract = new ethers.Contract(datAddress, datAbi, signer)
  contract.on('Approval', (owner, spender, value) => {
	  console.log(owner, spender, value)
	  this.checkAllowance();
  })
}

async function getNewKing () {
  const provider = ((window.ethereum != null) ? new ethers.providers.Web3Provider(window.ethereum) : ethers.providers.getDefaultProvider())
  // const provider = new ethers.providers.Web3Provider(window.ethereum)
  await provider.send('eth_requestAccounts', [])
  provider.pollingInterval = 500
  const signer = provider.getSigner()
  const contract = new ethers.Contract(contractAddress, abi, signer)
  contract.on('NewKing', (king) => {
	  console.log(king)
	  this.getKing();
  })
}


getApproval();
getNewKing();
